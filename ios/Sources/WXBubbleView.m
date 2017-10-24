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
@property (assign, nonatomic) BOOL isInSwiping; //在横滑动画中
@property (assign, nonatomic) BOOL isInBouncing; //在bounce动画中

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
        
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onDidEnterBackgroundNotify:)
                                                     name:UIApplicationWillResignActiveNotification
                                                   object:nil];
        
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(onWillEnterForegroundNotify:)
                                                     name:UIApplicationDidBecomeActiveNotification
                                                   object:nil];
    }
    return self;
}


- (void)dealloc
{
    [_positionArray removeAllObjects];
    [_leftNailArray removeAllObjects];
    [_rightNailArray removeAllObjects];
    
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * wrapView, NSUInteger idx, BOOL * _Nonnull stop) {
            [wrapView.layer removeAllAnimations];
            if( wrapView.subviews.count > 0 ){
                UIView *view = [wrapView.subviews firstObject];
                if( view ){
                    [view.layer removeAllAnimations];
                }
            }
        }];
        [rowArray removeAllObjects];
    }];
    [_childViewArrayDict removeAllObjects];
    
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)configPosition:(NSArray*)positions withNail:(NSArray*)nails withRow:(NSUInteger)row
{
    CGFloat scale = [UIScreen mainScreen].bounds.size.width / WXDefaultScreenWidth;
        
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
    
    _isConfig = YES;
}

- (void)addChildView:(UIView*)view atIndex:(NSUInteger)index
{
    if( [view superview] ){
        return;
    }
    CGRect frame = [self originViewFrameAtIndex:index];
    
    //wrapView for appear/move/replace animation
    UIView *wrapView = [[UIView alloc] initWithFrame:frame];
    wrapView.tag = index;
    [self addSubview:wrapView];
    
    view.frame = wrapView.bounds;
//    [view.subviews enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull subView, NSUInteger idx, BOOL * _Nonnull stop) {
//        CGRect frame = subView.frame;
//        CGRect scaleFrame = CGRectMake(-frame.size.width*0.5,
//                                       -frame.size.height*0.5,
//                                       frame.size.width * 2,
//                                       frame.size.height * 2);
//        subView.frame = scaleFrame;
//    }];
//    
//    view.frame = CGRectMake(-wrapView.frame.size.width*0.5, -wrapView.frame.size.height*0.5, wrapView.frame.size.width * 2, wrapView.frame.size.height * 2);
//    view.transform = CGAffineTransformScale(CGAffineTransformIdentity, 0.5, 0.5);
    [wrapView addSubview:view];
    
    //bubble tap
    UITapGestureRecognizer *tapRecognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onWrapViewTapHandler:)];
    [wrapView addGestureRecognizer:tapRecognizer];
    
    //Appear-Animation: bubble appear animation add to wrapView
    wrapView.transform = CGAffineTransformScale(CGAffineTransformIdentity, 0.4, 0.4);
    
    NSArray *delayArray = @[@(0), @(0.08), @(0.16)];
    CGFloat delay = [delayArray[rand() % 3] floatValue];
    
    [UIView animateWithDuration:1 delay:delay usingSpringWithDamping:0.4 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
        wrapView.transform = CGAffineTransformIdentity;
    } completion:nil];

    //view pulse animation
    [self pulseAnimationWithView:view];
    
    //save childView
    NSUInteger rowId = index % _rowNum;
    if( !_childViewArrayDict[@(rowId)] ){
        _childViewArrayDict[@(rowId)] = NSMutableArray.array;
    }
    [_childViewArrayDict[@(rowId)] addObject:wrapView];
    _childViewCount++;
}

#pragma mark - Export Method
- (void)replaceBubble:(NSUInteger)bubbleId position:(NSUInteger)position
{
    [self switchBubble:bubbleId position:position];
    
    [self bubbleViewAppear];
}

- (NSArray*)inBubbleList
{
    NSMutableArray *array = NSMutableArray.array;
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowKey, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            NSInteger visibleColumnIndex = (NSInteger)colIdx - _cursorColumnId;
            if( visibleColumnIndex >= 0 && visibleColumnIndex < _colNum )
            {
                [array addObject:@(v.tag)];
            }
        }];
    }];
    return array;
}

