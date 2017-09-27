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
#import "WXBubbleAnimation.h"

@implementation WXBubbleComponent
{
    NSArray     *_positions;
    NSArray     *_nails;
    NSUInteger  _rowNum;
}

WX_PlUGIN_EXPORT_COMPONENT(bubble,WXBubbleComponent)



WX_EXPORT_METHOD(@selector(addSubView:atIndex:))

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
        
        NSString *jsonString = attributes[@"positions"];
        _positions = [WXUtility objectFromJSON:jsonString];
        
        jsonString = attributes[@"nails"];
        _nails = [WXUtility objectFromJSON:jsonString];
        
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
        UIView *view = subcomponent.view;
        
        CGRect frame = [bubbleView subViewFrameAtIndex:index];
        NSLog(@"subview frame:x=%f,y=%f,w=%f,h=%f", frame.origin.x, frame.origin.y, frame.size.width, frame.size.height);
        if (!CGRectEqualToRect(frame, CGRectZero)){
            view.frame = frame;
        }
        
        [bubbleView addSubview:view];
        
        
//        [view ba_springAnmiation];
        subcomponent.isViewFrameSyncWithCalculated = NO;
    }
}

- (void)dealloc
{
    _positions = nil;
    _nails = nil;
}

@end
