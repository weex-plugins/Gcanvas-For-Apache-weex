//
//  WXBubbleView.m
//  Pods
//
//  Created by weixing.jwx on 17/9/26.
//
//

#import "WXBubbleView.h"
#import <WeexSDK/WXUtility.h>

@interface WXBubbleView ()

@property (assign, nonatomic) BOOL isInSwitching; //在替换动画中
@property (assign, nonatomic) NSUInteger childViewCount; //视图数量

@end

@implementation WXBubbleView
{
    BOOL            _isConfig;
    
    NSInteger       _rowNum;            //坑位行数
    NSInteger       _colNum;            //坑位列数
    
    NSMutableArray  *_positionArray;    //坑位配置
    NSMutableArray  *_leftNailArray;    //最左边钉子坑位
    NSMutableArray  *_rightNailArray;   //最右边钉子坑位
    
    NSInteger       _cursorColumnId;    //当前列游标

    NSMutableDictionary*_childViewArrayDict; //视图列表
}


- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        _positionArray = NSMutableArray.array;
        
        _leftNailArray = NSMutableArray.array;
        _rightNailArray = NSMutableArray.array;
        
        _childViewArrayDict = NSMutableDictionary.dictionary;
        _childViewCount = 0;
    }
    return self;
}


- (void)dealloc
{
    [_positionArray removeAllObjects];
    [_leftNailArray removeAllObjects];
    [_rightNailArray removeAllObjects];
    
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView *v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            [v.layer removeAllAnimations];
        }];
        [rowArray removeAllObjects];
    }];
    [_childViewArrayDict removeAllObjects];
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
    _cursorColumnId = 0;
    
    //add gesture recognizer
    UISwipeGestureRecognizer *recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionRight)];
    [self addGestureRecognizer:recognizer];
    
    recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionLeft)];
    [self addGestureRecognizer:recognizer];
    
//    UITapGestureRecognizer *tapRecognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onTapHandler2:)];
//    [self addGestureRecognizer:tapRecognizer];
    
    _isConfig = YES;
}

- (void)addChildView:(UIView*)view atIndex:(NSUInteger)index
{
    CGRect frame = [self originViewFrameAtIndex:index];

    view.tag = index;
    view.frame = frame;
    [self addSubview:view];
    
    //wrapView for appear/move/replace animation
//    UIView *wrapView = [[UIView alloc] initWithFrame:frame];
//    wrapView.backgroundColor = [UIColor whiteColor];
//    wrapView.tag = index;
//    [self addSubview:wrapView];
//    view.frame = wrapView.bounds;
//    [wrapView addSubview:view];
    
    //for test
#ifdef DEBUG
    UITapGestureRecognizer *tapRecognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onWrapViewTapHandler:)];
//    [wrapView addGestureRecognizer:tapRecognizer];
    [view addGestureRecognizer:tapRecognizer];
#endif
    
    
    //bubble appear animation add to wrapView
//    CGAffineTransform scaleTranfrom = CGAffineTransformScale(CGAffineTransformIdentity, 0.4, 0.4);
//    wrapView.transform = scaleTranfrom;
//    
//    NSArray *delayArray = @[@(0), @(0.08), @(0.16)];
//    CGFloat delay = [delayArray[rand() % 3] floatValue];
//    
//    [UIView animateWithDuration:1 delay:delay usingSpringWithDamping:0.4 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
//        wrapView.transform = CGAffineTransformIdentity;
//    } completion:nil];
//
//    //view pulse animation
//    NSArray *durationArray = @[@(4), @(5), @(6)];
//    NSArray *distanceArray = @[@(5), @(6), @(7)];
//
//    CABasicAnimation *anim = [CABasicAnimation animationWithKeyPath:@"transform.translation.y"];;
//    anim.fromValue = @(0);
//    anim.toValue = @( [distanceArray[rand()%3] floatValue] );
//    anim.duration = [durationArray[rand()%3] floatValue];
//    anim.autoreverses = YES;
//    anim.repeatCount=FLT_MAX;
//    [view.layer addAnimation:anim forKey:@"bubble.pulse"];

    CGAffineTransform scaleTranfrom = CGAffineTransformScale(CGAffineTransformIdentity, 0.4, 0.4);
    view.transform = scaleTranfrom;

    NSArray *delayArray = @[@(0), @(0.08), @(0.16)];
    CGFloat delay = [delayArray[rand() % 3] floatValue];

    [UIView animateWithDuration:1 delay:delay usingSpringWithDamping:0.4 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
        view.transform = CGAffineTransformIdentity;
    } completion:nil];

    
    
    
    //save childView
    NSUInteger rowId = index % _rowNum;
    if( !_childViewArrayDict[@(rowId)] ){
        _childViewArrayDict[@(rowId)] = NSMutableArray.array;
    }
