//
//  WXBubbleView.h
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WeexSDK.h>


@interface WXBubbleView : UIView

@property (weak, nonatomic) WXCallback startCallback;
@property (weak, nonatomic) WXCallback finishCallback;

- (void)configPosition:(NSArray*)positions withNail:(NSArray*)nails withRow:(NSUInteger)row;
- (void)addChildView:(UIView*)view atIndex:(NSUInteger)index;
- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position;

@end
