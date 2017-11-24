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
#import "WXGCanvasObject.h"


#if 0
#define WEBGL_FPS
#endif

@interface WXGCanvasModule()<GLKViewDelegate, GCVImageLoaderProtocol>

@property (strong, nonatomic) NSMutableDictionary *gcanvasDict;
@property (assign, nonatomic) BOOL enterBackground;

#ifdef WEBGL_FPS
@property (nonatomic, assign) NSUInteger renderFrames;
@property (nonatomic, assign) CGFloat renderFPS;
@property (nonatomic, assign) CFTimeInterval renderLastTime;
#endif

@end


@implementation WXGCanvasModule

WX_PlUGIN_EXPORT_MODULE(gcanvas,WXGCanvasModule)


@synthesize weexInstance;

//async
WX_EXPORT_METHOD(@selector(getDeviceInfo:callback:));
WX_EXPORT_METHOD(@selector(render:componentId:));
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));
WX_EXPORT_METHOD(@selector(bindImageTexture:componentId:callback:));
WX_EXPORT_METHOD(@selector(setContextType:componentId:));
WX_EXPORT_METHOD(@selector(setLogLevel:));
WX_EXPORT_METHOD(@selector(resetComponent:));   //viewdisapper调用, 通知其他gcavans reset

//sync
WX_EXPORT_METHOD_SYNC(@selector(enable:));
WX_EXPORT_METHOD_SYNC(@selector(extendCallNative:));


static EAGLContext *_firstContext;
static NSMutableDictionary *_instanceDict;

+ (EAGLContext*)getEAGLContext:(NSString*)instacneId
{
    if(!_instanceDict){
        _instanceDict = NSMutableDictionary.dictionary;
    }
    
    if( !_instanceDict[instacneId] ){
        _instanceDict[instacneId] = @(1);
    }
    
    if( !_firstContext )
    {
       _firstContext = [[EAGLContext alloc] initWithAPI:kEAGLRenderingAPIOpenGLES2];
        return _firstContext;
    }
    else
    {
        EAGLContext *newContext = [[EAGLContext alloc] initWithAPI:kEAGLRenderingAPIOpenGLES2 sharegroup:_firstContext.sharegroup];
        return newContext;
    }
}

- (void)dealloc
{
    [NSObject cancelPreviousPerformRequestsWithTarget:self];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (dispatch_queue_t)targetExecuteQueue
{
    static dispatch_queue_t gcanvasQueue;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        gcanvasQueue = dispatch_queue_create("com.taobao.gcanvas", DISPATCH_QUEUE_SERIAL);
    });
    return gcanvasQueue;
}

#pragma mark - Weex Export Method
- (void)getDeviceInfo:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    if(callback){
        callback(@{@"result":@"success", @"data":@{@"platform":@"iOS"}});
    }
}

- (NSString*)enable:(NSDictionary *)args
{
    if (!args || !args[@"componentId"])
    {
        return @"";
    }
    NSString *componentId = args[@"componentId"];
    
    GCVLOG_METHOD(@"enable:callback:, componentId=%@", componentId);
    
    if(!self.gcanvasDict)
    {
        self.gcanvasDict = NSMutableDictionary.dictionary;
        self.enterBackground = NO;
        
        //add Notification Observer
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onGCanvasCompLoadedNotify:)
                                                     name:KGCanvasCompLoadedNotificationName
                                                   object:nil];
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onGCanvasResetNotify:)
                                                     name:KGCanvasResetNotificationName
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
    self.gcanvasDict[componentId] = gcanvasInst;
    
    GCanvasPlugin *plugin = [[GCanvasPlugin alloc] initWithComponentId:componentId];
    gcanvasInst.plugin = plugin;
    
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if( component ){
        dispatch_sync([self targetExecuteQueue], ^{
            EAGLContext *context = [WXGCanvasModule getEAGLContext:componentId];
            context.multiThreaded = YES;
            component.glkview.context = context;
            component.glkview.delegate = self;
        });
        gcanvasInst.component = component;
    }
    return @"";
}

