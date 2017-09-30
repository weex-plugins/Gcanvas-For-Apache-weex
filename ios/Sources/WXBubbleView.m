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
    NSInteger       _cursorColumnId;    //游标始终指向_positonArray[0]对应的view对应的index

    NSMutableDictionary  *_childViewArrayDict;   //视图列表
}


- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        _positionArray = NSMutableArray.array;
        
        _leftNailArray = NSMutableArray.array;
        _rightNailArray = NSMutableArray.array;
        
        _childViewArrayDict = NSMutableDictionary.dictionary;
    }
    return self;
}


- (void)dealloc
{
    [_positionArray removeAllObjects];
    [_leftNailArray removeAllObjects];
    [_rightNailArray removeAllObjects];
    
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
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
    _cursor = 0;
    _cursorColumnId = 0;
    
    //add gesture recognizer
    UISwipeGestureRecognizer *recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler2:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionRight)];
    [self addGestureRecognizer:recognizer];
    
    recognizer = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(onSwipeHandler2:)];
    [recognizer setDirection:(UISwipeGestureRecognizerDirectionLeft)];
    [self addGestureRecognizer:recognizer];
    
    UITapGestureRecognizer *tapRecognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onTapHandler2:)];
    [self addGestureRecognizer:tapRecognizer];
}

- (void)addChildView:(UIView*)view atIndex:(NSUInteger)index
{
    NSUInteger rowId = index % _rowNum;
    if( !_childViewArrayDict[@(rowId)] ){
        _childViewArrayDict[@(rowId)] = NSMutableArray.array;
    }
    [_childViewArrayDict[@(rowId)] addObject:view];
    
    //tags
    view.tag = index;
}

#pragma mark - Export Method
- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    [self switchBubble:bubbleId position:position];
}


#pragma mark - ViewFrame Utils
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

//pos Frame
- (CGRect)viewFrameWithColumn:(NSUInteger)colIndex withRow:(NSUInteger)rowIndex
{
    CGRect frame = CGRectMake(-200, 0, 0, 0);
    NSInteger newColumIndex = colIndex - _cursorColumnId;
    if( newColumIndex < 0 ){
//        NSLog(@"MOVE...Left %d=>%d", colIndex*_rowNum + rowIndex, rowIndex );
        frame = [_leftNailArray[rowIndex] CGRectValue];
    }else if( newColumIndex < _colNum ){
//        NSLog(@"MOVE...POS %d=>%d", colIndex*_rowNum + rowIndex, newColumIndex * _rowNum + rowIndex );
        frame = [_positionArray[ newColumIndex * _rowNum + rowIndex ] CGRectValue];
    }else{
//        NSLog(@"MOVE...Right %d=>%d", colIndex*_rowNum + rowIndex, rowIndex );
        frame = [_rightNailArray[rowIndex] CGRectValue];
    }
    return frame;
}

//scale Frame
- (CGRect)scaleFrame:(CGRect)originFrame byScale:(CGFloat)scale
{
    CGFloat posScale = (1 - scale) * 0.5;
    CGRect scaleFrame = CGRectMake(originFrame.origin.x + originFrame.size.width*posScale,
                                   originFrame.origin.y + originFrame.size.height*posScale,
                                   originFrame.size.width * scale,
                                   originFrame.size.height * scale);
    return scaleFrame;
}

//squee Frame
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
    NSUInteger insertViewIndex = bubbleId;
    NSUInteger posIndex = position;
    
    NSUInteger posRowId = posIndex % _rowNum;
    NSUInteger posColumnId = posIndex / _rowNum + _cursorColumnId;
    
    NSUInteger insertRowId = insertViewIndex % _rowNum;
    NSUInteger insertColumnId = insertViewIndex / _rowNum;
    
    NSMutableArray *rowViewArray = _childViewArrayDict[@(posRowId)];
    
    __weak typeof(self)weakSelf = self;
    if( posRowId == insertRowId && posColumnId < rowViewArray.count && insertColumnId < rowViewArray.count ){
        UIView *posView = rowViewArray[posColumnId]; //oldview
        UIView *insertView = rowViewArray[insertColumnId]; //newview
        
        CGRect posFrame = posView.frame;
        CGRect zoomInFrame = [self scaleFrame:posFrame byScale:0];
//        CGRect zoomOutFrame = [self scaleFrame:posFrame byScale:1.1];
        
        insertView.frame = zoomInFrame;
        [insertView sendSubviewToBack:posView];
        
        //2、同时3个动画
        //2.1 newView 0->1的弹簧动画
        [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
            insertView.frame = posFrame;
        } completion:^(BOOL finished) {
            
        }];
