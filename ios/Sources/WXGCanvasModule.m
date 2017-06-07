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
#import <GCanvas/GCVCommon.h>
#import <GCanvas/GCanvasPlugin.h>
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
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));
WX_EXPORT_METHOD(@selector(setContextType:));
WX_EXPORT_METHOD(@selector(setLogLevel:));

WX_EXPORT_METHOD_SYNC(@selector(execGcanvaSyncCMD:args:));

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
    self.gcanvasPlugin = [[GCanvasPlugin alloc] initWithInstanceId:self.componentRel];
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
    __weak typeof(self) weakSelf = self;
    self.gcanvasComponent.renderCallBack =  ^(){
        __strong typeof(weakSelf) strongSelf = weakSelf;
        [strongSelf.gcanvasPlugin addCommands:commands];
        [strongSelf execCommand];
    };
}

//预加载image，便于后续渲染时可以同步执行
- (void)preLoadImage:(NSString *)src callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@" PreLoadImage start...");
    __weak typeof(self) weakSelf = self;
    [GCVCommon sharedInstance].imageLoader = self;
    [[GCVCommon sharedInstance] addPreLoadImage:src completion:^(GCVImageCache *imageCache) {
        if (!imageCache)
        {
            if(callback){
                callback(@{});
            }
            return;
        }
        CGImageRef cgimageRef = imageCache.image.CGImage;
        CGFloat width = CGImageGetWidth(cgimageRef);
        CGFloat height = CGImageGetHeight(cgimageRef);
        if(callback){
            callback(@{@"width":@(width), @"height":@(height)});
        }
        
//        GLuint tid = imageCache.textureId;
//        if (tid == 0) {
//            tid = [GCVCommon bindTexture:imageCache.image];
//            imageCache.textureId = tid;
//            [self.gcanvasPlugin addTextureId:tid withAppId:tid width:width height:height];
//        }
//        
//        callback(@{@"width":@(width), @"height":@(height), @"textureId":@(tid)});
        
//        CGSize size = imageCache.image.size;
//        CGFloat scale = [UIScreen mainScreen].nativeScale;
//        callback(@{@"width":@(size.width*scale), @"height":@(size.height*scale), @"textureId":@(imageCache.textureId)});
        
        
//        [self.gcanvasPlugin execCommands];
//        [weakSelf.gcanvasComponent.glkview display];
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

#pragma mark - SYNC Method
- (NSString*)execGcanvaSyncCMD:(NSString*)typeStr args:(NSString*)args
{
    
    __block NSString * result = @"";
    
//    UIImage *snapshotImage = [self.gcanvasComponent.glkview snapshot];
//    dispatch_async(dispatch_get_main_queue(), ^{
//        NSData *imageData = UIImagePNGRepresentation(snapshotImage);
//        result = [imageData base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
////        UIImageWriteToSavedPhotosAlbum(myImage, self, @selector(image:didFinishSavingWithError:contextInfo:), NULL);
//    });
    
    dispatch_async(dispatch_get_main_queue(), ^{
        result = [self.gcanvasPlugin execGcanvaSyncCMD:typeStr args:args];
    });
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

#pragma mark - Private
- (WXGCanvasComponent *)gcanvasComponent
{
    if (!_gcanvasComponent)
    {
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
            dispatch_semaphore_t semaphore = dispatch_semaphore_create(0);
            dispatch_async(dispatch_get_main_queue(), ^{
                WXPerformBlockOnComponentThread(^{
                    _gcanvasComponent = (WXGCanvasComponent *)[self.weexInstance componentForRef:self.componentRel];
                    GCVLOG_METHOD(@" _gcanvasComponent=%@", _gcanvasComponent);
                    dispatch_semaphore_signal(semaphore);

                });
            });
            dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
        });
        
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
//            [self.gcanvasComponent.glkview display];
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
    
    //设置当前的上线文EAGLContext
    if( [EAGLContext currentContext] != self.gcanvasComponent.glkview.context )
    {
        self.gcanvasInitalized = NO;
    }
    
    if (!self.gcanvasInitalized)
    {
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
        self.gcanvasInitalized = YES;
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



