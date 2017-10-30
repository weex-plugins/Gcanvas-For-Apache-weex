//
//  WXGCanvasObject.h
//  WeexGcanvas
//
//  Created by weixing.jwx on 17/10/30.
//  Copyright © 2017年 weexplugin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "WXGCanvasComponent.h"
#import <GCanvas/GCanvasPlugin.h>
#import <GLKit/GLKit.h>

@interface WXGCanvasObject : NSObject

@property (strong, nonatomic, readonly) NSString *componentId;

@property (strong, nonatomic) GCanvasPlugin *plugin;
@property (strong, nonatomic) WXGCanvasComponent *component;
@property (assign, nonatomic) dispatch_semaphore_t semaphore;
//@property (strong, nonatomic) EAGLContext *compViewContext;

- (instancetype)initWithComponentId:(NSString*)componentId;

@end
