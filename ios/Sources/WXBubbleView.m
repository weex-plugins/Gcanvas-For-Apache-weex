//
//  WXBubbleView.m
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import "WXBubbleView.h"
#import "WXUtility.h"

@implementation WXBubbleView
{
    NSInteger      _rowNum;             //坑位行数
    NSInteger      _colNum;             //坑位列数
    
    NSMutableArray  *_positionArray;    //坑位配置
    
    NSMutableArray  *_leftNailArray;    //最左边钉子坑位
    NSMutableArray  *_rightNailArray;   //最右边钉子坑位
    
    NSInteger       _cursor;            //游标始终指向_positonArray[0]对应的view对应的index
    
    NSMutableArray  *_positionViewArray;//坑位对应的View
//    NSMutableArray  *_childViewArray;   //视图列表
}


- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        _positionArray = NSMutableArray.array;
        
        _leftNailArray = NSMutableArray.array;
        _rightNailArray = NSMutableArray.array;
        
//        _childViewArray = NSMutableArray.array;
        _positionViewArray = NSMutableArray.array;
    }
    return self;
}


- (void)dealloc
{
    [_positionArray removeAllObjects];
    [_leftNailArray removeAllObjects];
    [_rightNailArray removeAllObjects];
    
//    [_childViewArray removeAllObjects];
    [_positionViewArray removeAllObjects];
}

- (void)configPosition:(NSArray*)positions withNail:(NSArray*)nails withRow:(NSUInteger)row
{
    CGFloat scale = self.frame.size.width / WXDefaultScreenWidth;
    
    //positions
    [positions enumerateObjectsUsingBlock:^(NSArray *pos, NSUInteger idx, BOOL * _Nonnull stop) {
        if( pos.count >= 4 ){
            CGRect frame = CGRectMake([pos[0] floatValue] * scale,
                                      [pos[1] floatValue] * scale,
                                      [pos[2] floatValue] * scale,
                                      [pos[3] floatValue] * scale);
            [_positionArray addObject: [NSValue valueWithCGRect:frame]];
        }
    }];
    
    //nails
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
    
    //add gesture recognizer
    UISwipeGestureRecognizer *recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionRight)];
    [self addGestureRecognizer:recognizer];
    
    recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionLeft)];
    [self addGestureRecognizer:recognizer];
    
    UITapGestureRecognizer *tapRecognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onTapHandler:)];
    [self addGestureRecognizer:tapRecognizer];
}

- (CGRect)subViewFrameAtIndex:(NSUInteger)idx
{
    CGRect frame;
    NSInteger frameIndex = idx - _cursor;
    if( frameIndex < 0 ) //Left Nail
    {
        NSUInteger leftIndex = idx % _leftNailArray.count;
        frame = [_leftNailArray[leftIndex] CGRectValue];
    }
    else if( frameIndex < _positionArray.count ) //In Position
    {
        frame = [_positionArray[frameIndex] CGRectValue];
    }
    else //Right Nail
    {
        NSUInteger rightIndex = idx % _rightNailArray.count;
        frame = [_rightNailArray[rightIndex] CGRectValue];
    }
    return frame;
}

- (void)addChildView:(UIView*)view atIndex:(NSUInteger)index
{
    view.tag = index;
//    [_childViewArray insertObject:view atIndex:index];
    if( 0 <= index && index < _positionArray.count ){
        _positionViewArray[index] = @(view.tag);
//        [_positionViewArray insertObject:view atIndex:index];
    }
}

- (UIView*)viewWithPositionIndex:(NSUInteger)posIndex
{
    UIView *view = nil;
    if( posIndex < _positionViewArray.count ){
        view = [self viewWithTag:[_positionViewArray[posIndex] integerValue]];
    }
    return view;
}

- (void)setView:(UIView*)view position:(NSUInteger)posIndex
{
    if( posIndex < _positionViewArray.count )
    {
        _positionViewArray[posIndex] = @(view.tag);
    }
}

#pragma mark - Override


