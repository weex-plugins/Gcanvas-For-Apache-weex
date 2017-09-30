//
//  WXBubbleAnimation.h
//  Pods
//
//  Created by weixing.jwx on 17/9/27.
//
//

#import <Foundation/Foundation.h>

//@interface UIView (WXBubbleViewAnimation)
//
//- (void)ba_springAnmiation;
//
//@end

@interface WXBubbleAnimation : NSObject


@property (assign, nonatomic, readonly) NSUInteger viewIndex;

- (instancetype)initWithView:(UIView*)view withIndex:(NSUInteger)index;

@end
