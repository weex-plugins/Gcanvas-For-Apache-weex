/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

#import "WXGCanvasModule.h"
#import <WeexSDK/WXDefine.h>
#import "WXGCanvasComponent.h"
#import "WeexGcanvas.h"
#import <GCanvas/GCVCommon.h>
#import <GCanvas/GCanvasPlugin.h>
#import <WeexSDK/WXComponentManager.h>
#import <SDWebImage/SDWebImageManager.h>
#import <WeexPluginLoader/WeexPluginLoader.h>
#if 0
#import <UT/AppMonitor.h>
#endif
#import "WXGCanvasObject.h"


#define kGCanvasOffScreenPrefix @"offscreen_"

#define AppModule           @"GCanvas"
#define MONITOR_POINT_FPS   @"GCanvasFps"
#define MEASURE_FPS         @"fps"
#define DIMENSION_TYPE      @"type"
#define DIMENSION_PLUGIN    @"plugin"

@interface WXGCanvasModule()<GLKViewDelegate, GCVImageLoaderProtocol>

/**
 * cache WXGCanvasObject by componentId in MutableDictionary
 */
@property (nonatomic, strong) NSMutableDictionary *wxGCanvasObjectDict;

@property (nonatomic, assign) BOOL enterBackground;
@property (nonatomic, strong) dispatch_queue_t preloadQueue;

@end


@implementation WXGCanvasModule

WX_PlUGIN_EXPORT_MODULE(gcanvas, WXGCanvasModule)

@synthesize weexInstance;

#pragma mark - Export asynchronous method
/**
 * @abstract JS render method
 */
WX_EXPORT_METHOD(@selector(render:componentId:));

/**
 * @abstract JS preload image
 */
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));

/**
 * @abstract JS bind image to a texture
 */
WX_EXPORT_METHOD(@selector(bindImageTexture:componentId:callback:));

/**
 * @abstract JS setContextType,  0-GCVContextType2D, 1-GCVContextTypeWebGL
 */
WX_EXPORT_METHOD(@selector(setContextType:componentId:));

/**
 * @abstract JS setLogLevel
 */
WX_EXPORT_METHOD(@selector(setLogLevel:));

/**
 * @abstract JS call this function while viewdisappear
 */
WX_EXPORT_METHOD(@selector(resetComponent:));



#pragma mark - Export synchronous method
/**
 * @abstract JS initalise GCanvas
 */
WX_EXPORT_METHOD_SYNC(@selector(enable:));

/**
 * @abstract JS callNative method just for WebGL
 */
WX_EXPORT_METHOD_SYNC(@selector(extendCallNative:));



#pragma mark - CreateEAGLContext
/**
 * Create EAGLContext by the same EAGLSharegroup
 */
static EAGLContext          *_staticFirstContext;
static NSMutableDictionary  *_staticEAGLContextDict;
+ (EAGLContext*)createEAGLContextWithComponentId:(NSString*)componentId{
    EAGLContext *context = nil;
    if( !_staticFirstContext ){
        _staticFirstContext = [[EAGLContext alloc] initWithAPI:kEAGLRenderingAPIOpenGLES2];
        context = _staticFirstContext;
    } else {
        EAGLContext *newContext = [[EAGLContext alloc] initWithAPI:kEAGLRenderingAPIOpenGLES2 sharegroup:_staticFirstContext.sharegroup];
        context = newContext;
    }
    
    if( !_staticEAGLContextDict ){
        _staticEAGLContextDict = NSMutableDictionary.dictionary;
    }
    
    if( !_staticEAGLContextDict[componentId] ){
        _staticEAGLContextDict[componentId] = context;
    }
    
    return context;
}

- (void)dealloc{
    [NSObject cancelPreviousPerformRequestsWithTarget:self];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

/**
 * WXModuleProtocol method
 * return the execute queue for the module
 */
- (dispatch_queue_t)targetExecuteQueue{
    static dispatch_queue_t gcanvasQueue;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        gcanvasQueue = dispatch_queue_create("com.taobao.gcanvas", DISPATCH_QUEUE_SERIAL);
    });
    return gcanvasQueue;
}