//    [_childViewArrayDict[@(rowId)] addObject:wrapView];
    [_childViewArrayDict[@(rowId)] addObject:view];
    _childViewCount++;
}

#pragma mark - Export Method
- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    [self switchBubble:bubbleId position:position];
}


#pragma mark - ViewFrame Utils
- (CGRect)originViewFrameAtIndex:(NSUInteger)idx
{
    CGRect frame = CGRectNull;
    if( !_isConfig ){
        return frame;
    }
    
    NSInteger frameIndex = idx;
    if( frameIndex < 0 ) //In Left Nail
    {
        NSUInteger leftIndex = idx % _leftNailArray.count;
        frame = [_leftNailArray[leftIndex] CGRectValue];
    }
    else if( frameIndex < _positionArray.count ) //In Position
    {
        frame = [_positionArray[frameIndex] CGRectValue];
    }
    else //In Right Nail
    {
        NSUInteger rightIndex = idx % _rightNailArray.count;
        frame = [_rightNailArray[rightIndex] CGRectValue];
    }
    return frame;
}

//pos Frame
- (CGRect)viewFrameWithColumn:(NSUInteger)colIndex withRow:(NSUInteger)rowIndex
{
    CGRect frame = CGRectMake(-200, 0, 0, 0);
    NSInteger newColumIndex = colIndex - _cursorColumnId;
    if( newColumIndex < 0 )
    {
//        NSLog(@"MOVE...Left %d=>%d", colIndex*_rowNum + rowIndex, rowIndex );
        frame = [_leftNailArray[rowIndex] CGRectValue];
    }
    else if( newColumIndex < _colNum )
    {
//        NSLog(@"MOVE...POS %d=>%d", colIndex*_rowNum + rowIndex, newColumIndex * _rowNum + rowIndex );
        frame = [_positionArray[ newColumIndex * _rowNum + rowIndex ] CGRectValue];
    }
    else
    {
//        NSLog(@"MOVE...Right %d=>%d", colIndex*_rowNum + rowIndex, rowIndex );
        frame = [_rightNailArray[rowIndex] CGRectValue];
    }
    return frame;
}

//scale Frame
- (CGRect)scaleFrame:(CGRect)frame byScale:(CGFloat)scale
{
    CGFloat posScale = (1 - scale) * 0.5;
    CGRect scaleFrame = CGRectMake(frame.origin.x + frame.size.width*posScale,
                                   frame.origin.y + frame.size.height*posScale,
                                   frame.size.width * scale,
                                   frame.size.height * scale);
    return scaleFrame;
}

//squee Frame, only modify origin point
- (CGPoint)squeePositionWithFrame:(CGRect)posFrame target:(CGRect)targetFrame colIdx:(NSUInteger)colIdx
{
    CGFloat k = 16;
    CGFloat width = targetFrame.size.width;
    
    CGFloat xDist = (posFrame.origin.x - targetFrame.origin.x);
    CGFloat yDist = (posFrame.origin.y - targetFrame.origin.y);
    CGFloat dis = sqrt((xDist * xDist) + (yDist * yDist));
    
    CGFloat widthFactor = k * width * width;
    CGFloat disFactor = dis * dis * dis;
    
    CGFloat squeeX = widthFactor * (posFrame.origin.x - targetFrame.origin.x) / disFactor;
    CGFloat squeeY = widthFactor * (posFrame.origin.y - targetFrame.origin.y) / disFactor;
    
    NSLog(@"====>colIdx:%d, offsetX:%f, offsetY:%f", colIdx, squeeX, squeeY);

    return CGPointMake(squeeX, squeeY);
}

