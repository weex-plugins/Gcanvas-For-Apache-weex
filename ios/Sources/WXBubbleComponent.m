//
//  WXBubbleComponent.m
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import "WXBubbleComponent.h"
#import "WXBubbleView.h"
#import "WXScrollerProtocol.h"
#import <WeexPluginLoader/WeexPluginLoader.h>
#import <WeexSDK/WXUtility.h>

@implementation WXBubbleComponent
{
    NSArray     *_positions;
    NSArray     *_nails;
    
    NSUInteger  _rowNum;
}

//WX_PlUGIN_EXPORT_COMPONENT(bubble,WXBubbleComponent, 1.0)
//WX_PlUGIN_EXPORT_COMPONENT(bubble,WXBubbleComponent)

WX_EXPORT_METHOD(@selector(registerCallback:finished:bubbleClick:))
WX_EXPORT_METHOD(@selector(replaceBubble:position:))
WX_EXPORT_METHOD(@selector(inViewBubbleList:))
WX_EXPORT_METHOD(@selector(outViewBubbleList:))


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
    WXBubbleView *bubbleView = (WXBubbleView *)self.view;
    if( [bubbleView isKindOfClass:[WXBubbleView class]] ){
        [bubbleView configPosition:_positions withNail:_nails withRow:_rowNum];
    }
    
    //设置scrollview的delaysContentTouches属性
    id<WXScrollerProtocol> scroller = [self performSelector:NSSelectorFromString(@"ancestorScroller")];
    if( scroller &&  [scroller isKindOfClass:[WXScrollerComponent class]]){
        UIScrollView *scrollView = (UIScrollView*)((WXScrollerComponent*)scroller).view;
        if( [scrollView isKindOfClass:[UIScrollView class]] ){
            scrollView.delaysContentTouches = NO;
        }
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


#pragma mark - Export Method
- (void)registerCallback:(WXKeepAliveCallback)startSwipeCallback finished:(WXKeepAliveCallback)finishSwipeCallback bubbleClick:(WXKeepAliveCallback)clickCallback
{
    WXBubbleView *bubbleView = (WXBubbleView *)self.view;
    bubbleView.startSwipeCallback = startSwipeCallback;
    bubbleView.finishSwipeCallback = finishSwipeCallback;
    bubbleView.bubbleClickCallback = clickCallback;
}

- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    WXBubbleView *bubbleView = (WXBubbleView *)self.view;
    [bubbleView replaceBubble:bubbleId position:position];
}

- (void)inViewBubbleList:(WXKeepAliveCallback)callback
{
    WXBubbleView *bubbleView = (WXBubbleView *)self.view;
    NSArray *list = [bubbleView inBubbleList];
    callback(list, YES);
}

- (void)outViewBubbleList:(WXKeepAliveCallback)callback
{
    WXBubbleView *bubbleView = (WXBubbleView *)self.view;
    NSArray *list = [bubbleView outBubbleList];
    callback(list, YES);
}


@end