#pragma mark - Weex Export Method
- (NSString*)enable:(NSDictionary *)args{
    if (!args || !args[@"componentId"] ){
        return @"";
    }
    
    NSString *componentId = args[@"componentId"];
    GCVLOG_METHOD(@"enable:callback:, componentId=%@", componentId);
    
    if( !self.wxGCanvasObjectDict ){
        self.wxGCanvasObjectDict = NSMutableDictionary.dictionary;
        self.enterBackground = NO;
        
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onGCanvasCompLoadedNotify:)
                                                     name:kGCanvasCompLoadedNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onGCanvasResetNotify:)
                                                     name:kGCanvasResetNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onDidEnterBackgroundNotify:)
                                                     name:UIApplicationWillResignActiveNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onWillEnterForegroundNotify:)
                                                     name:UIApplicationDidBecomeActiveNotification
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onWeexInstanceWillDestroy:)
                                                     name:WX_INSTANCE_WILL_DESTROY_NOTIFICATION
                                                   object:nil];
    }
    
    WXGCanvasObject *gcanvasInst = [[WXGCanvasObject alloc] initWithComponentId:componentId];
    self.wxGCanvasObjectDict[componentId] = gcanvasInst;
    
    GCanvasPlugin *plugin = [[GCanvasPlugin alloc] initWithComponentId:componentId];
    gcanvasInst.plugin = plugin;
    
    GCVWeakSelf
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if( component ){
        dispatch_sync([self targetExecuteQueue], ^{
            EAGLContext *context = [WXGCanvasModule createEAGLContextWithComponentId:componentId];
            context.multiThreaded = YES;
            component.glkview.context = context;
            component.glkview.delegate = weakSelf;
        });
        gcanvasInst.component = component;
    }
    return @"";
}

/**
 * Export JS method for context 2D render
 *
 * @param   commands    render commands from js
 * @param   componentId GCanvas component identifier
 */
- (void)render:(NSString *)commands componentId:(NSString*)componentId{
    if( self.enterBackground ) return;
    
    GCVLOG_METHOD(@"render:componentId:,commands=%@, componentId=%@", commands, componentId);
    
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    if( !component || !plugin ){
        return;
    }
    
    if( component.isOffscreen ){
        component.glkview.hidden = YES;
    }
    
    [plugin addCommands:commands];
    [self execCommandById:componentId];
}

/**
 * Export JS method for reset GCanvas component while disappear
 *
 * @param   componentId GCanvas component identifier
 */
- (void)resetComponent:(NSString*)componentId
{
    [[NSNotificationCenter defaultCenter] postNotificationName:kGCanvasResetNotification
                                                        object:nil
                                                      userInfo:@{@"componentId":componentId}];
}

/**
 * Export JS method for preloading image
 *
 * @param   data        NSArray, contain 2 item
                        data[0] - image source,
                        data[1] - fake texture id(auto-increment id)of GCanvasImage in JS
 * @param   componentId GCanvas component identifier
 * @param   callback
 */
- (void)preLoadImage:(NSArray *)data callback:(WXModuleCallback)callback{
    if( !data || ![data isKindOfClass:NSArray.class] || data.count != 2){
        if( callback ) callback(nil);
        return;
    }
    
    if( ![GCVCommon sharedInstance].imageLoader ){
        [GCVCommon sharedInstance].imageLoader = self;
    }
    
    if( !self.preloadQueue ){
        self.preloadQueue = dispatch_queue_create("com.taobao.gcanvas.preload", DISPATCH_QUEUE_CONCURRENT);
    }
    
    NSString *src = data[0];
    if( [src hasPrefix:kGCanvasOffScreenPrefix] ){
        if( callback ) callback(nil);
        return;
    }
    
    GCVLOG_METHOD(@" PreLoadImage start... src=%@", src);
    dispatch_async(self.preloadQueue , ^{
        NSUInteger jsTextureId = [data[1] integerValue];
        [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache, BOOL fromCache) {
             if ( !imageCache ){
                 if( callback ) callback(@{@"error":@"preload error!"});
                 return;
             }
             imageCache.jsTextreId = jsTextureId;
             if( callback) {
                 callback(@{@"width":@(imageCache.width), @"height":@(imageCache.height)});
             }
         }];
    });
}

/**
 * Export JS method for binding image to real native texture
 *
 * @param   data        same as preLoadImage:callback:
 * @param   componentId GCanvas component identifier
 * @param   callback
 */
