//
//  WXBubbleComponent.m
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import "WXBubbleComponent.h"
#import "WXBubbleView.h"
#import <WeexPluginLoader/WeexPluginLoader.h>
#import <WeexSDK/WXUtility.h>

@implementation WXBubbleComponent
{
    NSArray     *_positions;
    NSArray     *_nails;
    
    NSUInteger  _rowNum;
    
    //animation paramss
    CGFloat     _animK;
    CGFloat     _animK1;

}

WX_PlUGIN_EXPORT_COMPONENT(bubble,WXBubbleComponent)

WX_EXPORT_METHOD(@selector(registerSwipeCallback:finished:))
WX_EXPORT_METHOD(@selector(replaceBubble:position:))


/**
 *  @abstract Initializes a new component using the specified  properties.
 *
 *  @param ref          the identity string of component
 *  @param type         component type
 *  @param styles       component's styles
 *  @param attributes   component's attributes
 *  @param events       component's events
 *  @param weexInstance the weexInstance with which the component associated
 *
 *  @return A WXComponent instance.
 */
- (instancetype)initWithRef:(NSString *)ref
                       type:(NSString*)type
                     styles:(nullable NSDictionary *)styles
                 attributes:(nullable NSDictionary *)attributes
                     events:(nullable NSArray *)events
               weexInstance:(WXSDKInstance *)weexInstance{
    
    self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    if (self) {
        
//        NSString *jsonString = attributes[@"positions"];
//        _positions = [WXUtility objectFromJSON:jsonString];
//        jsonString = attributes[@"nails"];
//        _nails = [WXUtility objectFromJSON:jsonString];
        
        _positions = attributes[@"positions"];
        _nails = attributes[@"nails"];
        
        _rowNum = [attributes[@"rows"] integerValue];
    }
    return self;
}

- (UIView *)loadView
{
    return [[WXBubbleView alloc] init];
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    WXBubbleView *bubbleView = self.view;
    if( [bubbleView isKindOfClass:[WXBubbleView class]] ){
        [bubbleView configPosition:_positions withNail:_nails withRow:_rowNum];
    }
}

- (void)insertSubview:(WXComponent *)subcomponent atIndex:(NSInteger)index
{
    WXBubbleView *bubbleView = (WXBubbleView*)self.view;
    if ([bubbleView isKindOfClass:[WXBubbleView class]]) {
        subcomponent.isViewFrameSyncWithCalculated = NO;
        [bubbleView addChildView:subcomponent.view atIndex:index];
    }
}

- (void)dealloc
{
    _positions = nil;
    _nails = nil;
}

- (void)registerSwipeCallback:(WXCallback)startCallback finished:(WXCallback)finishCallback
{
    WXBubbleView *bubbleView = self.view;
    bubbleView.startCallback = startCallback;
    bubbleView.finishCallback = finishCallback;
}

- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    WXBubbleView *bubbleView = self.view;
    [bubbleView replaceBubble:bubbleId position:position];
}



@end