- (NSArray*)outBubbleList
{
    NSMutableArray *array = NSMutableArray.array;
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowKey, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
            NSInteger visibleColumnIndex = (NSInteger)colIdx - _cursorColumnId;
            if( !(visibleColumnIndex >= 0 && visibleColumnIndex < _colNum) )
            {
                [array addObject:@(v.tag)];
            }
        }];
    }];
    return array;
}


- (void)bubbleViewAppear
{
    //recover pluse animation
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * wrapView, NSUInteger idx, BOOL * _Nonnull stop) {
            if( wrapView.subviews.count > 0 ){
                UIView *view = [wrapView.subviews firstObject];
                if( view ){
                    [self pulseAnimationWithView:view];
                }
            }
        }];
    }];
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
        frame = [_leftNailArray[rowIndex] CGRectValue];
    }
    else if( newColumIndex < _colNum )
    {
        frame = [_positionArray[ newColumIndex * _rowNum + rowIndex ] CGRectValue];
    }
    else
    {
        frame = [_rightNailArray[rowIndex] CGRectValue];
    }
    return frame;
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
    
    //NSLog(@"====>squee, colIdx:%d, offsetX:%.2f, offsetY:%.2f", colIdx, squeeX, squeeY);
    return CGPointMake(squeeX, squeeY);
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
    if( _isInSwitching || _isInSwiping){
        return;
    }
    
    if( bubbleId == position ){
        return;
    }
    
    NSUInteger posIndex = position;
    NSUInteger posRowId = posIndex % _rowNum;
    NSUInteger posColumnId = posIndex / _rowNum + _cursorColumnId;
    
    NSUInteger viewIndex = bubbleId;
    NSUInteger viewRowId = viewIndex % _rowNum;
    NSUInteger viewColumnId = viewIndex / _rowNum;
    
    NSMutableArray *rowViewArray = _childViewArrayDict[@(posRowId)];
    
    __weak typeof(self)weakSelf = self;
    if( posRowId == viewRowId &&  posColumnId != viewColumnId &&
       posColumnId < rowViewArray.count && viewColumnId < rowViewArray.count ){
        
        //NSLog(@"switchBubble, From:%lu=>to:%lu", (unsigned long)bubbleId, (unsigned long)position);

        _isInSwitching = YES;
        UIView *posView = rowViewArray[posColumnId]; //oldview
        UIView *insertView = rowViewArray[viewColumnId]; //newview
        
        [insertView sendSubviewToBack:posView];
        
        //2、同时3个动画
        //2.1 气泡缩放动画0->1, upate scale & center
        insertView.center = posView.center;
        
        CGRect posFrame = posView.frame;
        CGRect insertViewFrame = insertView.frame;
        CGFloat scaleX = posFrame.size.width / insertViewFrame.size.width;
        CGFloat scaleY = posFrame.size.height / insertViewFrame.size.height;
        CGAffineTransform newScaleTransfrom = CGAffineTransformScale(insertView.transform, scaleX, scaleY);
        insertView.transform = CGAffineTransformScale(CGAffineTransformIdentity, 0, 0);
        
        [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut | UIViewAnimationOptionAllowUserInteraction animations:^{
            insertView.transform = newScaleTransfrom;
        } completion:nil];
        
        //2.2 气泡挤压动画
        [weakSelf squeeAnimationWithPosView:posView row:posRowId column:posColumnId];
        
        //2.3 气泡移动动画
        NSUInteger totalAnimationCount = viewColumnId-posColumnId;
        __block NSUInteger finishCount = 0;
        for (int i = (int)viewColumnId-1; i >= (int)posColumnId; --i)
        {
            if( i >= 0  && i< rowViewArray.count )
            {
                UIView *v = rowViewArray[i];
                CGRect newFrame = [self viewFrameWithColumn:(i+1) withRow:posRowId];
                CGRect viewFrame = v.frame;
            
                CGFloat scaleX = newFrame.size.width / viewFrame.size.width;
                CGFloat scaleY = newFrame.size.height / viewFrame.size.height;
                CGFloat transX = (CGRectGetMidX(newFrame) - CGRectGetMidX(viewFrame));
                CGFloat transY = (CGRectGetMidY(newFrame) - CGRectGetMidY(viewFrame));
                
                CGAffineTransform scaleTransfrom = CGAffineTransformScale(CGAffineTransformIdentity, scaleX, scaleY);
                
                [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut|UIViewAnimationOptionAllowUserInteraction  animations:^{
                    v.transform = CGAffineTransformConcat(scaleTransfrom, v.transform);
                    v.frame = CGRectMake(v.frame.origin.x+transX,
                                         v.frame.origin.y+transY,
                                         v.frame.size.width,
                                         v.frame.size.height);
                } completion:^(BOOL finished) {
                    if( ++finishCount >= totalAnimationCount ) //全部完成update rowViewArray
                    {
                        if(rowViewArray.count > viewColumnId){
                            [rowViewArray removeObjectAtIndex:viewColumnId];
                            [rowViewArray insertObject:insertView atIndex:posColumnId];
                        }
                        weakSelf.isInSwitching = NO;
                    }
                }];
            }
        }
    }
}