//        [UIView animateWithDuration:0.5 delay:0 options:UIViewAnimationOptionCurveEaseIn animations:^{
//            insertView.frame = zoomOutFrame;
//        } completion:^(BOOL finished) {
//            [UIView animateWithDuration:0.5 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
//                insertView.frame = posFrame;
//            } completion:^(BOOL finished) {
//                
//            }];
//        }];
        
        //2.2 其他气泡挤压动画
        [weakSelf squeeAnimationWithPosView:posView row:posRowId column:posColumnId];
        
        //2.3
        NSUInteger totalAnimationCount = insertColumnId-posColumnId;
        __block NSUInteger finishCount = 0;
        for (int i = insertColumnId-1; i >= posColumnId; --i)
        {
            UIView *v = rowViewArray[i];
            NSLog(@"onTapHandler2() ==> move view.tag=%d", v.tag);
            CGRect moveFrame = [self viewFrameWithColumn:(i+1) withRow:posRowId];
            [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = moveFrame;
            } completion:^(BOOL finished) {
                if( ++finishCount >= totalAnimationCount ) //全部完成update rowViewArray
                {
                    [rowViewArray removeObjectAtIndex:insertColumnId];
                    [rowViewArray insertObject:insertView atIndex:posColumnId];
//                    NSLog(@"=======Moving Finished============");
//                    [rowViewArray enumerateObjectsUsingBlock:^(UIView* v, NSUInteger idx, BOOL * _Nonnull stop) {
//                        NSLog(@"rowViewArray[%d].tag=%d", idx, v.tag);
//                    }];
//                    NSLog(@"===================");
                    
                    
                }
            }];
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

- (void)pulseAnimationDistance:(CGFloat)dis
{
    __weak typeof(self) weakSelf = self;
    NSArray *durationArray = @[@(2), @(2.5), @(3)];
    NSArray *distanceArray = @[@(5), @(6), @(7)];
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger idx, BOOL * _Nonnull stop) {
            CGRect oldFrame = v.frame;
            
            
//            CGFloat duration = 2.0 + ( ((rand() % 2) );
//            NSUInteger durationIndex = rand() % 3;
            CGFloat duration = [durationArray[rand() % 3] floatValue];
            CGFloat distance = [distanceArray[rand() % 3] floatValue];

            CGRect newFrame = CGRectMake(oldFrame.origin.x, oldFrame.origin.y-distance, oldFrame.size.width, oldFrame.size.height);

            
            [UIView animateWithDuration:duration delay:0 options:UIViewAnimationOptionCurveEaseInOut | UIViewAnimationOptionAllowUserInteraction animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {//usingSpringWithDamping:0.4 initialSpringVelocity:0
                [UIView animateWithDuration:duration delay:0  options:UIViewAnimationOptionCurveEaseInOut | UIViewAnimationOptionAllowUserInteraction animations:^{
                    v.frame = oldFrame;
                } completion:^(BOOL finished) {
//                    [weakSelf pulseAnimationDistance:0];
                }];
            }];
        }];
    }];
}

- (void)moveNextAnimation:(BOOL)isLeft
{
    _cursorColumnId = (isLeft) ? (_cursorColumnId+1) : (_cursorColumnId-1);
    
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        NSUInteger rowIdx = [key integerValue];
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            CGRect newFrame = [self viewFrameWithColumn:colIdx withRow:rowIdx];
            [UIView animateWithDuration:0.8 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {
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
                
                CGRect frame = v.frame;
                CGRect newFrame = [self squeeFrame:posView.frame withTarget:v.frame colIdx:colIdx];
                [UIView animateWithDuration:0.3 delay:0 options:UIViewAnimationOptionCurveEaseInOut animations:^{
                    v.frame = newFrame;
                } completion:^(BOOL finished) {
                    [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
                        v.frame = frame;
                    } completion:^(BOOL finished) {
                        
                    }];
                }];
            }
        }
        else
        {
            [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
                CGRect frame = v.frame;
                CGRect newFrame = [self squeeFrame:posView.frame withTarget:v.frame colIdx:colIdx];
                [UIView animateWithDuration:0.3 delay:0 options:UIViewAnimationOptionCurveEaseInOut animations:^{
                    v.frame = newFrame;
                } completion:^(BOOL finished) {
                    [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
                        v.frame = frame;
                    } completion:^(BOOL finished) {
                        
                    }];
                }];
            }];
        }
    }];
}



#pragma mark - Event Handler
- (void)onSwipeHandler2:(UISwipeGestureRecognizer*)recognizer
{
    if( recognizer.direction ==  UISwipeGestureRecognizerDirectionLeft )
    {
        if( _cursorColumnId >=  (_colNum - 1)){
            NSLog(@"Right Bounce Animation!!!!!!");
            [self bounceAnimation:YES distance:20];
            return;
        }
        [self moveNextAnimation:YES];
    }
    else if( recognizer.direction == UISwipeGestureRecognizerDirectionRight )
    {
        if( _cursorColumnId < 0 ){
            NSLog(@"Left Bounce Animation!!!!!!");
            [self bounceAnimation:NO distance:20];
            return;
        }
        [self moveNextAnimation:NO];
    }
}

- (void)onTapHandler2:(UIGestureRecognizer*)recognizer
{
    NSUInteger insertViewIndex = 9;  //12;
    NSUInteger posIndex = 3;
    
    [self switchBubble:insertViewIndex position:posIndex];

//    [self pulseAnimationDistance:5];
}


@end
