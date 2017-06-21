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
#import "WXGCanvasComponent.h"
#import "WeexGcanvas.h"
#import <GCanvas/GCVCommon.h>
#import <GCanvas/GCanvasPlugin.h>
#import <WeexSDK/WXComponentManager.h>
#import <SDWebImage/SDWebImageManager.h>
#import <WeexPluginLoader/WeexPluginLoader.h>

@interface WXGCanvasModule()<GLKViewDelegate, GCVImageLoaderProtocol>

//@property (nonatomic, weak) WXGCanvasComponent *gcanvasComponent;
//@property (nonatomic, strong) NSString* componentRel;
//@property (nonatomic, strong) GCanvasPlugin* gcanvasPlugin;
//@property (nonatomic, assign) CGFloat devicePixelRatio;
//@property (nonatomic, assign) BOOL gcanvasInitalized;

//modify
@property (nonatomic, assign) CGFloat devicePixelRatio;
@property (strong, nonatomic) NSMutableDictionary *pluginDict;
@property (strong, nonatomic) NSMutableDictionary *componentDict;

@end


@implementation WXGCanvasModule

WX_PlUGIN_EXPORT_MODULE(gcanvas,WXGCanvasModule)

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(getDeviceInfo:callback:));
WX_EXPORT_METHOD(@selector(enable:callback:));
WX_EXPORT_METHOD(@selector(render:componentId:));
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));
WX_EXPORT_METHOD(@selector(bindImageTexture:componentId:));
WX_EXPORT_METHOD(@selector(setContextType:componentId:));
WX_EXPORT_METHOD(@selector(setLogLevel:));
WX_EXPORT_METHOD(@selector(resetComponent:));   //appear调用
WX_EXPORT_METHOD(@selector(removeComponent:));  //disapper调用

WX_EXPORT_METHOD_SYNC(@selector(execGcanvaSyncCMD:args:));




- (void)dealloc
{
    [NSObject cancelPreviousPerformRequestsWithTarget:self];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    [[GCVCommon sharedInstance] clearLoadImageDict];
}

#pragma mark - Weex Export Method
- (void)getDeviceInfo:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    if(callback){
        callback(@{@"result":@"success", @"data":@{@"platform":@"iOS"}});
    }
}

- (void)enable:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    if (!args || !args[@"componentId"])
    {
        if(callback){
            callback(@{@"result":@"fail", @"errorMsg":@"input args is error."});
        }
        return;
    }
    
    NSString *componentId = args[@"componentId"];
    
    GCVLOG_METHOD(@"enable:callback:, componentId=%@", componentId);
    
    //plugin
    GCanvasPlugin *plugin = [[GCanvasPlugin alloc] initWithComponentId:componentId];
    
    if( !self.pluginDict )
    {
        self.pluginDict = NSMutableDictionary.dictionary;
    }
    self.pluginDict[componentId] = plugin;
    
    if(callback){
        callback(@{@"result":@"success"});
    }
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(onGCanvasResetNotify:)
                                                 name:KGCanvasResetNotificationName
                                               object:nil];
}

- (void)render:(NSString *)commands componentId:(NSString*)componentId
{
    GCVLOG_METHOD(@"render:componentId: , commands=%@, componentId=%@", commands, componentId);
    
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    if (plugin)
    {
        [plugin addCommands:commands];
    }
    
    [self execCommandById:componentId];
    
    
    //暂存命令
    __weak typeof(self) weakSelf = self;
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if( component )
    {
        component.renderCallBack =  ^(){
            __strong typeof(weakSelf) strongSelf = weakSelf;
            [plugin addCommands:commands];
            [strongSelf execCommandById:componentId];
        };
    }
}

- (void)resetComponent:(NSString*)componentId
{
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if (component  && component.view.window)
    {
        component.gcanvasInitalized = NO;
        
        GCanvasPlugin *plugin = self.pluginDict[componentId];
        if (plugin)
        {
            [plugin removeCommands];
        }
    }
}

- (void)removeComponent:(NSString*)componentId
{
    WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
    if (component)
    {
        [self.componentDict removeObjectForKey:componentId];
        component = nil;
    }
    
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    if( plugin )
    {
        [self.pluginDict removeObjectForKey:componentId];
        plugin = nil;
    }
}

//预加载image，便于后续渲染时可以同步执行
- (void)preLoadImage:(NSArray *)data callback:(WXModuleCallback)callback
{
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
    
    __weak typeof(self) weakSelf = self;
    [[GCVCommon sharedInstance] addPreLoadImage:src
                                     completion:^(GCVImageCache *imageCache, BOOL fromCache) {
        if (!imageCache)
        {
            if(callback){
                callback(@{});
            }
            return;
        }
        
        imageCache.jsTextreId = jsTextureId;
                                         
        if(callback){
            callback(@{@"width":@(imageCache.width), @"height":@(imageCache.height)});
        }
                                         
        
//        if( !fromCache )
//        {
//            GCanvasPlugin *plugin = weakSelf.pluginDict[componentId];
//            if( plugin )
//            {
//                [plugin addTextureId:imageCache.textureId
//                           withAppId:imageCache.jsTextreId
//                               width:width height:height];
//            }
//        }
//                                         
//        WXGCanvasComponent *component = [self gcanvasComponentById:componentId];
//         if( component ){
//             [component.glkview setNeedsDisplay];
//         }
    }];
}

