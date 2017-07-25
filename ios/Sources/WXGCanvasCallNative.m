//
//  WXGCanvasCallNative.m
//  Pods
//
//  Created by weixing.jwx on 17/7/24.
//
//

#import "WXGCanvasCallNative.h"
#import "WXGCanvasModule.h"

@interface WXGCanvasCallNative ()

@property (assign, nonatomic) dispatch_semaphore_t    semaphore;


@end

@implementation WXGCanvasCallNative

- (instancetype)init
{
    self = [super init];
    if (self)
    {
        _semaphore = dispatch_semaphore_create(0);
    }
    return self;
}


- (id)excuteCallNative:(NSDictionary *)dict
{
    return [WXGCanvasModule excuteCallNative:dict];
}


@end