- (void)bindImageTexture:(NSArray *)data componentId:(NSString*)componentId callback:(WXModuleCallback)callback{
    if( !data || ![data isKindOfClass:NSArray.class] || data.count != 2){
        if( callback ) callback(@{});
        return;
    }
    
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    WXGCanvasComponent *component = gcanvasInst.component;
    if( !component || !plugin ){
        if( callback ) callback(@{});
        return;
    }
    
    NSString *src = data[0];
    NSUInteger jsTextureId = [data[1] integerValue];
    
    __block GLuint textureId = [plugin getTextureId:jsTextureId];
    if( textureId == 0 ){
        //check offscreen
        NSRange range = [src rangeOfString:kGCanvasOffScreenPrefix];
        if( range.location == 0 ){
            NSString *orgComponentId = [src substringFromIndex:range.length];
            WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[orgComponentId];
            GCanvasPlugin *orgPlugin = gcanvasInst.plugin;
            WXGCanvasComponent *orgComponent = gcanvasInst.component;
            if( orgPlugin  && orgComponent ){
                orgComponent.glkview.hidden = YES;
                [plugin addTextureId:[orgPlugin textureId] withAppId:jsTextureId
                               width:orgComponent.componetFrame.size.width
                              height:orgComponent.componetFrame.size.height
                           offscreen:YES];
            }
            if( callback ) callback(@{});
            return;
        }
        
        void (^bindImageTextureBlock)(GCVImageCache*) = ^(GCVImageCache* cache){
            dispatch_main_async_safe(^{
                [EAGLContext setCurrentContext:component.glkview.context];
                textureId = [GCVCommon bindTexture:cache.image];
                if( textureId > 0 ){
                    GCVLOG_METHOD(@"==>bindImageTexture success: jsTextureId:%d => texutreId:%d, componentId:%@", jsTextureId, textureId, componentId);

                    [plugin addTextureId:textureId withAppId:jsTextureId
                                   width:cache.width height:cache.height
                               offscreen:NO];
                    [[GCVCommon sharedInstance] removeLoadImage:src];
                }
            });
        };
        
        GCVImageCache *imageCache = [[GCVCommon sharedInstance] fetchLoadImage:src];
        if( !imageCache ){
            [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache, BOOL fromCache) {
                bindImageTextureBlock(imageCache);
                if( callback ){
                    (textureId > 0) ? callback(@{}) : callback(@{@"error":@"bind error"});
                }
            }];
            return;
        } else {
            bindImageTextureBlock(imageCache);
        }
    }

    if( callback ){
        (textureId > 0) ? callback(@{}) : callback(@{@"error":@"bind error"});
    }
}

/**
 * Export JS method  set GCanvas plugin contextType
 * @param   type    see GCVContextType
 */
- (void)setContextType:(NSUInteger)type componentId:(NSString*)componentId{
    GCVLOG_METHOD(@"setContextType %ld componentId:%@", (unsigned long)type, componentId);
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    if( plugin ){
        [plugin setContextType:(int)type];
    }
}

/**
 * Export JS method  set log level
 * @param   level
 */
- (void)setLogLevel:(NSUInteger)level{
    
}

#pragma mark - Notification
- (void)onGCanvasCompLoadedNotify:(NSNotification*)notification{
    
}

- (void)onGCanvasResetNotify:(NSNotification*)notification{
    NSString *componentId = notification.userInfo[@"componentId"];
    
    //find plugin and component bind with componentId, set needChangeEAGLContenxt and remove render commands
    [self.wxGCanvasObjectDict enumerateKeysAndObjectsUsingBlock:^(NSString *compId, WXGCanvasObject *gcanvsInst, BOOL * _Nonnull stop) {
        if ( [componentId isEqualToString:gcanvsInst.componentId] &&  gcanvsInst.component ) {
            gcanvsInst.component.needChangeEAGLContenxt = YES;
            GCanvasPlugin *plugin = gcanvsInst.plugin;
            [plugin removeCommands];
        }
    }];
}

- (void)onDidEnterBackgroundNotify:(NSNotification*)notification{
    self.enterBackground = YES;
}

- (void)onWillEnterForegroundNotify:(NSNotification*)notification{
    self.enterBackground = NO;
}

