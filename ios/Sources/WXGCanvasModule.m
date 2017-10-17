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
#import <UT/AppMonitor.h>


#define AppModule           @"GCanvas"
#define MONITOR_POINT_FPS   @"GCanvasFps"
#define MEASURE_FPS         @"fps"
#define DIMENSION_TYPE      @"type"
#define DIMENSION_PLUGIN    @"plugin"


//#ifdef DEBUG
//#define WEBGL_FPS
//#endif

@interface WXGCanvasModule()<GLKViewDelegate, GCVImageLoaderProtocol>

//modify
@property (strong, nonatomic) NSMutableDictionary *pluginDict;
@property (strong, nonatomic) NSMutableDictionary *componentDict;

@property (strong, nonatomic) NSMutableArray *bindCacheArray;   //cache bindTexture

@property (assign, nonatomic) BOOL addObserveFlag;
@property (assign, nonatomic) BOOL enterBackground;

//#ifdef WEBGL_FPS
//@property (nonatomic, assign) NSUInteger renderFrames;
//@property (nonatomic, assign) CGFloat renderFPS;
//@property (nonatomic, assign) CFTimeInterval renderLastTime;
//#endif

@end


@implementation WXGCanvasModule

//WX_PlUGIN_EXPORT_MODULE(gcanvas,WXGCanvasModule, 1.0)
//WX_PlUGIN_EXPORT_MODULE(gcanvas,WXGCanvasModule)


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
    
    if( !self.componentDict )
    {
        self.componentDict = NSMutableDictionary.dictionary;
    }
    
    //plugin
    GCanvasPlugin *plugin = [[GCanvasPlugin alloc] initWithComponentId:componentId];
    
    if( !self.pluginDict )
    {
        self.pluginDict = NSMutableDictionary.dictionary;
        self.addObserveFlag = NO;
    }
    self.pluginDict[componentId] = plugin;
    
    self.enterBackground = NO;
    
    if( !self.addObserveFlag)
    {
        self.addObserveFlag = YES;
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
    return @"";
}

- (void)render:(NSString *)commands componentId:(NSString*)componentId
{
    if( self.enterBackground ) return;
    
//    GCVLOG_METHOD(@"render:componentId: , commands=%@, componentId=%@", commands, componentId);
    
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];

    if (!plugin || !component){
        return;
    }
    
    [plugin addCommands:commands];
    [self execCommandById:componentId];
    
    //暂存命令
    if( component )
    {
        __weak typeof(self) weakSelf = self;
        component.renderCallBack =  ^(){
            __strong typeof(weakSelf) strongSelf = weakSelf;
            [plugin addCommands:commands];
            [strongSelf execCommandById:componentId];
        };
    }
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
}