#pragma mark - Private Animation
- (void)bounceAnimation:(BOOL)isLeft
{
    CGFloat dis = 20;
    if( _startSwipeCallback ){
        _startSwipeCallback(@{@"direction":(isLeft)?@"left":@"right",@"type":@"bounce"}, YES);
    }
    __weak typeof(self)weakSelf = self;
    CGFloat detlaX = (isLeft) ? (-dis): (dis);
    
    
    _isInBouncing = YES;
    __block NSUInteger finishCount = 0;
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger idx, BOOL * _Nonnull stop) {
            CGRect oldFrame  = v.frame;
            CGRect newFrame = CGRectMake(oldFrame.origin.x+detlaX, oldFrame.origin.y, oldFrame.size.width, oldFrame.size.height);
            [UIView animateWithDuration:0.2 delay:0 options:UIViewAnimationOptionCurveEaseIn|UIViewAnimationOptionAllowUserInteraction animations:^{
                v.frame = newFrame;
            } completion:^(BOOL finished) {
                [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.5 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut| UIViewAnimationOptionAllowUserInteraction animations:^{
                    v.frame = oldFrame;
                } completion:^(BOOL finished) {
                    if( ++finishCount >= weakSelf.childViewCount ){
                        weakSelf.isInBouncing = NO;
                        if( weakSelf.finishSwipeCallback ){
                            weakSelf.finishSwipeCallback(@{@"direction":(isLeft)?@"left":@"right",@"type":@"bounce"}, YES);
                        }
                    }
                }];
            }];
        }];
    }];
}

- (void)allMoveNextPositionAnimation:(BOOL)isLeft
{
    _isInSwiping = YES;
    
    if( _isInSwitching || _isInBouncing ){
        return;
    }
    _cursorColumnId = (isLeft) ? (_cursorColumnId+1) : (_cursorColumnId-1);
    
    if( _startSwipeCallback ){
        _startSwipeCallback(@{@"direction":(isLeft)?@"left":@"right",@"type":@"swipe"}, YES);
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
            CGFloat transX = (CGRectGetMidX(newFrame) - CGRectGetMidX(viewFrame));
            CGFloat transY = (CGRectGetMidY(newFrame) - CGRectGetMidY(viewFrame));
            
            CGAffineTransform scaleTransfrom = CGAffineTransformScale(CGAffineTransformIdentity, scaleX, scaleY);
            [UIView animateWithDuration:1.0 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseOut | UIViewAnimationOptionAllowUserInteraction animations:^{
                v.transform = CGAffineTransformConcat(scaleTransfrom, v.transform);
                v.frame = CGRectMake(v.frame.origin.x+transX, v.frame.origin.y+transY, v.frame.size.width, v.frame.size.height);
            } completion:^(BOOL finished) {
                if( ++finishCount == weakSelf.childViewCount ){
                    weakSelf.isInSwiping = NO;
                    if( weakSelf.finishSwipeCallback ){
                        weakSelf.finishSwipeCallback(@{@"direction":(isLeft)?@"left":@"right",@"type":@"swipe"}, YES);
                    }
                }
            }];
            
            [weakSelf pulseAnimationWithView:v];
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
                [self moveAnimationWithView:v offset:offsetPoint];
            }
        }
        else
        {
            [rowArray enumerateObjectsUsingBlock:^(UIView * v, NSUInteger colIdx, BOOL * _Nonnull stop) {
                CGPoint offsetPoint = [self squeePositionWithFrame:posView.frame target:v.frame colIdx:colIdx];
                [self moveAnimationWithView:v offset:offsetPoint];
            }];
        }
    }];
}