- (void)onWeexInstanceWillDestroy:(NSNotification*)notification{
#if 0
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        AppMonitorMeasureSet *measures = [[AppMonitorMeasureSet alloc] init];
        [measures addMeasureWithName:MEASURE_FPS];
        AppMonitorDimensionSet *dimensions = [[AppMonitorDimensionSet alloc] init];
        [dimensions addDimensionWithName:DIMENSION_TYPE];
        [dimensions addDimensionWithName:DIMENSION_PLUGIN];

        [AppMonitorStat registerWithModule:AppModule monitorPoint:MONITOR_POINT_FPS measureSet:measures dimensionSet:dimensions];
    });
    [self.wxGCanvasObjectDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, WXGCanvasObject* gcanvasInst, BOOL * _Nonnull stop) {
        GCanvasPlugin *plugin = gcanvasInst.plugin;
        CGFloat fps = [plugin fps];
        if( fps > 0 )
        {
            AppMonitorMeasureValueSet *measureValSet = [[AppMonitorMeasureValueSet alloc] init];
            [measureValSet setDoubleValue:fps forName:MEASURE_FPS];

            NSDictionary *dimDict = @{DIMENSION_PLUGIN:@"weex", DIMENSION_TYPE:@([plugin contextType])};
            AppMonitorDimensionValueSet *dimensionValSet = [[AppMonitorDimensionValueSet alloc] initWithDictionary:dimDict];

            [AppMonitorStat commitWithModule:AppModule monitorPoint:MONITOR_POINT_FPS dimensionValueSet:dimensionValSet measureValueSet:measureValSet];
        }
    }];
#endif
    
    NSString *instanceId = notification.userInfo[@"instanceId"];
    if (![instanceId isEqualToString:weexInstance.instanceId]) {
        return;
    }
    
    [self.wxGCanvasObjectDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, WXGCanvasObject* gcanvasInst, BOOL * _Nonnull stop) {
        WXGCanvasComponent *comp = gcanvasInst.component;
        comp.glkview.delegate = nil;
         
        GCanvasPlugin *plugin = gcanvasInst.plugin;
        [plugin removeGCanvas];
     }];
    
    [self.wxGCanvasObjectDict removeAllObjects];
    self.wxGCanvasObjectDict = nil;
    
    [[GCVCommon sharedInstance] clearLoadImageDict];
    
    [_staticEAGLContextDict removeObjectForKey:instanceId];
    if( _staticEAGLContextDict.count == 0 ){
        _staticFirstContext = nil;
    }
}

- (WXGCanvasComponent*)gcanvasComponentById:(NSString*)componentId{
    __block WXGCanvasComponent *component = nil;
    __weak typeof(self) weakSelf = self;
    
    dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
    while ( !component || !component.glkview ) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.05 * NSEC_PER_SEC)), [self targetExecuteQueue], ^{
            WXPerformBlockSyncOnComponentThread(^{
                component = (WXGCanvasComponent *)[weakSelf.weexInstance componentForRef:componentId];
            });
            dispatch_semaphore_signal(semaphore);
        });
        dispatch_semaphore_wait(semaphore, dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)));
    }
    return component;
}

- (WXGCanvasObject*) gcanvasInstanceByGLKView:(GLKView*)glkview{
    __block WXGCanvasObject *gcanvasInst = nil;
    [self.wxGCanvasObjectDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, WXGCanvasObject *obj, BOOL * _Nonnull stop) {
        if( obj.component.glkview == glkview ){
            gcanvasInst = obj;
            *stop = YES;
        }
    }];
    return gcanvasInst;
}

- (void)execCommandById:(NSString*)componentId{
    GCVLOG_METHOD(@"execCommandById:, componentId: %@",componentId);
    
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    if ( gcanvasInst.component ) {
        GCVWeakSelf
        dispatch_main_async_safe(^{
            if( !weakSelf.enterBackground ){
                [gcanvasInst.component.glkview setNeedsDisplay];
            }
        });
    }
}

#pragma mark - GLKViewDelegate
- (void)glkView:(GLKView*)view drawInRect:(CGRect)rect{
    WXGCanvasObject *gcanvasInst = [self gcanvasInstanceByGLKView:view];
    
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    
    if( !component || !plugin ){
        return;
    }
    
    GCVLOG_METHOD(@"glkView:drawInRect:, componentId:%@, context:%p", component.ref, component.glkview.context);
    
    //multi GCanvas instance, need change current context while execute render commands
    [EAGLContext setCurrentContext:component.glkview.context];

    if ( component.needChangeEAGLContenxt ){
        [self refreshPlugin:plugin withComponent:component];
        [weexInstance fireGlobalEvent:@"GCanvasReady" params:@{@"ref":component.ref}];
        component.needChangeEAGLContenxt = NO;
    }
    
    [plugin execCommands];
}

