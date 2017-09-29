//
//  WXBubbleView.h
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import <UIKit/UIKit.h>



@interface WXBubbleView : UIView

- (void)configPosition:(NSArray*)positions withNail:(NSArray*)nails withRow:(NSUInteger)row;

- (CGRect)subViewFrameAtIndex:(NSUInteger)idx;

- (void)addChildView:(UIView*)view atIndex:(NSUInteger)idx;

@end
