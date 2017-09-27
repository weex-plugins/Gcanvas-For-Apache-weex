//
//  WXBubbleView.m
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import "WXBubbleView.h"
#import "WXUtility.h"

#define makeBubbleLeftRect(y)   CGRectMake(-200, y, 100, 100)
#define makeBubbleRightFrame(y)   CGRectMake([UIScreen mainScreen].bounds.size.width+200, y, 100, 100)

@implementation WXBubbleView
{
    NSMutableArray  *_positionArray;    //坑位配置
    NSUInteger      _rowNum;            //坑位行数
    NSUInteger      _colNum;         //坑位列数

    NSMutableArray  *_leftNailArray;    //最左边坑位
    NSMutableArray  *_rightNailArray;   //最右边坑位

    
    
    NSInteger       _cursor;            //坑位游标
    
    NSMutableArray  *_childViewArray;   //视图列表
}


- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        _positionArray = NSMutableArray.array;
        _childViewArray = NSMutableArray.array;
        
        _leftNailArray = NSMutableArray.array;
        _rightNailArray = NSMutableArray.array;
        
        UISwipeGestureRecognizer *recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
        [recognizer setDirection:(UISwipeGestureRecognizerDirectionRight)];
        [self addGestureRecognizer:recognizer];
        
        recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
        [recognizer setDirection:(UISwipeGestureRecognizerDirectionLeft)];
        [self addGestureRecognizer:recognizer];        
    }
    return self;
}

- (void)configPosition:(NSArray*)positions withNail:(NSArray*)nails withRow:(NSUInteger)row
{
    CGFloat scale = self.frame.size.width / WXDefaultScreenWidth;
    [positions enumerateObjectsUsingBlock:^(NSArray *pos, NSUInteger idx, BOOL * _Nonnull stop) {
        if( pos.count >= 4 ){
            CGRect frame = CGRectMake([pos[0] floatValue] * scale,
                                      [pos[1] floatValue] * scale,
                                      [pos[2] floatValue] * scale,
                                      [pos[3] floatValue] * scale);
            [_positionArray addObject: [NSValue valueWithCGRect:frame]];
        }
    }];
    
    [nails enumerateObjectsUsingBlock:^(NSArray *arr, NSUInteger idx, BOOL * _Nonnull stop) {
        if( idx == 0 ){
            [arr enumerateObjectsUsingBlock:^(NSArray *pos, NSUInteger idx, BOOL * _Nonnull stop) {
                CGRect frame = CGRectMake([pos[0] floatValue] * scale,
                                          [pos[1] floatValue] * scale,
                                          [pos[2] floatValue] * scale,
                                          [pos[3] floatValue] * scale);
                [_leftNailArray addObject: [NSValue valueWithCGRect:frame]];
            }];
        }else if( idx == 1 ){
            [arr enumerateObjectsUsingBlock:^(NSArray *pos, NSUInteger idx, BOOL * _Nonnull stop) {
                CGRect frame = CGRectMake([pos[0] floatValue] * scale,
                                          [pos[1] floatValue] * scale,
                                          [pos[2] floatValue] * scale,
                                          [pos[3] floatValue] * scale);
                [_rightNailArray addObject: [NSValue valueWithCGRect:frame]];
            }];
        }
    }];
    
    _rowNum = row;
    _colNum = ceil(1.0*positions.count/_rowNum);
    _cursor = 0;
}

- (CGRect)subViewFrameAtIndex:(NSUInteger)index
{
    NSUInteger leftCount = _leftNailArray.count;
    NSUInteger positionCount = _positionArray.count;
    NSUInteger rightCount = _rightNailArray.count;
    
    NSUInteger leftCond = leftCount;
    NSUInteger positionCond = leftCount + positionCount;
    NSUInteger rightCond = leftCount + positionCount + rightCount;
    
    if( index < leftCount ){
        return [_leftNailArray[index] CGRectValue];
    }else if ( index < (leftCount + positionCount) ) {
        return [_positionArray[index - leftCount] CGRectValue];
    }else if ( index < (leftCount + positionCount + rightCount) ){
        return [_rightNailArray[index - leftCount - positionCount] CGRectValue];
    }
    
    return CGRectZero;
}

- (CGRect)newFrameWithView:(UIView*)view atIndex:(NSInteger)index
{
    if( index < 0 ) return makeBubbleLeftRect(view.frame.origin.y);
    else if( index >= _positionArray.count ) return makeBubbleRightFrame(view.frame.origin.y);
    else return [_positionArray[index] CGRectValue];
}


#pragma mark - Event Handler
- (void)onSwipeHandler:(UISwipeGestureRecognizer*)recognizer
{
    //TODO 回弹效果
    if( recognizer.direction == UISwipeGestureRecognizerDirectionLeft ){
        NSLog(@"onSwipeHandler.....left");

        _cursor = _cursor + _rowNum;
        [self.subviews enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull v, NSUInteger idx, BOOL * _Nonnull stop) {
            
            CGRect newFrame = [self newFrameWithView:v atIndex:(idx-_cursor)];
            
            [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.4 initialSpringVelocity:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = CGRectMake(newFrame.origin.x, newFrame.origin.y, newFrame.size.width, newFrame.size.height);
            } completion:^(BOOL finished) {
                
            }];
        }];
    }else if( recognizer.direction == UISwipeGestureRecognizerDirectionRight ){
        NSLog(@"onSwipeHandler.....right");
        _cursor = _cursor - _rowNum;
        
        [self.subviews enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull v, NSUInteger idx, BOOL * _Nonnull stop) {
            
            CGRect newFrame = [self newFrameWithView:v atIndex:(idx-_cursor)];
            
            [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.4 initialSpringVelocity:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = CGRectMake(newFrame.origin.x, newFrame.origin.y, newFrame.size.width, newFrame.size.height);
            } completion:^(BOOL finished) {
            }];
        }];
    }
}

@end