#pragma mark - GCVImageLoaderProtocol
- (void)loadImage:(NSURL*)url completed:(GCVLoadImageCompletion)completion{
    [[SDWebImageManager sharedManager] downloadImageWithURL:url
                                                    options:0
                                                   progress:nil
                                                  completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
                                                      completion(image, error, finished, url);
    }];
}


/**
 * reset and refresh GCanvas Plugin
 *
 * @param   plugin      the GCanvasPlugin object to refresh
 * @param   component   WXGCanvasComponent object bind with plugin
 */
- (void)refreshPlugin:(GCanvasPlugin*)plugin withComponent:(WXGCanvasComponent*)component{
    CGFloat devicePixelRatio = component.calculatedFrame.size.width * [UIScreen mainScreen].nativeScale / component.componetFrame.size.width ;
    [plugin setDevicePixelRatio:devicePixelRatio];
    
    CGRect compFrame = component.componetFrame;
    CGRect gcanvasFrame = CGRectMake(compFrame.origin.x, compFrame.origin.y,
                                     compFrame.size.width*devicePixelRatio,
                                     compFrame.size.height*devicePixelRatio);
    [plugin setClearColor:component.glkview.backgroundColor];
    [plugin setFrame:gcanvasFrame];
}



#pragma mark - WebGL
/**
 * JS call native directly just for WebGL
 *
 * @param   dict    input WebGL command
                    dict[@"contextId"] - GCanvas component identifier
                    dict[@"type"] - type
                    dict[@"args"] - WebGL command
 
 * @return          return execute result
 */
- (NSDictionary*)extendCallNative:(NSDictionary*)dict{
    NSString *componentId = dict[@"contextId"];
    
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    if( !gcanvasInst ){
        return @{};
    }
    
    WXGCanvasComponent *component = gcanvasInst.component;
    if( component.glkview.delegate ){
        component.glkview.delegate = nil;
    }
    
    NSDictionary *retDict = [self callGCanvasNative:dict];
    return retDict;
}

- (NSDictionary*)callGCanvasNative:(NSDictionary*)dict{
    NSString *componentId = dict[@"contextId"];
    NSUInteger type = [dict[@"type"] integerValue];
    NSString *args = dict[@"args"];
    
    WXGCanvasObject *gcanvasInst = self.wxGCanvasObjectDict[componentId];
    
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;

    if( !component || !plugin ) return @{};
    
    if ( component.needChangeEAGLContenxt ){
        [EAGLContext setCurrentContext:component.glkview.context];
        
        [self refreshPlugin:plugin withComponent:component];
        component.needChangeEAGLContenxt = NO;
        
        //setNeedsDisplay at first, for WebGL case render only once.
        dispatch_main_sync_safe(^{
            [component.glkview setNeedsDisplay];
        });
    }
    
    //
    /* call native type description
     +-----------------------------------------------------+
     |                   32 bit integer                    |
     +-----------------------------------------------------+
     |    31~30    |     29      |       (28~0)            |
     | ContextType | Method Type |      OptionType         |
     +-----------------------------------------------------+
     |  0x01-WebGL |  0x00-async | 0-defaut,1-WebGL render |
     |  0x00-2D    |  0x01-sync  | other reserve           |
     +-----------------------------------------------------+
     */
    if( (type >> 30 & 0x01) == 1 ){      //webgl
        BOOL isSync = type >> 29 & 0x01; //sync
        if( isSync ){
            BOOL rendCmd = type & 0x01;  //render per 16 ms
            if( rendCmd ){
                dispatch_main_sync_safe(^{
                    [component.glkview setNeedsDisplay];
                });
                return @{};
            }
        #ifdef DEBUG
            else{
                NSRange range = [args rangeOfString:@","];
                if (range.location != NSNotFound) {
                    NSString *indexStr = [args substringToIndex:range.location];
                    NSUInteger index = [indexStr integerValue];
                    if (index == 136) {
                        dispatch_main_sync_safe(^{
                            [component.glkview setNeedsDisplay];
                        });
                    }
                }
            }
        #endif
            
            [plugin addCommands:args];
            [plugin execCommands];
            
            NSString *ret = [plugin getSyncResult];
            if(ret){
                return @{@"result":ret};
            }
        }
    }
    return @{};
}
@end
