package com.alibaba.weex.plugin.gcanvas.bubble;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.annotation.RequiresApi;
import android.util.AttributeSet;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.Animation;
import android.view.animation.LayoutAnimationController;
import android.view.animation.ScaleAnimation;

import com.alibaba.fastjson.JSONArray;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author ertong
 *         create at 2017/9/21
 */
public class BubbleContainer extends ViewGroup implements GestureDetector.OnGestureListener, BubbleEventCenter.IBubbleAnimationListener {

    private static final String TAG = BubbleContainer.class.getSimpleName();

    private int mRowCount, mColumnCount;

    private boolean mIsAnimationShow = false;

    private boolean mIsPositionDirty = false;

    private ArrayList<BubblePosition> mBubblePositions = new ArrayList<>();

    private ArrayList<BubblePosition> mHeadNails = new ArrayList<>();

    private ArrayList<BubblePosition> mTailNails = new ArrayList<>();

    private ArrayList<BubbleAnimateWrapper> mWrapperList = new ArrayList<>();

    private CopyOnWriteArrayList<BubbleAnimateWrapper> mHeadNailViews = new CopyOnWriteArrayList<>();

    private CopyOnWriteArrayList<BubbleAnimateWrapper> mTailNailViews = new CopyOnWriteArrayList<>();

    private CopyOnWriteArrayList<BubbleAnimateWrapper> mPositionCache = new CopyOnWriteArrayList<>();

    private HashMap<BubbleEventCenter.AnimationType, AtomicInteger> mAnimationRecorder = new HashMap<>();

    private int mCurrentLayoutColumn = 0;

    private final GestureDetector mGestureDetector = new GestureDetector(getContext(), this);

    private ArrayList<IAnimationListener> mAnimationListeners = new ArrayList<>();

    private ArrayList<IBubbleClickListener> mBubbleClickListeners = new ArrayList<>();

    private int clickedBubbleId = -1;

    private int lastX = -1;
    private int lastY = -1;

    private boolean mIsDetached = false;
    private boolean mIsReattached = false;

    private static final int SWIPE_THRESHOLD = 100;
    private static final int SWIPE_VELOCITY_THRESHOLD = 100;

    private static final int sScreenLock = 0x1200;
    private static final int sScreenOn = 0x1300;

    private int mScreenState = sScreenOn;

    private boolean mIsBubbleReplacing = false;

    private ScreenBroadcastReceiver mScreenReceiver = new ScreenBroadcastReceiver();

    public BubbleContainer(Context context) {
        super(context);
        init();
    }