- (CGRect)squeeFrame:(CGRect)posFrame withTarget:(CGRect)targetFrame colIdx:(NSUInteger)colIdx
{
    CGFloat k = 16;
    CGFloat width = targetFrame.size.width;
    
    CGFloat xDist = (posFrame.origin.x - targetFrame.origin.x);
    CGFloat yDist = (posFrame.origin.y - targetFrame.origin.y);
    CGFloat dis = sqrt((xDist * xDist) + (yDist * yDist));
    
    CGFloat widthFactor = k * width * width;
    CGFloat disFactor = dis * dis * dis;
    
    CGFloat squeeX = widthFactor * (targetFrame.origin.x - posFrame.origin.x) / disFactor;
    CGFloat squeeY = widthFactor * (targetFrame.origin.y - posFrame.origin.y) / disFactor;
    
    NSLog(@"====>colIdx:%d, offsetX:%f, offsetY:%f", colIdx, squeeX, squeeY);

    return CGRectMake(targetFrame.origin.x - squeeX, targetFrame.origin.y - squeeY, width, targetFrame.size.height);
}

- (NSDictionary*)viewPositionByTag:(NSUInteger)tag
{
    __block NSInteger colId = -1;
    __block NSInteger rowId = -1;
    
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowKey, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        NSUInteger rowIdx = [rowKey integerValue];
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            if( v.tag == tag )
            {
                colId = colIdx;
                *stop = YES;
            }
        }];
        if( colId >= 0 ){
            rowId = rowIdx;
            *stop = YES;
        }
    }];
    
    if( colId >= 0 && rowId >= 0 ){
        return @{@"colId":@(colId), @"rowId":@(rowId)};
    }
    return nil;
}

#pragma mark - Private
/**
 * bubbleId, viewIndex(tag) -> oldView
 * posIndex, position位置 -> newView
 
 //1、newView的frame根据oldView的frame设置一个缩小的scale,添加到oldView后面
 //2、同时2个动画
 //      (1)newView放大出现, 1.2scale
 //      (2)oldView和右侧的view横向的往后移动[0<=index-cursor<=6]之间则需要移动，如果==7或==8则直接替换
 //      (3)oldView左侧view，也向左移动一小段位置
 //3、移动结束之后，newView从1.2scale->1.0scale， oldView左侧view恢复原来位置
 */
- (void)switchBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    if( _isInSwitching ){ //
        return;
    }
    
    _isInSwitching = YES;
    
    NSUInteger posIndex = position;
    NSUInteger posRowId = posIndex % _rowNum;
    NSUInteger posColumnId = posIndex / _rowNum + _cursorColumnId;
    
    NSUInteger viewIndex = bubbleId;
    NSUInteger viewRowId = viewIndex % _rowNum;
    NSUInteger viewColumnId = viewIndex / _rowNum;
    
    NSMutableArray *rowViewArray = _childViewArrayDict[@(posRowId)];
    
    __weak typeof(self)weakSelf = self;
    if( posRowId == viewRowId && posColumnId < rowViewArray.count && viewColumnId < rowViewArray.count ){
        UIView *posView = rowViewArray[posColumnId]; //oldview
        UIView *insertView = rowViewArray[viewColumnId]; //newview
        
        [insertView sendSubviewToBack:posView];
        insertView.frame = posView.frame;
        
        //2、同时3个动画
        //2.1 气泡缩放动画0->1
        insertView.transform = CGAffineTransformScale(CGAffineTransformIdentity, 0, 0);
        [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
            insertView.transform = CGAffineTransformIdentity;
        } completion:nil];
        
        //2.2 气泡挤压动画
        [weakSelf squeeAnimationWithPosView:posView row:posRowId column:posColumnId];
        
        //2.3 气泡移动动画
        NSUInteger totalAnimationCount = viewColumnId-posColumnId;
        __block NSUInteger finishCount = 0;
        for (int i = viewColumnId-1; i >= posColumnId; --i)
        {
            if( i >= 0  && i< rowViewArray.count )
            {
                UIView *v = rowViewArray[i];
                CGRect newFrame = [self viewFrameWithColumn:(i+1) withRow:posRowId];
                CGRect viewFrame = v.frame;
            
                CGFloat scaleX = newFrame.size.width / viewFrame.size.width;
                CGFloat scaleY = newFrame.size.height / viewFrame.size.height;
                CGFloat translateX = (CGRectGetMidX(newFrame) - CGRectGetMidX(viewFrame));
                CGFloat translateY = (CGRectGetMidY(newFrame) - CGRectGetMidY(viewFrame));
                
                //NSLog(@"cursorColumnId:%d, index:%d, scaleX=%f, scaleY=%f, transX=%f, transY=%f", _cursorColumnId, v.tag, scaleX, scaleY, transX, transY);
                
                CGAffineTransform scaleTransfrom = CGAffineTransformScale(CGAffineTransformIdentity, scaleX, scaleY);
                CGRect newOriginFrame = CGRectMake(viewFrame.origin.x + translateX,
                                                   viewFrame.origin.y + translateY,
                                                   viewFrame.size.width,
                                                   viewFrame.size.height);
                
                [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                    v.transform = CGAffineTransformConcat(scaleTransfrom, v.transform);
                    v.frame = newOriginFrame;
                } completion:^(BOOL finished) {
                    if( ++finishCount >= totalAnimationCount ) //全部完成update rowViewArray
                    {
                        [rowViewArray removeObjectAtIndex:viewColumnId];
                        [rowViewArray insertObject:insertView atIndex:posColumnId];
                        weakSelf.isInSwitching = NO;
                    }
                }];
            }
        }
    }
}

