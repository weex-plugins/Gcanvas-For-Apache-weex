//
//  WXBubbleAnimation.h
//  Pods
//
//  Created by weixing.jwx on 17/9/27.
//
//

#import <Foundation/Foundation.h>

@interface UIView (WXBubbleViewAnimation)

- (void)ba_springAnmiation;

@end

@interface WXBubbleAnimation : NSObject

@property (weak, nonatomic) UIView *view;

//- (void)startAnimation;
//- (void)stopAnimation;


@end
