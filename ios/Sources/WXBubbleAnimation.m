//
//  WXBubbleAnimation.m
//  Pods
//
//  Created by weixing.jwx on 17/9/27.
//
//

#import "WXBubbleAnimation.h"


//@implementation UIView (WXBubbleViewAnimation)
//
//- (void)ba_springAnmiation
//{
//    CGRect frame = self.frame;
//    
//    CGFloat gap = 3 + rand() % 3;
//    
//    [UIView animateWithDuration:0.8 animations:^{
//        self.frame = CGRectMake(frame.origin.x, frame.origin.y + gap, frame.size.width, frame.size.height);
//    }];
//    
//    [UIView animateWithDuration:0.8 delay:0.5 options:UIViewAnimationOptionCurveEaseInOut animations:^{
//        self.frame = CGRectMake(frame.origin.x, frame.origin.y - gap, frame.size.width, frame.size.height);
//    } completion:^(BOOL finished) {
//        [self ba_springAnmiation];
//    }];
//}
//
//@end


@implementation WXBubbleAnimation
{
    __weak UIView   *_view;
}

- (instancetype)initWithView:(UIView*)view
{
    self = [super init];
    if (self) {
        _view = view;
    }
    return self;
}

@end