#pragma mark - Private Animation
- (void)bounceAnimation:(BOOL)isLeft distance:(CGFloat)dis
{
    CGFloat detlaX = (isLeft) ? (-dis): (dis);
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger idx, BOOL * _Nonnull stop) {
            CGRect oldFrame  = v.frame;
            CGRect newFrame = CGRectMake(oldFrame.origin.x+detlaX, oldFrame.origin.y, oldFrame.size.width, oldFrame.size.height);
            [UIView animateWithDuration:0.2 delay:0 options:UIViewAnimationOptionCurveEaseIn animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {
                [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.5 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut animations:^{
                    v.frame = oldFrame;
                } completion:^(BOOL finished) {
                    
                }];
            }];
        }];
    }];
}

//- (void)pulseAnimationDistance:(CGFloat)dis
//{
//    __weak typeof(self) weakSelf = self;
//    NSArray *durationArray = @[@(2), @(2.5), @(3)];
//    NSArray *distanceArray = @[@(5), @(6), @(7)];
//    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
//        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
//            CGRect oldFrame = v.frame;
//            
//            
////            CGFloat duration = 2.0 + ( ((rand() % 2) );
////            NSUInteger durationIndex = rand() % 3;
//            CGFloat duration = [durationArray[rand() % 3] floatValue];
//            CGFloat distance = [distanceArray[rand() % 3] floatValue];
//
//            CGRect newFrame = CGRectMake(oldFrame.origin.x, oldFrame.origin.y-distance, oldFrame.size.width, oldFrame.size.height);
//
//            
//            [UIView animateWithDuration:duration delay:0 options:UIViewAnimationOptionCurveEaseInOut | UIViewAnimationOptionAllowUserInteraction animations:^{
//                v.frame = newFrame;
//            } completion:^(BOOL finished) {//usingSpringWithDamping:0.4 initialSpringVelocity:0
//                [UIView animateWithDuration:duration delay:0  options:UIViewAnimationOptionCurveEaseInOut | UIViewAnimationOptionAllowUserInteraction animations:^{
//                    v.frame = oldFrame;
//                } completion:^(BOOL finished) {
////                    [weakSelf pulseAnimationDistance:0];
//                }];
//            }];
//        }];
//    }];
//}

- (void)allMoveNextPositionAnimation:(BOOL)isLeft
{
    _cursorColumnId = (isLeft) ? (_cursorColumnId+1) : (_cursorColumnId-1);
    
    
    if( _startCallback ){
        _startCallback(@{@"direction":(isLeft)?@"left":@"right"});
    }
    __block NSUInteger finishCount = 0;
    __weak typeof(self)weakSelf = self;

    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        NSUInteger rowIdx = [key integerValue];
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            CGRect newFrame = [self viewFrameWithColumn:colIdx withRow:rowIdx];
            CGRect viewFrame = v.frame;
            
            CGFloat scaleX = newFrame.size.width / viewFrame.size.width;
            CGFloat scaleY = newFrame.size.height / viewFrame.size.height;
            CGFloat translateX = (CGRectGetMidX(newFrame) - CGRectGetMidX(viewFrame));
            CGFloat translateY = (CGRectGetMidY(newFrame) - CGRectGetMidY(viewFrame));
            
            //NSLog(@"cursorColumnId:%d, index:%d, scaleX=%f, scaleY=%f, transX=%f, transY=%f", _cursorColumnId, v.tag, scaleX, scaleY, transX, transY);
            
            CGAffineTransform scaleTransfrom = CGAffineTransformScale(CGAffineTransformIdentity, scaleX, scaleY);
            CGRect newOriginFrame = CGRectMake(viewFrame.origin.x + translateX,
                                               viewFrame.origin.y + translateY,
                                               viewFrame.size.width,
                                               viewFrame.size.height);
            
            
            
            
            
            [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.transform = CGAffineTransformConcat(scaleTransfrom, v.transform);
                v.frame = newOriginFrame;
            } completion:^(BOOL finished) {
                finishCount++;
                if( finishCount == weakSelf.childViewCount ){
                    
                    NSLog(@"Swipe Finished...");

                    if( weakSelf.finishCallback ){
                        weakSelf.finishCallback(@{@"direction":(isLeft)?@"left":@"right"});
                    }
                }
            }];
        }];
    }];
}