- (void)render:(NSString *)commands componentId:(NSString*)componentId
{
    if( self.enterBackground ) return;
    
//    GCVLOG_METHOD(@"render:componentId: , commands=%@, componentId=%@", commands, componentId);
    
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    if( !component || !plugin ){
        return;
    }
    
    [plugin addCommands:commands];
    [self execCommandById:componentId];
}

- (void)resetComponent:(NSString*)componentId
{
    [[NSNotificationCenter defaultCenter] postNotificationName:KGCanvasResetNotificationName
                                                        object:nil
                                                      userInfo:@{@"componentId":componentId}];

}

//预加载image，便于后续渲染时可以同步执行
- (void)preLoadImage:(NSArray *)data callback:(WXModuleCallback)callback
{
    if( ![data isKindOfClass:NSArray.class] )
    {
        return;
    }
    
    GCVLOG_METHOD(@" PreLoadImage start...");
    if( ![GCVCommon sharedInstance].imageLoader )
    {
        [GCVCommon sharedInstance].imageLoader = self;
    }
    
    if (!data || data.count != 2)
    {
        return;
    }
    
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_BACKGROUND, 0), ^{
        NSString *src = data[0];
        NSUInteger jsTextureId = [data[1] integerValue];
        
        [[GCVCommon sharedInstance] addPreLoadImage:src
                                         completion:^(GCVImageCache *imageCache, BOOL fromCache) {
                                             if (!imageCache)
                                             {
                                                 if(callback){
                                                     callback(@{@"error":@"preload error!"});
                                                 }
                                                 return;
                                             }
                                             imageCache.jsTextreId = jsTextureId;
                                             
                                             if(callback){
                                                 callback(@{@"width":@(imageCache.width), @"height":@(imageCache.height)});
                                             }
                                         }];
    });
}

- (void)bindImageTexture:(NSArray *)data componentId:(NSString*)componentId callback:(WXModuleCallback)callback
{
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
    
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    WXGCanvasComponent *component = gcanvasInst.component;
    
    if( !component || !plugin ){
        return;
    }
    
    NSString *src = nil;
    if([data isKindOfClass:NSArray.class] && data.count == 2){
        src = data[0];
        NSUInteger jsTextureId = [data[1] integerValue];
        
        __block GLuint textureId = [plugin getTextureId:jsTextureId];

        if( textureId == 0 )
        {
            GCVImageCache *imageCache = [[GCVCommon sharedInstance] fetchLoadImage:src];
            void (^bindTextureBlock)(GCVImageCache*) = ^(GCVImageCache* cache)
            {
                dispatch_main_async_safe(^{
                    [EAGLContext setCurrentContext:component.glkview.context];

                    textureId = [GCVCommon bindTexture:cache.image];
                    if( textureId > 0 )
                    {
                        //clean image after bind success
                        [plugin addTextureId:textureId
                                   withAppId:jsTextureId
                                       width:cache.width
                                      height:cache.height];
                        
                        [[GCVCommon sharedInstance] removeLoadImage:src];
                    }
                
                    GCVLOG_METHOD(@"2==>bindImageTexture src: %@, texutreId:%d, componentId:%@", src, textureId, componentId);

                });
            };
            
            if( !imageCache )
            {
                [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache, BOOL fromCache) {
                    bindTextureBlock(imageCache);
                    if( callback )
                    {
                        (textureId > 0) ? callback(@{}) : callback(@{@"error":@"bind error"});
                    }
                }];
                return;
            }
            else
            {
                bindTextureBlock(imageCache);
            }
            
        }
        
        if( callback )
        {
            (textureId > 0) ? callback(@{}) : callback(@{@"error":@"bind error"});
        }
    }
}

//设置Context类型
- (void)setContextType:(NSUInteger)type componentId:(NSString*)componentId
{
    GCVLOG_METHOD(@"setContextType %ld componentId:%@", (unsigned long)type, componentId);
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    if( plugin ){
        [plugin setContextType:(int)type];
    }
}