#pragma mark - Event Handler
- (void)onSwipeHandler:(UISwipeGestureRecognizer*)recognizer
{
    if( recognizer.direction ==  UISwipeGestureRecognizerDirectionLeft )
    {
        if( _cursor >= (int)(_positionArray.count - _rowNum)  )
        {
            //Right Bounce
            NSLog(@"Need Right Bounce Animation");
            [self.subviews enumerateObjectsUsingBlock:^(UIView *v, NSUInteger idx, BOOL * _Nonnull stop) {
                CGRect oldFrame  = v.frame;
                CGRect newFrame = CGRectMake(oldFrame.origin.x-40, oldFrame.origin.y, oldFrame.size.width, oldFrame.size.height);
                [UIView animateWithDuration:0.4 delay:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                    v.frame = newFrame;
                } completion:^(BOOL finished) {
                    [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.4 initialSpringVelocity:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                        v.frame = oldFrame;
                    } completion:^(BOOL finished) {
                        
                    }];
                }];
            }];
            return;
        }
        _cursor += _rowNum;
        
        //Move Animation
        [self.subviews enumerateObjectsUsingBlock:^(UIView *v, NSUInteger idx, BOOL * _Nonnull stop) {
            CGRect newFrame = [self subViewFrameAtIndex:idx];
            [UIView animateWithDuration:0.8 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {
                
                [_positionViewArray enumerateObjectsUsingBlock:^(UIView *posView, NSUInteger posViewIdx, BOOL * _Nonnull stop) {
                    NSInteger newViewIndex = posViewIdx + _rowNum;
                    if( newViewIndex < _positionViewArray.count  ){
                        _positionViewArray[posViewIdx] = @(newViewIndex);
                    }else{
                        _positionViewArray[posViewIdx] = @(-1);
                    }
                }];
            }];
        }];
    }
    else
    { //  UISwipeGestureRecognizerDirectionRight
        
        if( _cursor <= 0 - _rowNum )
        {
            //Left Bounce
            NSLog(@"Need Left Bounce Animation");
            [self.subviews enumerateObjectsUsingBlock:^(UIView *v, NSUInteger idx, BOOL * _Nonnull stop) {
                CGRect oldFrame  = v.frame;
                CGRect newFrame = CGRectMake(oldFrame.origin.x+40, oldFrame.origin.y, oldFrame.size.width, oldFrame.size.height);
                [UIView animateWithDuration:0.4 delay:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                    v.frame = newFrame;
                } completion:^(BOOL finished) {
                    [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.4 initialSpringVelocity:0 options:UIViewAnimationOptionCurveEaseOut animations:^{
                        v.frame = oldFrame;
                    } completion:^(BOOL finished) {
                        
                    }];
                }];
            }];
            return;
        }
        _cursor -= _rowNum;
        
        //Move Animation
        [self.subviews enumerateObjectsUsingBlock:^(UIView *v, NSUInteger idx, BOOL * _Nonnull stop) {
            CGRect newFrame = [self subViewFrameAtIndex:idx];
            [UIView animateWithDuration:0.8 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {
                [_positionViewArray enumerateObjectsUsingBlock:^(UIView *posView, NSUInteger posViewIdx, BOOL * _Nonnull stop) {
                    NSInteger newViewIndex = posViewIdx - _rowNum;
                    if( newViewIndex >= 0  ){
                        _positionViewArray[posViewIdx] = @(newViewIndex);
                    }else{
                        _positionViewArray[posViewIdx] = @(-1);
                    }
                }];
            }];
        }];
    }
}

- (void)onTapHandler:(UIGestureRecognizer*)recognizer
{
    UIView *insertView = [[UIView alloc] init];
    insertView.backgroundColor = [UIColor orangeColor];
    NSUInteger insertPositionIndex = rand() % _positionArray.count;
    insertPositionIndex = 2;
    
    UIView *oldView = [self viewWithTag:[_positionViewArray[insertPositionIndex] integerValue]];
    
    CGRect posFrame = [_positionArray[insertPositionIndex] CGRectValue];
    
    //1、newView的frame根据oldView的frame设置一个缩小的scale=0.6,添加到oldView后面
//    [insertView sendSubviewToBack:oldView];
    [self insertSubview:insertView belowSubview:oldView];
    
    CGRect zoomInFrame = CGRectMake(posFrame.origin.x + posFrame.size.width*0.2,
                                    posFrame.origin.y + posFrame.size.height*0.2,
                                    posFrame.size.width * 0.6,
                                    posFrame.size.height * 0.6);
    
    CGRect zoomOutFrame = CGRectMake(posFrame.origin.x - posFrame.size.width*0.1,
                                     posFrame.origin.y - posFrame.size.height*0.1,
                                     posFrame.size.width * 1.2,
                                     posFrame.size.height * 1.2);

    
    insertView.frame = zoomInFrame;
    
    //2、同时2个动画
    //2.1 newView放大出现, 1.2scale
    [UIView animateWithDuration:0.5 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
        insertView.frame = zoomOutFrame;
    } completion:^(BOOL finished) {
        
        [UIView animateWithDuration:0.5 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
            insertView.frame = posFrame;
        } completion:^(BOOL finished) {
            
        }];
    }];
    
    //2.2 oldView左侧leftview，也向左移动一小段位置,oldView和右侧的view横向的往后移动[0<=index-cursor<=6]之间则需要移动，如果==7或==8则直接替换
    if( insertPositionIndex - _rowNum >= 0 )
    {
        //TODO
    }
    
    for (int i=insertPositionIndex; i<_positionViewArray.count; i+=_rowNum)
    {
        UIView *moveView = [self viewWithTag:[_positionViewArray[i] integerValue]];
        CGRect newFrame = [self subViewFrameAtIndex:(i+_rowNum)];
        [UIView animateWithDuration:0.5 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
            moveView.frame = newFrame;
        } completion:^(BOOL finished) {
            
        }];
    }
    
//    [self swipeView:insertView atIndex:insertPositionIndex];
}

- (void)swipeView:(UIView*)view atIndex:(NSUInteger)index
{
    //oldView
    
    //newView
    
    //1、newView的frame根据oldView的frame设置一个缩小的scale,添加到oldView后面
    //2、同时2个动画
    //      (1)newView放大出现, 1.2scale
    //      (2)oldView左侧view，也向左移动一小段位置,oldView和右侧的view横向的往后移动[0<=index-cursor<=6]之间则需要移动，如果==7或==8则直接替换
    //
    //3、移动结束之后，newView从1.2scale->1.0scale， oldView左侧view恢复原来位置
}

@end