    public BubbleContainer(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public BubbleContainer(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    public BubbleContainer(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init();
    }

    private void init() {
        Animation animation = new ScaleAnimation(0, 1, 0, 1, ScaleAnimation.RELATIVE_TO_SELF, 0.5f, ScaleAnimation.RELATIVE_TO_SELF, 0.5f);
        final LayoutAnimationController controller = new LayoutAnimationController(animation);
        controller.setOrder(LayoutAnimationController.ORDER_RANDOM);
        controller.setDelay(0.1f);
        animation.setDuration(800);
        animation.setInterpolator(new SpringInterpolator());
        animation.setAnimationListener(new Animation.AnimationListener() {
            @Override
            public void onAnimationStart(Animation animation) {
                AtomicInteger layoutAnim = mAnimationRecorder.get(BubbleEventCenter.AnimationType.Layout);
                if (null == layoutAnim) {
                    layoutAnim = new AtomicInteger();
                    mAnimationRecorder.put(BubbleEventCenter.AnimationType.Layout, layoutAnim);
                }
                layoutAnim.incrementAndGet();
            }

            @Override
            public void onAnimationEnd(Animation animation) {
                animation.setAnimationListener(null);
                AtomicInteger layoutAnim = mAnimationRecorder.get(BubbleEventCenter.AnimationType.Layout);
                if (layoutAnim.decrementAndGet() == 0) {
                    for (BubbleAnimateWrapper wrapper : mWrapperList) {
                        wrapper.enableFloating(true);
                    }
                }
            }

            @Override
            public void onAnimationRepeat(Animation animation) {

            }
        });


        setLayoutAnimation(controller);
    }

    @Override
    public void addView(View child, int index, LayoutParams params) {
        int wrapperIndex = index;
        if (wrapperIndex < 0 || wrapperIndex > mWrapperList.size()) {
            wrapperIndex = mWrapperList.size();
            mWrapperList.add(wrapperIndex, new BubbleAnimateWrapper(child, wrapperIndex));
            child.setId(wrapperIndex);
            child.setOnTouchListener(new OnTouchListener() {
                @Override
                public boolean onTouch(View view, MotionEvent motionEvent) {
                    clickedBubbleId = view.getId();
                    return false;
                }
            });
        }

        super.addView(child, index, params);
    }

    @Override
    public void removeView(View view) {
        for (int i = 0; i < mWrapperList.size(); i++) {
            BubbleAnimateWrapper wrapper = mWrapperList.get(i);
            if (wrapper.getCurrentView() == view) {
                mWrapperList.remove(i);
                break;
            }
        }
        super.removeView(view);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);

        if (mIsPositionDirty) {
            calculateBubbleInfo();
            mIsPositionDirty = false;
        }

        if (mIsReattached || mScreenState == sScreenLock) {
            return;
        }

        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();
        if (end > childCount) {
            end = childCount;
        }

        int count = 0;
        final int headNailSize = mHeadNails.size();
        for (; count < start && count < childCount; count++) {
            BubblePosition position = mHeadNails.get(count % headNailSize);
            View child = getChildAt(count);
            mWrapperList.get(count).setBubblePosition(position);
            child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
        }

        final int bubbleLength = mBubblePositions.size();
        for (int i = 0; i < bubbleLength && count < childCount; i++, count++) {
            BubblePosition position = mBubblePositions.get(i);
            View child = getChildAt(count);
            mWrapperList.get(count).setBubblePosition(position);
            child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
        }

        final int tailNailSize = mTailNails.size();
        for (int i = end; i < childCount && count < childCount; i++, count++) {
            BubblePosition position = mTailNails.get((i - end) % tailNailSize);
            View child = getChildAt(count);
            mWrapperList.get(count).setBubblePosition(position);
            child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
        }
    }

    public void setHeadNails(float[][] nailInfo) {
        if (null == nailInfo) {
            return;
        }

        this.mHeadNails.clear();
        for (float[] position : nailInfo) {
            if (position.length == 4) {
                BubblePosition bp = new BubblePosition(position);
                bp.isNail = true;
                this.mHeadNails.add(bp);
            }
        }
        mIsPositionDirty = true;
    }

    public void setTailNails(float[][] nailInfo) {
        if (null == nailInfo) {
            return;
        }
        this.mTailNails.clear();
        for (float[] position : nailInfo) {
            if (position.length == 4) {
                BubblePosition bp = new BubblePosition(position);
                bp.isNail = true;
                this.mTailNails.add(bp);
            }
        }
        mIsPositionDirty = true;
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        if (mScreenState == sScreenLock || mIsReattached) {
            return;
        }
        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();
        if (end > childCount) {
            end = childCount;
        }

        mHeadNailViews.clear();
        int count = 0;
        final int headNailSize = mHeadNails.size();
        for (; count < start && count < childCount; count++) {
            BubblePosition position = mHeadNails.get(count % headNailSize);
            View child = getChildAt(count);
            child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            BubbleAnimateWrapper animator = mWrapperList.get(count);
            animator.setBubblePosition(position);
            mHeadNailViews.add(animator);
        }

        mPositionCache.clear();
        final int bubbleLength = mBubblePositions.size();
        for (int i = 0; i < bubbleLength && count < childCount; i++) {
            BubblePosition position = mBubblePositions.get(i);
            View child = getChildAt(count);
            BubbleAnimateWrapper animator = mWrapperList.get(count);
            animator.setBubblePosition(position);
            child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            mPositionCache.add(animator);
            count++;
        }

        mTailNailViews.clear();
        final int tailNailSize = mTailNails.size();
        for (int i = end; i < childCount && count < childCount; i++, count++) {
            BubblePosition position = mTailNails.get((i - end) % tailNailSize);
            View child = getChildAt(count);
            child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            BubbleAnimateWrapper animator = mWrapperList.get(count);
            animator.setBubblePosition(position);
            mTailNailViews.add(animator);
        }
    }


    public void setRows(int rows) {
        this.mRowCount = rows;
        this.mIsPositionDirty = true;
    }

    private void calculateNailInfo() {
        if (mRowCount > 0 && !mBubblePositions.isEmpty()) {
            for (int i = 0; i < mHeadNails.size(); i++) {
                BubblePosition bp = mHeadNails.get(i);
                bp.row = i % mRowCount;
                bp.column = -1 - i / mRowCount;
                if (i > 0) {
                    BubblePosition last = mHeadNails.get(i);
                    if (last.row == bp.row && last.row + 1 == bp.row) {
                        last.setBottomSibling(bp);
                        bp.setTopSibling(last);
                    }
                }
            }

            for (int i = 0; i < mTailNails.size(); i++) {
                BubblePosition bp = mTailNails.get(i);
                bp.row = i % mRowCount;
                bp.column = mColumnCount + i / mRowCount;
                if (i > 0) {
                    BubblePosition last = mTailNails.get(i);
                    if (last.row == bp.row && last.row + 1 == bp.row) {
                        last.setBottomSibling(bp);
                        bp.setTopSibling(last);
                    }
                }
            }

            int headSize = mHeadNails.size() >= mRowCount ? mRowCount : mHeadNails.size();

            for (int i = 0; i < headSize; i++) {
                BubblePosition bp = mBubblePositions.get(i);
                BubblePosition headNail = mHeadNails.get(i);
                bp.setLeftSibling(headNail);
                headNail.setRightSibling(bp);
            }

            int tailSize = mTailNails.size() >= mRowCount ? mRowCount : mTailNails.size();

            int bubbleLength = mBubblePositions.size();
            for (int i = 0; i < tailSize; i++) {
                BubblePosition bp = mBubblePositions.get(bubbleLength - tailSize + i);
                BubblePosition tailNail = mTailNails.get(i);
                bp.setRightSibling(tailNail);
                tailNail.setLeftSibling(bp);
            }
        }
    }

    private void calculateBubbleInfo() {
        if (mRowCount > 0 && !mBubblePositions.isEmpty()) {
            mColumnCount = (int) Math.ceil(mBubblePositions.size() * 1.0 / mRowCount);
            int count = 0;
            for (BubblePosition bp : mBubblePositions) {
                bp.row = count % mRowCount;
                bp.column = count / mRowCount;
                count++;
            }

            final int size = mBubblePositions.size();
            for (int i = 0; i < size; i++) {
                BubblePosition bp = mBubblePositions.get(i);
                for (int j = i + 1; j < size; j++) {
                    BubblePosition tmp = mBubblePositions.get(j);
                    if (bp.row == tmp.row && bp.column + 1 == tmp.column) {
                        bp.setRightSibling(tmp);
                        tmp.setLeftSibling(bp);
                    } else if (bp.column == tmp.column && bp.row + 1 == tmp.row) {
                        bp.setBottomSibling(tmp);
                        tmp.setTopSibling(bp);
                    }
                }
            }
            calculateNailInfo();
        }
    }

    public void setPositions(float[][] positions) {
        if (null == positions) {
            return;
        }

        if (!mBubblePositions.isEmpty()) {
            return;
        }
        this.mBubblePositions.clear();
        for (float[] position : positions) {
            if (position.length == 4) {
                this.mBubblePositions.add(new BubblePosition(position));
                if (position[2] > BubblePosition.sMaxWidth) {
                    BubblePosition.sMaxWidth = position[2];
                }
                if (position[3] > BubblePosition.sMaxHeight) {
                    BubblePosition.sMaxHeight = position[3];
                }
            }
        }
        mIsPositionDirty = true;
        if (!mIsAnimationShow) {
            startLayoutAnimation();
            mIsAnimationShow = true;
        }
    }

    private void destroy() {

    }

    private boolean isAnimating() {
        for (Map.Entry<BubbleEventCenter.AnimationType, AtomicInteger> entry : mAnimationRecorder.entrySet()) {
            if (entry.getValue().get() > 0) {
                return true;
            }
        }
        return false;
    }

    public void swipe(int direction) {
        AtomicInteger bubble = mAnimationRecorder.get(BubbleEventCenter.AnimationType.ReplaceScale);
        if (mIsBubbleReplacing || (null != bubble && bubble.get() > 0)) {
            return;
        }
        bubble = mAnimationRecorder.get(BubbleEventCenter.AnimationType.Layout);
        if (null != bubble && bubble.get() > 0) {
            return;
        }

        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();

        if (direction == BubbleAnimateWrapper.sDirectionLeft) {
            if (end > childCount) {
                for (BubbleAnimateWrapper animateWrapper : mPositionCache) {
                    animateWrapper.edgeBounce(direction);
                }
            } else {
                for (BubbleAnimateWrapper animateWrapper : mPositionCache) {
                    animateWrapper.move(direction);
                    BubblePosition position = animateWrapper.getPosition();
                    if (null != position && position.column < 0) {
                        addInOrder(mHeadNailViews, animateWrapper);
                        mPositionCache.remove(animateWrapper);
                    }
                }
                int row = 0;
                int counter = 0;
                BubbleAnimateWrapper animator;
                loop:
                while (counter < mRowCount && mTailNailViews.size() > 0 && counter <= mTailNailViews.size()) {
                    final int length = mTailNailViews.size();
                    for (int i = 0; i < length; i++) {
                        animator = mTailNailViews.get(i);
                        if (animator.getPosition().row == row) {
                            animator.move(direction);
                            mTailNailViews.remove(animator);
                            addInOrder(mPositionCache, animator);
                            row++;
                            counter++;
                            continue loop;
                        }
                    }
                    animator = mTailNailViews.remove(0);
                    animator.move(direction);
                    addInOrder(mPositionCache, animator);
                    counter++;
                }
                mCurrentLayoutColumn++;
            }
        } else if (direction == BubbleAnimateWrapper.sDirectionRight) {
            if (mHeadNailViews.isEmpty()) {
                for (BubbleAnimateWrapper animateWrapper : mPositionCache) {
                    animateWrapper.edgeBounce(direction);
                }
            } else {
                for (BubbleAnimateWrapper animateWrapper : mPositionCache) {
                    animateWrapper.move(direction);
                    BubblePosition position = animateWrapper.getPosition();
                    if (null != position && position.column >= mColumnCount) {
                        addInOrder(mTailNailViews, animateWrapper);
                        mPositionCache.remove(animateWrapper);
                    }
                }
                int row = 0;
                int counter = 0;
                BubbleAnimateWrapper animator;
                loop:
                while (counter < mRowCount && mHeadNailViews.size() > 0 && counter <= mHeadNailViews.size()) {
                    final int length = mHeadNailViews.size();
                    for (int i = 0; i < length; i++) {
                        animator = mHeadNailViews.get(i);
                        if (animator.getPosition().row == row) {
                            animator.move(direction);
                            mHeadNailViews.remove(animator);
                            addInOrder(mPositionCache, animator);
//                            mPositionCache.add(animator);
                            row++;
                            counter++;
                            continue loop;
                        }
                    }
                    animator = mHeadNailViews.remove(0);
                    animator.move(direction);
//                    mPositionCache.add(animator);
                    addInOrder(mPositionCache, animator);
                    counter++;
                }
                mCurrentLayoutColumn--;
            }
        }

    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        int x = (int) ev.getRawX();
        int y = (int) ev.getRawY();
        int dealtX = 0;
        int dealtY = 0;

        switch (ev.getAction()) {
            case MotionEvent.ACTION_DOWN:
                dealtX = 0;
                dealtY = 0;
                // 保证子View能够接收到Action_move事件
                getParent().requestDisallowInterceptTouchEvent(true);
                break;
            case MotionEvent.ACTION_MOVE:
                dealtX += Math.abs(x - lastX);
                dealtY += Math.abs(y - lastY);
                if (dealtX >= dealtY) {
                    getParent().requestDisallowInterceptTouchEvent(true);
                } else {
                    getParent().requestDisallowInterceptTouchEvent(false);
                }
                lastX = x;
                lastY = y;
                break;
            case MotionEvent.ACTION_CANCEL:
            case MotionEvent.ACTION_UP:
                break;

        }
        return super.dispatchTouchEvent(ev);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        return mGestureDetector.onTouchEvent(event);
    }


    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        BubbleEventCenter.getEventCenter().addBubbleAnimListener(this);
        if (mIsDetached) {
            mIsReattached = true;
        }
        mIsDetached = false;
        IntentFilter filter = new IntentFilter();
        filter.addAction(Intent.ACTION_SCREEN_ON);
        filter.addAction(Intent.ACTION_SCREEN_OFF);
        filter.addAction(Intent.ACTION_USER_PRESENT);
        getContext().registerReceiver(mScreenReceiver, filter);
        if(mIsReattached){
            for (BubbleAnimateWrapper animateWrapper : mWrapperList) {
                animateWrapper.enableFloating(true);
            }
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        BubbleEventCenter.getEventCenter().removeBubbleAnimListener(this);
        mAnimationRecorder.clear();
        mIsDetached = true;
        mIsBubbleReplacing = false;
        getContext().unregisterReceiver(mScreenReceiver);
    }

    @Override
    public boolean onDown(MotionEvent e) {
        return true;
    }

    @Override
    public void onShowPress(MotionEvent e) {

    }

    @Override
    public boolean onSingleTapUp(MotionEvent e) {
        if (clickedBubbleId >= 0) {
            for (IBubbleClickListener listener : mBubbleClickListeners) {
                listener.onClick(clickedBubbleId);
            }
            clickedBubbleId = -1;
        }
        return true;
    }

    @Override
    public boolean onScroll(MotionEvent e1, MotionEvent e2, float distanceX, float distanceY) {
        return true;
    }

    @Override
    public void onLongPress(MotionEvent e) {

    }

    @Override
    public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
        boolean result = false;
        try {
            float diffY = e2.getY() - e1.getY();
            float diffX = e2.getX() - e1.getX();
            if (Math.abs(diffX) > Math.abs(diffY)) {
                if (Math.abs(diffX) > SWIPE_THRESHOLD && Math.abs(velocityX) > SWIPE_VELOCITY_THRESHOLD) {
                    if (diffX > 0) {
                        swipe(BubbleAnimateWrapper.sDirectionRight);
                    } else {
                        swipe(BubbleAnimateWrapper.sDirectionLeft);
                    }
                    result = true;
                }
            }
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        return result;
    }

    public JSONArray inViewBubbleList() {
        final int length = mPositionCache.size();
        JSONArray result = new JSONArray(mPositionCache.size());
        for (int i = 0; i < length; i++) {
            result.add(mPositionCache.get(i).getViewIndex());
        }
        return result;
    }

    public JSONArray outViewBubbleList() {
        JSONArray result = new JSONArray();
        for (BubbleAnimateWrapper wrapper : mWrapperList) {
            BubblePosition position = wrapper.getPosition();
            if (null == position || position.isNail) {
                result.add(wrapper.getViewIndex());
            }
        }

        return result;
    }

    public void replaceBubble(int position, int index) {
        if (isAnimating() || mIsDetached) {
            return;
        }
        if (position > mBubblePositions.size() || position < 0) {
            return;
        }


        if (index < 0 || index > mWrapperList.size()) {
            return;
        }

        BubbleAnimateWrapper animateWrapper = null;
        for (BubbleAnimateWrapper anim : mWrapperList) {
            if (anim.getViewIndex() == index) {
                animateWrapper = anim;
                break;
            }
        }

        BubblePosition bubblePos = mBubblePositions.get(position);
        if (null == animateWrapper || null == bubblePos || bubblePos.equals(animateWrapper.getPosition())) {
            return;
        }

        mIsBubbleReplacing = true;

        if (mHeadNailViews.indexOf(animateWrapper) != -1 && mTailNailViews.size() > 0) {
            mHeadNailViews.remove(animateWrapper);
            final int tailSize = mTailNailViews.size();
            int toPlaceIndex = tailSize - 1;
            for (int i = tailSize - 1; i >= 0; i--) {
                BubbleAnimateWrapper bubble = mTailNailViews.get(i);
                if (bubble.getPosition().row == animateWrapper.getPosition().row) {
                    toPlaceIndex = i;
                    break;
                }
            }
            if (-1 < toPlaceIndex) {
                BubbleAnimateWrapper wrapper = mTailNailViews.remove(toPlaceIndex);
                wrapper.setBubblePosition(animateWrapper.getPosition());
                wrapper.getCurrentView().setX(animateWrapper.getPosition().x);
                wrapper.getCurrentView().setY(animateWrapper.getPosition().y);
                addInOrder(mHeadNailViews, wrapper);
            }
        }

        if (mTailNailViews.indexOf(animateWrapper) != -1) {
            mTailNailViews.remove(animateWrapper);
        }


        for (BubbleAnimateWrapper wrapper : mPositionCache) {
            BubblePosition pos = wrapper.getPosition();
            if (null == pos || pos.isNail) {
                continue;
            }
            if (animateWrapper != wrapper && pos.row == bubblePos.row && pos.column >= bubblePos.column) {
                wrapper.move(BubbleAnimateWrapper.sDirectionRight);
                pos = wrapper.getPosition();
                if (null != pos && pos.column >= mColumnCount) {
                    addInOrder(mTailNailViews, wrapper);
                    mPositionCache.remove(wrapper);
                }
            } else {
                wrapper.gravityMove(bubblePos);
            }
        }
        animateWrapper.scaleBounce(bubblePos);
        if (!mPositionCache.contains(animateWrapper)) {
            addInOrder(mPositionCache, animateWrapper);
        }
    }


    @Override
    public void onStart(BubbleEventCenter.AnimationType type, BubbleAnimateWrapper
            bubbleAnimateWrapper) {
        AtomicInteger counter = mAnimationRecorder.get(type);
        if (null == counter) {
            counter = new AtomicInteger(0);
            mAnimationRecorder.put(type, counter);
        }
        if (counter.get() == 0) {
            for (IAnimationListener animationListener : mAnimationListeners) {
                animationListener.onAnimationStart(type);
            }
        }

        counter.incrementAndGet();
    }

    @Override
    public void onEnd(BubbleEventCenter.AnimationType type, BubbleAnimateWrapper
            bubbleAnimateWrapper) {
        AtomicInteger counter = mAnimationRecorder.get(type);
        if (null != counter) {
            if (0 == counter.decrementAndGet()) {
                for (IAnimationListener animationListener : mAnimationListeners) {
                    animationListener.onAnimationEnd(type);
                }
                mIsBubbleReplacing = false;
            }
        }
    }

    @Override
    public void onCancel(BubbleEventCenter.AnimationType type, BubbleAnimateWrapper
            bubbleAnimateWrapper) {

    }

    public void addAnimationCallback(IAnimationListener animationListener) {
        if (!mAnimationListeners.contains(animationListener)) {
            mAnimationListeners.add(animationListener);
        }
    }

    public void addBubbleClickCallback(IBubbleClickListener bubbleClicklistener) {
        if (!mBubbleClickListeners.contains(bubbleClicklistener)) {
            mBubbleClickListeners.add(bubbleClicklistener);
        }
    }


    public interface IAnimationListener {
        void onAnimationStart(BubbleEventCenter.AnimationType type);

        void onAnimationEnd(BubbleEventCenter.AnimationType type);
    }

    public interface IBubbleClickListener {
        void onClick(int id);
    }


    private static int addInOrder(final List<BubbleAnimateWrapper> list, final BubbleAnimateWrapper item) {
        if (list.contains(item)) {
            return -1;
        }
        int insertAt = 0;
        final int size = list.size();
        for (int i = 0; i < size; i++) {
            BubbleAnimateWrapper toCompare = list.get(i);
            if (item.getPosition().column == toCompare.getPosition().column && item.getPosition().row > toCompare.getPosition().row) {
                insertAt = i + 1;
                break;
            }
        }
        list.add(insertAt, item);
        return insertAt;
    }

    private class ScreenBroadcastReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            if (Intent.ACTION_SCREEN_ON.equals(intent.getAction())) {
                mScreenState = sScreenOn;
            } else if (Intent.ACTION_SCREEN_OFF.equals(action)) {
                mScreenState = sScreenLock;
            } else if (Intent.ACTION_USER_PRESENT.equals(action)) {
                mScreenState = sScreenOn;
            }
        }
    }
}