//设置Context类型
- (void)setLogLevel:(NSUInteger)level
{
    
}

#pragma mark - Notification
- (void)onGCanvasCompLoadedNotify:(NSNotification*)notification
{
//    NSString *componentId = notification.userInfo[@"componentId"];
}

- (void)onGCanvasResetNotify:(NSNotification*)notification
{
    NSString *componentId = notification.userInfo[@"componentId"];
    
    [self.gcanvasDict enumerateKeysAndObjectsUsingBlock:^(NSString *compId, WXGCanvasObject *gcanvsInst, BOOL * _Nonnull stop) {
        if ( [componentId isEqualToString:gcanvsInst.componentId] &&  gcanvsInst.component) {
            gcanvsInst.component.gcanvasInitalized = NO;
            GCanvasPlugin *plugin = gcanvsInst.plugin;
            [plugin removeCommands];
        }
    }];
}

- (void)onDidEnterBackgroundNotify:(NSNotification*)notification
{
    self.enterBackground = YES;
}

- (void)onWillEnterForegroundNotify:(NSNotification*)notification
{
    self.enterBackground = NO;
}

- (void)onWeexInstanceWillDestroy:(NSNotification*)notification
{
    NSString *instanceId = notification.userInfo[@"instanceId"];
    if (![instanceId isEqualToString:weexInstance.instanceId]) {
        return;
    }
    
    [self.gcanvasDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, WXGCanvasObject* gcanvasInst, BOOL * _Nonnull stop) {
        WXGCanvasComponent *comp = gcanvasInst.component;
        comp.glkview.delegate = nil;
         
        GCanvasPlugin *plugin = gcanvasInst.plugin;
        [plugin removeGCanvas];
     }];
    
    [self.gcanvasDict removeAllObjects];
    self.gcanvasDict = nil;
    
    [[GCVCommon sharedInstance] clearLoadImageDict];
    
    [_instanceDict removeObjectForKey:instanceId];
    if( _instanceDict.count == 0 ){
        _firstContext = nil;
    }
}

- (WXGCanvasComponent*)gcanvasComponentById:(NSString*)componentId
{
    __block WXGCanvasComponent *component = nil;
    __weak typeof(self) weakSelf = self;
    
    dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
    while (!component || !component.glkview) {
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.05 * NSEC_PER_SEC)), [self targetExecuteQueue], ^{
            WXPerformBlockSyncOnComponentThread(^{
                component = (WXGCanvasComponent *)[weakSelf.weexInstance componentForRef:componentId];
            });
            dispatch_semaphore_signal(semaphore);
        });
        //0.5秒超时
        dispatch_semaphore_wait(semaphore, dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.5 * NSEC_PER_SEC)));
    }
    
    return component;
}

- (WXGCanvasObject*) gcanvasInstanceByGLKView:(GLKView*)glkview
{
    __block WXGCanvasObject *gcanvasInst = nil;
    [self.gcanvasDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, WXGCanvasObject *obj, BOOL * _Nonnull stop) {
        if( obj.component.glkview == glkview ){
            gcanvasInst = obj;
            *stop = YES;
        }
    }];
    return gcanvasInst;
}

- (void)execCommandById:(NSString*)componentId
{
    GCVLOG_METHOD(@"execCommandById:, componentId: %@",componentId);
    
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
    if (gcanvasInst.component) {
        GCVWeakSelf
        dispatch_main_async_safe(^{
            if(!weakSelf.enterBackground){
                [gcanvasInst.component.glkview setNeedsDisplay];
            }
        });
    }
}