- (void)bindImageTexture:(NSArray *)data componentId:(NSString*)componentId callback:(WXModuleCallback)callback
{
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];

    if( !plugin || !component){
        return;
    }
    
    if (!plugin.gcanvasInited)
    {
        //gcanvas not ready, cache bindTexture
        if( !self.bindCacheArray ){
            self.bindCacheArray = NSMutableArray.array;
        }
        [self.bindCacheArray addObject:@{@"data":data, @"componentId":componentId, @"callback":callback}];
        return;
    }
    
    NSString *src = nil;
    if( [data isKindOfClass:NSString.class] ){ //这个分支用来兼容老版本的接口
        src = (NSString*)data;
        GCVImageCache *imageCache = [[GCVCommon sharedInstance] fetchLoadImage:src];
        if (imageCache )
        {
            __block GLuint textureId = [plugin getTextureId:imageCache.jsTextreId];
            if( textureId == 0 )
            {
                dispatch_main_async_safe(^{
                    [EAGLContext setCurrentContext:component.glkview.context];

                    textureId = [GCVCommon bindTexture:imageCache.image];
                    if( textureId > 0 )
                    {
                        //clean image after bind success
                        [plugin addTextureId:textureId
                                   withAppId:imageCache.jsTextreId
                                       width:imageCache.width
                                      height:imageCache.height];
                        
                        [[GCVCommon sharedInstance] removeLoadImage:src];
                    }
                });
                    
                GCVLOG_METHOD(@"bindImageTexture src: %@, texutreId:%d, componentId:%@", src, textureId, componentId);
            }
            if( callback )
            {
                (textureId > 0) ? callback(@{}) : callback(@{@"error":@"bind error"});
            }
        }
    }else if([data isKindOfClass:NSArray.class] && data.count == 2){
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
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    if( plugin )
    {
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
    NSString *componentId = notification.userInfo[@"componentId"];
    [self gcanvasComponentById:componentId];
}

- (void)onGCanvasResetNotify:(NSNotification*)notification
{
    NSString *componentId = notification.userInfo[@"componentId"];
    [self.componentDict enumerateKeysAndObjectsUsingBlock:^(NSString *compId, WXGCanvasComponent *comp, BOOL * _Nonnull stop) {
        
        if (comp) {
            comp.gcanvasInitalized = NO;
            GCanvasPlugin *plugin = self.pluginDict[componentId];
            if (plugin)
            {
                [plugin removeCommands];
            }
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
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        AppMonitorMeasureSet *measures = [[AppMonitorMeasureSet alloc] init];
        [measures addMeasureWithName:MEASURE_FPS];
        AppMonitorDimensionSet *dimensions = [[AppMonitorDimensionSet alloc] init];
        [dimensions addDimensionWithName:DIMENSION_TYPE];
        [dimensions addDimensionWithName:DIMENSION_PLUGIN];
        
        [AppMonitorStat registerWithModule:AppModule monitorPoint:MONITOR_POINT_FPS measureSet:measures dimensionSet:dimensions];
    });
    
    [self.pluginDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, GCanvasPlugin* plugin, BOOL * _Nonnull stop) {
        
        CGFloat fps = [plugin fps];
        if( fps > 0 )
        {
            AppMonitorMeasureValueSet *measureValSet = [[AppMonitorMeasureValueSet alloc] init];
            [measureValSet setValue:@(fps) forName:MEASURE_FPS];
                        
            NSDictionary *dimDict = @{DIMENSION_PLUGIN:@"weex", DIMENSION_TYPE:@([plugin contextType])};
            AppMonitorDimensionValueSet *dimensionValSet = [[AppMonitorDimensionValueSet alloc] initWithDictionary:dimDict];
            
            [AppMonitorStat commitWithModule:AppModule monitorPoint:MONITOR_POINT_FPS dimensionValueSet:dimensionValSet measureValueSet:measureValSet];
        }
    }];
    
    NSString *instanceId = notification.userInfo[@"instanceId"];
    if (![instanceId isEqualToString:weexInstance.instanceId]) {
        return;
    }
    
    [self.pluginDict removeAllObjects];
    self.pluginDict = nil;
    [self.componentDict enumerateKeysAndObjectsUsingBlock:^(NSString*compId, WXGCanvasComponent
                                                            *comp, BOOL * _Nonnull stop) {
        if (comp.glkview.delegate) {
            comp.glkview.delegate = nil;
        }
    }];
    [self.componentDict removeAllObjects];
    self.componentDict = nil;
    [[GCVCommon sharedInstance] clearLoadImageDict];
    
    [_instanceDict removeObjectForKey:instanceId];
    if( _instanceDict.count == 0 ){
        _firstContext = nil;
    }
}

#pragma mark - Private
- (WXGCanvasComponent*)gcanvasComponentById:(NSString*)componentId
{
    __block WXGCanvasComponent *component = self.componentDict[componentId];
    if( !component )
    {
        dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);

        __weak typeof(self) weakSelf = self;
        WXPerformBlockOnComponentThread(^{
            component = (WXGCanvasComponent *)[weakSelf.weexInstance componentForRef:componentId];
            if( component )
            {
                weakSelf.componentDict[componentId] = component;
            }
            dispatch_semaphore_signal(semaphore);
        });
        
        dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);        
    }
    return component;
}

- (WXGCanvasComponent*)gcanvasComponentByGLKView:(GLKView*)glkview
{
    __block WXGCanvasComponent *tmpComponent = nil;
    [self.componentDict enumerateKeysAndObjectsUsingBlock:^(NSString *componentId, WXGCanvasComponent *component, BOOL * _Nonnull stop) {
        if( component.glkview == glkview )
        {
            tmpComponent = component;
            *stop = YES;
        }
    }];
    return tmpComponent;
}