- (void)bindImageTexture:(NSString*)src componentId:(NSString*)componentId
{
    GCVLOG_METHOD(@"bindImageTexture src: %% componentId:%@", src, componentId);
    GCanvasPlugin *plugin = self.pluginDict[componentId];
    if( plugin )
    {
        GCVImageCache *imageCache = [[GCVCommon sharedInstance] fetchLoadImage:src];
        if (imageCache ) {
            NSUInteger texutreId = [plugin getTextureId:imageCache.jsTextreId];
            if( texutreId == 0 )
            {
                GLuint textureId = [GCVCommon bindTexture:imageCache.image];
                
                [plugin addTextureId:textureId
                           withAppId:imageCache.jsTextreId
                               width:imageCache.width
                              height:imageCache.height];
            }
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

#pragma mark - SYNC Method
- (NSString*)execGcanvaSyncCMD:(NSString*)typeStr args:(NSString*)args
{
    
    __block NSString * result = @"";
    
////    UIImage *snapshotImage = [self.gcanvasComponent.glkview snapshot];
////    dispatch_async(dispatch_get_main_queue(), ^{
////        NSData *imageData = UIImagePNGRepresentation(snapshotImage);
////        result = [imageData base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
//////        UIImageWriteToSavedPhotosAlbum(myImage, self, @selector(image:didFinishSavingWithError:contextInfo:), NULL);
////    });
//    
//    dispatch_async(dispatch_get_main_queue(), ^{
//        result = [self.gcanvasPlugin execGcanvaSyncCMD:typeStr args:args];
//    });
    return result;
}

////回调方法
//- (void)image: (UIImage *) image didFinishSavingWithError: (NSError *) error contextInfo: (void *) contextInfo
//{
//    NSString *msg = nil ;
//    if(error != NULL){
//        msg = @"保存图片失败" ;
//    }else{
//        msg = @"保存图片成功" ;
//    }
//    NSLog(msg);
//}


#pragma mark - Notification
- (void)onGCanvasResetNotify:(NSNotification*)notification
{
    NSString *componentId = notification.userInfo[@"componentId"];
    [self resetComponent:componentId];
}

#pragma mark - Private
- (WXGCanvasComponent*)gcanvasComponentById:(NSString*)componentId
{
    if( !self.componentDict )
    {
        self.componentDict = NSMutableDictionary.dictionary;
    }
    
    __block WXGCanvasComponent *component = self.componentDict[componentId];
    if( !component )
    {
        dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);

        WXPerformBlockOnComponentThread(^{
            component = (WXGCanvasComponent *)[self.weexInstance componentForRef:componentId];
            component.componentId = componentId;
            self.componentDict[componentId] = component;
            
            dispatch_semaphore_signal(semaphore);

        });
        
        dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
        
//        //component
//        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
//            dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
//            dispatch_async(dispatch_get_main_queue(), ^{
//                WXPerformBlockOnComponentThread(^{
//                    component = (WXGCanvasComponent *)[self.weexInstance componentForRef:componentId];
//                    component.componentId = componentId;
//                    self.componentDict[componentId] = component;
//                    dispatch_semaphore_signal(semaphore);
//                });
//            });
//            dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
//        });
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
            GCVLOG_METHOD(@" call glkView display");
            if(!component.glkview.delegate)
            {
                component.glkview.delegate = self;
            }
            [component.glkview setNeedsDisplay];
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
        //gcanvasComponent组件未加载则延迟执行命令
        [self performSelector:@selector(execCommandById:) withObject:componentId afterDelay:0.05f];
    }
}

#pragma mark - GLKViewDelegate
- (void)glkView:(GLKView*)view drawInRect:(CGRect)rect
{
    GCVLOG_METHOD(@"rect=(%.2f, %.2f) * (%.2f, %.2f)", rect.origin.x, rect.origin.y, rect.size.width, rect.size.height);
    
    
    WXGCanvasComponent *componet = [self gcanvasComponentByGLKView:view];
    if(!componet.glkview.context)
    {
        return;
    }
    
    GCanvasPlugin *plugin = self.pluginDict[componet.componentId];
    if( !plugin )
    {
        return;
    }
    
    GCVLOG_METHOD(@"glkView:drawInRect:, componentId:%@", componet.componentId);
    
    [EAGLContext setCurrentContext:componet.glkview.context];

    //设置当前的上线文EAGLContext
    if (!componet.gcanvasInitalized)
    {
        //设置gcanvas像素比率
        self.devicePixelRatio = componet.calculatedFrame.size.width * [UIScreen mainScreen].nativeScale / componet.componetFrame.size.width ;
        [plugin setDevicePixelRatio:self.devicePixelRatio];
        
        //设置gcanvas frame
        CGRect compFrame = componet.componetFrame;
        CGRect gcanvasFrame = CGRectMake(compFrame.origin.x,
                                         compFrame.origin.y,
                                         compFrame.size.width*self.devicePixelRatio,
                                         compFrame.size.height*self.devicePixelRatio);
        [plugin setClearColor:componet.glkview.backgroundColor];
        [plugin setFrame:gcanvasFrame];

        componet.gcanvasInitalized = YES;
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
@end



