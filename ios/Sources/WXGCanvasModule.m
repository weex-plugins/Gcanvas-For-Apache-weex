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
#import <GCanvasSDK/GCVCommon.h>
#import <GCanvasSDK/GCanvasPlugin.h>
#import <WeexSDK/WXComponentManager.h>
#import <SDWebImage/SDWebImageManager.h>
#import <WeexPluginLoader/WeexPluginLoader.h>

@interface WXGCanvasModule()<GLKViewDelegate, GCVImageLoaderProtocol>
    
@property (nonatomic, weak) WXGCanvasComponent *gcanvasComponent;
@property (nonatomic, strong) NSString* componentRel;
@property (nonatomic, strong) GCanvasPlugin* gcanvasPlugin;
@property (nonatomic, assign) CGFloat devicePixelRatio;
@property (nonatomic, assign) BOOL gcanvasInitalized;

@end


@implementation WXGCanvasModule

WX_PlUGIN_EXPORT_MODULE(gcanvas,WXGCanvasModule)

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(getDeviceInfo:callback:));
WX_EXPORT_METHOD(@selector(enable:callback:));
WX_EXPORT_METHOD(@selector(disable:callback:));
WX_EXPORT_METHOD(@selector(render:));
WX_EXPORT_METHOD(@selector(loadTexture:callback:));
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));
WX_EXPORT_METHOD(@selector(setContextType:));
WX_EXPORT_METHOD(@selector(setLogLevel:));


- (void)dealloc
{
    [NSObject cancelPreviousPerformRequestsWithTarget:self];
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
    GCVLOG_METHOD(@"args=%@", args);
    if (!args || !args[@"componentId"])
    {
        if(callback){
            callback(@{@"result":@"fail", @"errorMsg":@"input args is error."});
        }
        return;
    }
    
    self.componentRel = args[@"componentId"];//由于component的初始化可能比module慢，所以只在第一次使用时在对component进行初始化处理
    self.gcanvasPlugin = [[GCanvasPlugin alloc] init];
    if(callback){
        callback(@{@"result":@"success"});
    }
}

- (void)disable:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@"args=%@", args);
    if(callback){
        callback(@{@"result":@"success"});
    }
}

- (void)render:(NSArray *)commands
{
    GCVLOG_METHOD(@"commands=%@, gcanvasComponent=%@", commands, self.gcanvasComponent);
    [self.gcanvasPlugin addCommands:commands];
    [self execCommand];
}

//遇见在图片
- (void)loadTexture:(NSString *)src callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@"loadTexture start...");
    
    __weak typeof(self) weakSelf = self;
    [GCVCommon sharedInstance].imageLoader = self;
    
    [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache) {
        if (!imageCache) return;
        CGImageRef cgimageRef = imageCache.image.CGImage;
        CGFloat width = CGImageGetWidth(cgimageRef);
        CGFloat height = CGImageGetHeight(cgimageRef);
        [self.gcanvasPlugin addTextureId:imageCache.textureId
                               withAppId:imageCache.jsTextreId
                                   width:(NSUInteger)width
                                  height:(NSUInteger)height];
        //回调结果
        if( callback )
        {
            callback(@{@"width":@(width),
                       @"height":@(height),
                       @"id":@(imageCache.jsTextreId)});
        }
        [weakSelf.gcanvasComponent.glkview setNeedsDisplay];
    }];
}

//预加载image，便于后续渲染时可以同步执行
- (void)preLoadImage:(NSString *)src callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@" PreLoadImage start...");
    __weak typeof(self) weakSelf = self;
    [GCVCommon sharedInstance].imageLoader = self;
    [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache) {
        if (!imageCache) return;
        CGImageRef cgimageRef = imageCache.image.CGImage;
        CGFloat width = CGImageGetWidth(cgimageRef);
        CGFloat height = CGImageGetHeight(cgimageRef);
        [self.gcanvasPlugin addTextureId:imageCache.textureId
                               withAppId:imageCache.jsTextreId
                                   width:(NSUInteger)width
                                  height:(NSUInteger)height];
        //回调结果
        if( callback )
        {
            callback(@{@"width":@(width),
                       @"height":@(height),
                       @"id":@(imageCache.jsTextreId)});
        }
        [weakSelf.gcanvasComponent.glkview setNeedsDisplay];
    }];
}

//设置Context类型
- (void)setContextType:(NSUInteger)type
{
    GCVLOG_METHOD(@"setContextType %ld", (unsigned long)type);
    [self.gcanvasPlugin setContextType:(int)type];
}

//设置Context类型
- (void)setLogLevel:(NSUInteger)level
{
    
}

#pragma mark - Private
- (WXGCanvasComponent *)gcanvasComponent
{
    if (!_gcanvasComponent)
    {
        dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
        WXPerformBlockOnComponentThread(^{
            _gcanvasComponent = (WXGCanvasComponent *)[self.weexInstance componentForRef:self.componentRel];
            GCVLOG_METHOD(@" _gcanvasComponent=%@", _gcanvasComponent);
            dispatch_semaphore_signal(semaphore);
        });
        dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
    }
    return _gcanvasComponent;
}

- (void)execCommand
{
    GCVLOG_METHOD(@" start... self.gcanvasComponent=%@", self.gcanvasComponent);
    if (self.gcanvasComponent.isViewLoaded && self.weexInstance)
    {
        if ([self.gcanvasComponent isKindOfClass:[WXGCanvasComponent class]])
        {
            GCVLOG_METHOD(@" call glkView display");
            if(!self.gcanvasComponent.glkview.delegate)
            {
                self.gcanvasComponent.glkview.delegate = self;
            }
            [self.gcanvasComponent.glkview setNeedsDisplay];
        }
        else
        {
            [self.gcanvasPlugin removeCommands];
        }
    }
    else
    {
        //gcanvasComponent组件未加载则延迟执行命令
        [self performSelector:@selector(execCommand) withObject:nil afterDelay:0.05f];
    }
}

#pragma mark - GLKViewDelegate
- (void)glkView:(GLKView*)view drawInRect:(CGRect)rect
{
    GCVLOG_METHOD(@"rect=(%.2f, %.2f) * (%.2f, %.2f)", rect.origin.x, rect.origin.y, rect.size.width, rect.size.height);
    
    if(!self.gcanvasComponent.glkview.context)
    {
        return;
    }
    
    if (!self.gcanvasInitalized)
    {
        self.gcanvasInitalized = YES;
        
        //初始化EAGLContext
        [EAGLContext setCurrentContext:self.gcanvasComponent.glkview.context];
        
        //设置gcanvas像素比率
        self.devicePixelRatio = self.gcanvasComponent.calculatedFrame.size.width * [UIScreen mainScreen].nativeScale / self.gcanvasComponent.componetFrame.size.width ;
        [self.gcanvasPlugin setDevicePixelRatio:self.devicePixelRatio];
        
        //设置gcanvas frame
        CGRect compFrame = self.gcanvasComponent.componetFrame;
        CGRect gcanvasFrame = CGRectMake(compFrame.origin.x,
                                         compFrame.origin.y,
                                         compFrame.size.width*self.devicePixelRatio,
                                         compFrame.size.height*self.devicePixelRatio);
        [self.gcanvasPlugin setFrame:gcanvasFrame];
        [self.gcanvasPlugin setClearColor:self.gcanvasComponent.glkview.backgroundColor];
    }
    
    [self.gcanvasPlugin execCommands];
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