- (void)execCommandById:(NSString*)componentId
{
    GCVLOG_METHOD(@"execCommandById:, componentId: %@",componentId);
    
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if (!component) {
        GCVLOG_METHOD(@"component is NULL, componentId: %@",componentId);
        return;
    }
    
    if (component.isViewLoaded && self.weexInstance)
    {
        if ([component isKindOfClass:[WXGCanvasComponent class]])
        {
            __weak typeof(self) weakSelf = self;
            dispatch_main_async_safe(^{
                if(!weakSelf.enterBackground){
                    if(!component.glkview.context){
                        component.glkview.context = [WXGCanvasModule getEAGLContext:(weakSelf.weexInstance.instanceId)];
                        component.glkview.delegate = weakSelf;
                    }
                    [component.glkview setNeedsDisplay];
                }
            });
        }
        else
        {
            GCanvasPlugin *plugin = self.pluginDict[componentId];
            if( plugin )
            {
                [plugin removeCommands];
            }
        }
    }
    else
    {
        //NSLog(@" ========== 1 delay viewLoaded=%@, component.glkview=%@", component.isViewLoaded?@"true":@"false", component.glkview);
        //gcanvasComponent组件未加载则延迟执行命令
        [self performSelector:@selector(execCommandById:) withObject:componentId afterDelay:0.05f];
        //NSLog(@" ========== 2 delay viewLoaded=%@, component.glkview=%@", component.isViewLoaded?@"true":@"false", component.glkview);

    }
}

#pragma mark - GLKViewDelegate
- (void)glkView:(GLKView*)view drawInRect:(CGRect)rect
{
    WXGCanvasComponent *component = [self gcanvasComponentByGLKView:view];
    if(!component.glkview.context)
    {
        return;
    }
    
    GCanvasPlugin *plugin = self.pluginDict[component.ref];
    if( !plugin )
    {
        return;
    }
    
    GCVLOG_METHOD(@"glkView:drawInRect:, componentId:%@, context:%p", component.ref, component.glkview.context);
    
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
        
        //bindTexture after GCanvas Init
        if (self.bindCacheArray.count > 0)
        {
            NSMutableArray *removeIndexArray = NSMutableArray.array;
            [self.bindCacheArray enumerateObjectsUsingBlock:^(NSDictionary *dict, NSUInteger idx, BOOL * _Nonnull stop) {
                
                NSArray *data = dict[@"data"];
                NSString *componentId = dict[@"componentId"];
                WXModuleCallback callback = dict[@"callback"];
                
                if( data && componentId && callback )
                {
                    if( componentId == component.ref )
                    {
                        [self bindImageTexture:data componentId:componentId callback:callback];
                        
                        [removeIndexArray addObject:@(idx)];
                    }
                }
            }];
            
            [removeIndexArray enumerateObjectsUsingBlock:^(id removeIdx, NSUInteger idx, BOOL * _Nonnull stop){
                NSUInteger index = [removeIdx integerValue];
                if( index < self.bindCacheArray.count )
                {
                    [self.bindCacheArray removeObjectAtIndex:index];
                }
            }];
        }
    }
    
    [plugin execCommands];
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


#pragma mark - executeCallNative

- (NSDictionary*)extendCallNative:(NSDictionary*)dict
{
    NSString *componentId = dict[@"contextId"];
    
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    CFTimeInterval startTime = CACurrentMediaTime();
    while (!component.glkview)
    {
        CFTimeInterval current = CACurrentMediaTime();
        if( current- startTime > 1 )  //1s超时退出
            break;
        component = [self gcanvasComponentById:componentId];
    }
    
    if( !component.glkview.context ){
        component.glkview.context = [WXGCanvasModule getEAGLContext:(self.weexInstance.instanceId)];
    }
    
    __block NSDictionary *retDict;
    __weak typeof(self) weakSelf = self;
    dispatch_semaphore_t _semaphore = dispatch_semaphore_create(0);
    dispatch_main_sync_safe(^{
        retDict = [weakSelf callGCanvasNative:dict];
        dispatch_semaphore_signal(_semaphore);
    });
    
    dispatch_semaphore_wait(_semaphore, DISPATCH_TIME_FOREVER);
    return retDict;

}

- (NSDictionary*)callGCanvasNative:(NSDictionary*)dict
{
    NSString *componentId = dict[@"contextId"];
    NSUInteger type = [dict[@"type"] integerValue];
    NSString *args = dict[@"args"];
    
    //componnet
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    GCanvasPlugin *plugin = self.pluginDict[componentId];

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
                [component.glkview setNeedsDisplay];
                
//            #ifdef WEBGL_FPS
//                _renderFrames++;
//                CFTimeInterval now = CFAbsoluteTimeGetCurrent();
//                if( _renderFrames > 60 )
//                {
//                    _renderFrames = 0;
//                    _renderLastTime = now;
//                }
//                
//                if (now > _renderLastTime)
//                {
//                    double delta = (now - _renderLastTime);
//                    _renderFPS = (float)((double)_renderFrames/delta);
//                }
//                
//                NSLog(@"WebGL Render FPS %f", _renderFPS);
//            #endif
                
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