#pragma mark - GLKViewDelegate
- (void)glkView:(GLKView*)view drawInRect:(CGRect)rect
{
    WXGCanvasObject *gcanvasInst = [self gcanvasInstanceByGLKView:view];
    
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;
    
    if( !component || !plugin ){
        return;
    }
    
    GCVLOG_METHOD(@"glkView:drawInRect:, componentId:%@, context:%p", component.ref, component.glkview.context);
    
    dispatch_sync([self targetExecuteQueue], ^{
        
        [EAGLContext setCurrentContext:component.glkview.context];

        //设置当前的上线文EAGLContext
        if (!component.gcanvasInitalized)
        {
            //设置gcanvas像素比率
            CGFloat devicePixelRatio = component.calculatedFrame.size.width * [UIScreen mainScreen].nativeScale / component.componetFrame.size.width ;
            [plugin setDevicePixelRatio:devicePixelRatio];
            
            //设置gcanvas frame
            CGRect compFrame = component.componetFrame;
            CGRect gcanvasFrame = CGRectMake(compFrame.origin.x,
                                             compFrame.origin.y,
                                             compFrame.size.width*devicePixelRatio,
                                             compFrame.size.height*devicePixelRatio);
            [plugin setClearColor:component.glkview.backgroundColor];
            [plugin setFrame:gcanvasFrame];
            
            [weexInstance fireGlobalEvent:@"GCanvasReady" params:@{@"ref":component.ref}];
            
            component.gcanvasInitalized = YES;
        }
        
        [plugin execCommands];
    });
}

#pragma mark - GCVImageLoaderProtocol
- (void)loadImage:(NSURL*)url completed:(GCVLoadImageCompletion)completion
{
    [[SDWebImageManager sharedManager] downloadImageWithURL:url
                                                    options:0
                                                   progress:nil
                                                  completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
                                                      completion(image, error, finished, url);
    }];
}

#pragma mark - WebGL

#pragma mark - executeCallNative
- (NSDictionary*)extendCallNative:(NSDictionary*)dict
{
    NSString *componentId = dict[@"contextId"];
    
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
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

- (NSDictionary*)callGCanvasNative:(NSDictionary*)dict
{
    NSString *componentId = dict[@"contextId"];
    NSUInteger type = [dict[@"type"] integerValue];
    NSString *args = dict[@"args"];
    
    WXGCanvasObject *gcanvasInst = self.gcanvasDict[componentId];
    
    WXGCanvasComponent *component = gcanvasInst.component;
    GCanvasPlugin *plugin = gcanvasInst.plugin;

    if( !component || !plugin ) return @{};
    
    if (!component.gcanvasInitalized)
    {
        [EAGLContext setCurrentContext:component.glkview.context];
        
        //设置gcanvas像素比率
        CGFloat devicePixelRatio = component.calculatedFrame.size.width * [UIScreen mainScreen].nativeScale / component.componetFrame.size.width ;
        [plugin setDevicePixelRatio:devicePixelRatio];
        
        //设置gcanvas frame
        CGRect compFrame = component.componetFrame;
        CGRect gcanvasFrame = CGRectMake(compFrame.origin.x,
                                         compFrame.origin.y,
                                         compFrame.size.width*devicePixelRatio,
                                         compFrame.size.height*devicePixelRatio);
        [plugin setClearColor:component.glkview.backgroundColor];
        [plugin setFrame:gcanvasFrame];
        component.gcanvasInitalized = YES;
    }
    
    if( (type >> 30 & 0x01) == 1 )   //webgl
    {
        BOOL isSync = type >> 29 & 0x01; //sync
        if( isSync )
        {
            BOOL rendCmd = type & 0x01; //render per 16 ms
            
            
            if( rendCmd )
            {
                dispatch_main_sync_safe(^{
                    [component.glkview setNeedsDisplay];
                });
                
            #ifdef WEBGL_FPS
                _renderFrames++;
                CFTimeInterval now = CFAbsoluteTimeGetCurrent();
                if( _renderFrames > 60 )
                {
                    _renderFrames = 0;
                    _renderLastTime = now;
                }
                
                if (now > _renderLastTime)
                {
                    double delta = (now - _renderLastTime);
                    _renderFPS = (float)((double)_renderFrames/delta);
                }
            #endif
                
                return @{};
            }
            
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
