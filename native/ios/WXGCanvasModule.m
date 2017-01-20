//
//  WXGCanvasModule.m
//  Pods
//
//  Created by 兵长 on 16/8/16.
//
//

#import "WXGCanvasModule.h"
#import "WXGCanvasComponent.h"
#import <GCanvas/GCVCommon.h>
#import <GCanvas/GCanvasPlugin.h>
#import <WeexSDK/WXComponentManager.h>
#import <SDWebImage/SDWebImageManager.h>

#define MAX_EXEC_COMMAND_RETRY_COUNT    10

@interface WXGCanvasModule()<GLKViewDelegate>
    
@property (nonatomic, weak) WXGCanvasComponent *gcanvasComponent;
@property (nonatomic, strong) NSString* componentRel;
@property (nonatomic, strong) GCanvasPlugin* gcanvasPlugin;
@property (nonatomic, assign) NSUInteger execCommandRetryCount;
@property (nonatomic, assign) CGFloat devicePixelRatio;
@property (nonatomic, assign) BOOL gcanvasInitalized;

@end


@implementation WXGCanvasModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(getDeviceInfo:callback:));
WX_EXPORT_METHOD(@selector(enable:callback:));
WX_EXPORT_METHOD(@selector(disable:callback:));
WX_EXPORT_METHOD(@selector(render:));
WX_EXPORT_METHOD(@selector(preLoadImage:callback:));
WX_EXPORT_METHOD(@selector(setContextType:));

- (void)dealloc
{
    [[GCVCommon sharedInstance] clearLoadImageDict];
}

#pragma mark - Weex Export Method

- (void)getDeviceInfo:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    callback(@{@"result":@"success", @"data":@{@"platform":@"iOS"}});
}

- (void)enable:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@"args=%@", args);
    if (!args || !args[@"componentId"])
    {
        callback(@{@"result":@"fail", @"errorMsg":@"input args is error."});
        return;
    }
    
    self.componentRel = args[@"componentId"];//由于component的初始化可能比module慢，所以只在第一次使用时在对component进行初始化处理
    self.gcanvasPlugin = [[GCanvasPlugin alloc] init];
  
    self.execCommandRetryCount = 0;
    
    callback(@{@"result":@"success"});
}

- (void)disable:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@"args=%@", args);
    callback(@{@"result":@"success"});
}

- (void)render:(NSDictionary *)commands
{
    GCVLOG_METHOD(@"commands=%@, gcanvasComponent=%@", commands, self.gcanvasComponent);
    [self.gcanvasPlugin addCommands:commands];
    [self execCommand];
}

//预加载image，便于后续渲染时可以同步执行
- (void)preLoadImage:(NSDictionary *)args callback:(WXModuleCallback)callback
{
    GCVLOG_METHOD(@" PreLoadImage start...");
    
    [GCVCommon sharedInstance].imageLoader = self;
    [[GCVCommon sharedInstance] addPreLoadImage:args[@"commands"] completion:^(GCVImageCache *imageCache) {
        if (!imageCache)
        {
            callback(@{});
            return;
        }
        CGSize size = imageCache.image.size;
        callback(@{@"width":@(size.width), @"height":@(size.height)});
    }];
}

//设置Context类型
- (void)setContextType:(NSDictionary *)args
{
    NSUInteger type = [args[@"type"] integerValue];
    if (type == 0) {
        NSLog(@"GCanvas 2D");
    }else{
        NSLog(@"WebGL 3D");
    }
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
            if (_gcanvasComponent && [_gcanvasComponent isKindOfClass:[WXGCanvasComponent class]])
            {
                _gcanvasComponent.glkview.delegate = self;
            }
            dispatch_semaphore_signal(semaphore);
        });
        dispatch_semaphore_wait(semaphore, DISPATCH_TIME_FOREVER);
    }
    return _gcanvasComponent;
}

- (void)execCommand
{
    GCVLOG_METHOD(@" start... self.gcanvasComponent=%@", self.gcanvasComponent);
    if (self.gcanvasComponent)
    {
        self.execCommandRetryCount = 0;
        
        if ([self.gcanvasComponent isKindOfClass:[WXGCanvasComponent class]])
        {
            GCVLOG_METHOD(@" call glkView display");
            [self.gcanvasComponent.glkview display];
        }
        else
        {
            [self.gcanvasPlugin removeCommands];
        }
    }
    else
    {
        //启动速度差异，gcanvasComponent可能为空，尝试重试
        if (self.execCommandRetryCount++ < MAX_EXEC_COMMAND_RETRY_COUNT)
        {
            [self performSelector:@selector(execCommand) withObject:nil afterDelay:0.05f];
        }
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
        
        self.gcanvasInitalized = YES;
    }
    
//    glViewport(0, 0, view.drawableWidth, view.drawableHeight);
//    GLint vpArray[4];
//    glGetIntegerv(GL_VIEWPORT,vpArray);
    
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