- (void)squeeAnimationWithPosView:(UIView*)posView row:(NSUInteger)posRowId column:(NSInteger)posColumnId
{
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        NSUInteger rowIdx = [key integerValue];
        if( rowIdx == posRowId )
        {
            for (int colIdx = 0; colIdx < posColumnId; colIdx ++)
            {
                UIView *v = rowArray[colIdx];
                CGPoint offsetPoint = [self squeePositionWithFrame:posView.frame target:v.frame colIdx:colIdx];
                [self translateAnimationWithView:v offset:offsetPoint];
            }
        }
        else
        {
            [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
                
                CGPoint offsetPoint = [self squeePositionWithFrame:posView.frame target:v.frame colIdx:colIdx];
                [self translateAnimationWithView:v offset:offsetPoint];
            }];
        }
    }];
}

- (void)translateAnimationWithView:(UIView*)v offset:(CGPoint)offsetPoint
{
    CGAffineTransform t = CGAffineTransformTranslate(CGAffineTransformIdentity, offsetPoint.x, offsetPoint.y);
    [UIView animateWithDuration:0.3 delay:0 options:UIViewAnimationOptionCurveEaseInOut animations:^{
        v.transform = t;
    } completion:^(BOOL finished) {
        [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
            v.transform = CGAffineTransformIdentity;
        } completion:nil];
    }];
}


#pragma mark - Event Handler

#ifdef DEBUG

- (void)onWrapViewTapHandler:(UITapGestureRecognizer*)recoginzer
{
    UIView *view = recoginzer.view;
    
    NSDictionary *dict = [self viewPositionByTag:view.tag];
    if (dict) {
        NSInteger rowId = [dict[@"rowId"] integerValue];
        NSInteger colId = [dict[@"colId"] integerValue];
        
        NSArray *rowArray = _childViewArrayDict[@(rowId)] ;
        
        NSUInteger lastViewPosition = (rowArray.count-1) * _rowNum + rowId;
        NSUInteger position = colId * _rowNum + rowId;
        
        [self switchBubble:lastViewPosition position:position];
    }
    
//    __block BOOL findView = NO;
//    __block NSInteger rowId = -1;
//    __block NSInteger colId = -1;
//    
//    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowKey, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
//        NSUInteger rowIdx = [rowKey integerValue];
//        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
//            if( v == view )
//            {
//                colId = colIdx;
//                *stop = YES;
//            }
//        }];
//        if( colId >= 0 ){
//            rowId = rowIdx;
//            *stop = YES;
//        }
//    }];
//    
//    
//    if( rowId >= 0 && colId >= 0 )
//    {
//        //find last view at rowId
//        NSArray *rowArray = _childViewArrayDict[@(rowId)];
//        UIView *lastBubbleView = [rowArray lastObject];
//        
//        NSUInteger position = colId * _colNum + rowId;
//        [self replaceBubble:lastBubbleView.tag position:position];
//    }
}

#endif

- (void)onSwipeHandler:(UISwipeGestureRecognizer*)recognizer
{
    if( recognizer.direction ==  UISwipeGestureRecognizerDirectionLeft )
    {
        if( _cursorColumnId >=  (_colNum - 1)){
            NSLog(@"Right Bounce Animation!!!!!!");
            [self bounceAnimation:YES distance:20];
            return;
        }
        [self allMoveNextPositionAnimation:YES];
    }
    else if( recognizer.direction == UISwipeGestureRecognizerDirectionRight )
    {
        if( _cursorColumnId <= 0 ){
            NSLog(@"Left Bounce Animation!!!!!!");
            [self bounceAnimation:NO distance:20];
            return;
        }
        [self allMoveNextPositionAnimation:NO];
    }
}

//- (void)onTapHandler2:(UIGestureRecognizer*)recognizer
//{
//    NSUInteger insertViewIndex = 10;  //12;
//    NSUInteger posIndex = 2;
//    
//    [self switchBubble:insertViewIndex position:posIndex];
//}


@end
