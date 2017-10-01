//
//  WXBubbleAnimation.m
//  Pods
//
//  Created by weixing.jwx on 17/9/27.
//
//

#import "WXBubbleAnimation.h"

@implementation WXBubbleAnimation
{
    __weak UIView   *_view;
    NSInteger       _index;
}

- (instancetype)initWithView:(UIView*)view withIndex:(NSUInteger)index
{
    self = [super init];
    if (self) {
        
    }
    return self;
}


+(CABasicAnimation*)moveDuration:(CGFloat)duration y:(CGFloat)y
{
    CABasicAnimation *anim =[CABasicAnimation animationWithKeyPath:@"transform.translation.y"];
    
    anim.toValue=@(y);
    anim.duration=duration;
    anim.removedOnCompletion=NO;
    anim.fillMode=kCAFillModeForwards;
    return anim;
}

//+ (CAAnimation*)pulseAnimation
//{
//    CAAnimation *anim =
//    
//    return anim;
//}


@end