- (void)moveAnimationWithView:(UIView*)v offset:(CGPoint)offsetPoint
{
    [UIView animateWithDuration:0.3 delay:0 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
        v.frame = CGRectMake(v.frame.origin.x+offsetPoint.x, v.frame.origin.y+offsetPoint.y, v.frame.size.width, v.frame.size.height);
    } completion:^(BOOL finished) {
        [UIView animateWithDuration:1 delay:0 usingSpringWithDamping:0.6 initialSpringVelocity:0.2 options:UIViewAnimationOptionCurveEaseInOut|UIViewAnimationOptionAllowUserInteraction animations:^{
            v.frame = CGRectMake(v.frame.origin.x-offsetPoint.x, v.frame.origin.y-offsetPoint.y, v.frame.size.width, v.frame.size.height);
        } completion:nil];
    }];
}

- (void)pulseAnimationWithView:(UIView*)view
{
    CAAnimation *animation = [view.layer animationForKey:@"bubble.pulse"];
    if( animation )
        return;
    
    //view pulse animation
    NSArray *durationArray = @[@(4), @(5), @(6)];
    NSArray *distanceArray = @[@(5), @(6), @(7)];
    
    CABasicAnimation *anim = [CABasicAnimation animationWithKeyPath:@"transform.translation.y"];;
    anim.fromValue = @(0);
    anim.toValue = @( [distanceArray[rand()%3] floatValue] );
    anim.duration = [durationArray[rand()%3] floatValue];
    anim.autoreverses = YES;
    anim.repeatCount=FLT_MAX;
    
    [view.layer addAnimation:anim forKey:@"bubble.pulse"];
}


#pragma mark - Event Handler
- (void)onWrapViewTapHandler:(UITapGestureRecognizer*)recoginzer
{
    UIView *view = recoginzer.view;
    if( _bubbleClickCallback ){
        _bubbleClickCallback(@{@"bubbleId":@(view.tag)}, YES);
    }
}

//#endif
- (void)onSwipeHandler:(UISwipeGestureRecognizer*)recognizer
{
    if( recognizer.direction ==  UISwipeGestureRecognizerDirectionLeft )
    {
        NSUInteger maxColumCount = _childViewCount / _rowNum;
        if( _cursorColumnId >  maxColumCount - _colNum){
//            NSLog(@"Right Bounce Animation!!!!!!");
            [self bounceAnimation:YES];
            return;
        }
        [self allMoveNextPositionAnimation:YES];
    }
    else if( recognizer.direction == UISwipeGestureRecognizerDirectionRight )
    {
        if( _cursorColumnId <= 0 ){
//            NSLog(@"Left Bounce Animation!!!!!!");
            [self bounceAnimation:NO];
            return;
        }
        [self allMoveNextPositionAnimation:NO];
    }
}


#pragma mark - Override
- (void)touchesMoved:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
//    NSLog(@"touches move ....");
//    [self.subviews  enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull subView, NSUInteger idx, BOOL * _Nonnull stop) {
//        subView.userInteractionEnabled = NO;
//    }];
}


- (void)touchesEnded:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
//    NSLog(@"touches end ....");
//    [self.subviews  enumerateObjectsUsingBlock:^(__kindof UIView * _Nonnull subView, NSUInteger idx, BOOL * _Nonnull stop) {
//        subView.userInteractionEnabled = YES;
//    }];
}

#pragma mark - Notification
- (void)onDidEnterBackgroundNotify:(NSNotification*)notification
{
    [_childViewArrayDict enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull rowIdx, NSMutableArray *rowArray, BOOL * _Nonnull stop) {
        [rowArray enumerateObjectsUsingBlock:^(UIView * wrapView, NSUInteger idx, BOOL * _Nonnull stop) {
            if( wrapView.subviews.count > 0 ){
                UIView *view = [wrapView.subviews firstObject];
                if( view ){
                    [view.layer removeAllAnimations];
                }
            }
        }];
    }];
}

- (void)onWillEnterForegroundNotify:(NSNotification*)notification
{
    [self bubbleViewAppear];
}

@end
