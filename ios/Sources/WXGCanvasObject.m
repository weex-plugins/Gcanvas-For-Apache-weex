//
//  WXGCanvasObject.m
//  WeexGcanvas
//
//  Created by weixing.jwx on 17/10/30.
//  Copyright © 2017年 weexplugin. All rights reserved.
//

#import "WXGCanvasObject.h"

@implementation WXGCanvasObject

- (instancetype)initWithComponentId:(NSString*)componentId
{
    self = [super init];
    if (self) {
        _componentId = componentId;
        _semaphore = dispatch_semaphore_create(0);
    }
    return self;
}

@end
