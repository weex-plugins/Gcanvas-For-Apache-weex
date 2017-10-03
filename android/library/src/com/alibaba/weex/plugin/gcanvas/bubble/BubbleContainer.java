package com.alibaba.weex.plugin.gcanvas.bubble;

import android.content.Context;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.util.AttributeSet;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;

import com.taobao.weex.bridge.JSCallback;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author ertong
 *         create at 2017/9/21
 */


public class BubbleContainer extends ViewGroup implements GestureDetector.OnGestureListener, BubbleEventCenter.IBubbleAnimationListener {

    private static final String TAG = BubbleContainer.class.getSimpleName();

    private int mRowCount, mColumnCount;

    private boolean mIsAnimationShow = false;

    private ArrayList<BubblePosition> mBubblePositions = new ArrayList<>();

    private ArrayList<BubblePosition> mHeadNails = new ArrayList<>();

    private ArrayList<BubblePosition> mTailNails = new ArrayList<>();

    private ArrayList<BubbleAnimateWrapper> mWrapperList = new ArrayList<>();

    private HashMap<BubbleEventCenter.AnimationType, AtomicInteger> mAnimationRecorder = new HashMap<>();

    private int mCurrentLayoutColumn = 0;

    private final GestureDetector mGestureDetector = new GestureDetector(getContext(), this);

    private ArrayList<IAnimationListener> mAnimationListeners = new ArrayList<>();

    private ArrayList<IBubbleClickListener> mBubbleClickListeners = new ArrayList<>();

    private static final int SWIPE_THRESHOLD = 100;
    private static final int SWIPE_VELOCITY_THRESHOLD = 100;

    public BubbleContainer(Context context) {
        super(context);
    }

    public BubbleContainer(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public BubbleContainer(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    public BubbleContainer(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    @Override
    public void addView(View child, int index, LayoutParams params) {
        int wrapperIndex = index;
        if (wrapperIndex < 0 || wrapperIndex > mWrapperList.size()) {
            wrapperIndex = mWrapperList.size();
            mWrapperList.add(wrapperIndex, new BubbleAnimateWrapper(child));
            child.setId(wrapperIndex);
            child.setOnTouchListener(new OnTouchListener() {
                @Override
                public boolean onTouch(View view, MotionEvent motionEvent) {
                    for (IBubbleClickListener listener : mBubbleClickListeners) {
                        listener.onClick(view.getId());
                    }
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
        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();
        if (end > childCount) {
            end = childCount;
        }
        //onMeasure和onLayout有可能在addsubview之前调用，因此需要做保护
        int count = 0;
        final int headNailSize = mHeadNails.size();
        for (; count < start; count++) {
            BubblePosition position = mHeadNails.get(count % headNailSize);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
            }
        }

        final int bubbleLength = mBubblePositions.size();
        for (int i = 0; i < bubbleLength; i++, count++) {
            BubblePosition position = mBubblePositions.get(i);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
            }
        }

        final int tailNailSize = mTailNails.size();
        for (int i = end; i < childCount; i++, count++) {
            BubblePosition position = mTailNails.get((i - end) % tailNailSize);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.measure(MeasureSpec.makeMeasureSpec((int) position.width, MeasureSpec.EXACTLY), MeasureSpec.makeMeasureSpec((int) position.height, MeasureSpec.EXACTLY));
            }
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
                bp.disLeftX = 0;
                bp.disLeftY = 0;
                bp.scaleLeftX = 1.0f;
                bp.scaleLeftY = 1.0f;
                bp.isNail = true;
                this.mHeadNails.add(bp);
            }
        }
        calculateNailInfo();
    }

    public void setTailNails(float[][] nailInfo) {
        if (null == nailInfo) {
            return;
        }
        this.mTailNails.clear();
        for (float[] position : nailInfo) {
            if (position.length == 4) {
                BubblePosition bp = new BubblePosition(position);
                bp.disRightX = 0;
                bp.disRightY = 0;
                bp.scaleRightY = 1.0f;
                bp.scaleRightX = 1.0f;
                bp.isNail = true;
                this.mTailNails.add(bp);
            }
        }
        calculateNailInfo();
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();
        if (end > childCount) {
            end = childCount;
        }

//        final int headNailSize = mHeadNails.size();
//        if (start >= headNailSize) {
//            int nailHeadStart = start - headNailSize;
//            for (int i = 0; i < headNailSize; i++) {
//                BubblePosition position = mHeadNails.get(i % headNailSize);
//                View child = getChildAt(nailHeadStart + i);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//        }
//
//        final int bubbleLength = mBubblePositions.size();
//        for (int i = 0; i < bubbleLength; i++) {
//            if (start + i > 0 && start + i < end) {
//                BubblePosition position = mBubblePositions.get(i);
//                View child = getChildAt(start + i);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//        }
//
//        final int tailNailSize = mTailNails.size();
//        if (end + tailNailSize <= childCount) {
//            for (int i = 0; i < tailNailSize; i++) {
//                BubblePosition position = mTailNails.get(i % tailNailSize);
//                View child = getChildAt(end + i);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//        }

        int count = 0;
        final int headNailSize = mHeadNails.size();
        for (; count < start; count++) {
            BubblePosition position = mHeadNails.get(count % headNailSize);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            }
        }

        final int bubbleLength = mBubblePositions.size();
        for (int i = 0; i < bubbleLength; i++) {
            BubblePosition position = mBubblePositions.get(i);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            }
            count++;
        }

        final int tailNailSize = mTailNails.size();
        for (int i = end; i < childCount; i++, count++) {
            BubblePosition position = mTailNails.get((i - end) % tailNailSize);
            View child = getChildAt(count);
            if (mWrapperList.size() > count) {
                mWrapperList.get(count).setBubblePosition(position);
            }
            if (child != null) {
                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
            }
        }

//        final int childCount = getChildCount();
//        final int bubbleSize = mBubblePositions.size();
//        if (childCount > bubbleSize) {
//            for (int i = 0; i < bubbleSize; i++) {
//                BubblePosition position = mBubblePositions.get(i);
//                View child = getChildAt(i);
//                mWrapperList.get(i).setBubblePosition(position);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//
//            final int tailNailSize = mTailNails.size();
//            for (int i = bubbleSize; i < childCount; i++) {
//                BubblePosition position = mTailNails.get(i % tailNailSize);
//                View child = getChildAt(i);
//                mWrapperList.get(i).setBubblePosition(position);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//        } else {
//            for (int i = 0; i < childCount; i++) {
//                BubblePosition position = mBubblePositions.get(i);
//                View child = getChildAt(i);
//                mWrapperList.get(i).setBubblePosition(position);
//                child.layout((int) position.x, (int) position.y, (int) (position.x + position.width), (int) (position.y + position.height));
//            }
//        }
    }


    public void setRows(int rows) {
        this.mRowCount = rows;
        this.calculateBubbleInfo();
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
        calculateBubbleInfo();
        requestLayout();
    }

    private void destroy() {

    }

    @Override
    protected void onWindowVisibilityChanged(int visibility) {
        super.onWindowVisibilityChanged(visibility);
        if (visibility == View.VISIBLE && !mIsAnimationShow) {

        }
    }

    public void swipe(int direction) {
        Log.d(TAG, "swipe direction ===> " + direction);
        int start = mCurrentLayoutColumn * mRowCount;
        int end = start + mBubblePositions.size();
        final int childCount = getChildCount();
        if (end > childCount) {
            end = childCount;
        }


        Log.d(TAG, "swipe start = " + start + ", end = " + end + ", child = " + childCount + ", current = " + mCurrentLayoutColumn);
        if (direction == BubbleAnimateWrapper.sDirectionLeft) {
            if (end == childCount) {
                for (int i = start; i < end; i++) {
                    Log.d(TAG, "bounce left, i = " + i);
                    mWrapperList.get(i).edgeBounce(direction);
                }
                return;
            }
            mCurrentLayoutColumn++;
        } else if (direction == BubbleAnimateWrapper.sDirectionRight) {
            if (mCurrentLayoutColumn < 0) {
                for (int i = 0; i < end; i++) {
                    Log.d(TAG, "bounce right, i = " + i);
                    mWrapperList.get(i).edgeBounce(direction);
                }
                return;
            }
            mCurrentLayoutColumn--;
        }

        final int headNailSize = mHeadNails.size();
        int nailStart = start - headNailSize;
        if (nailStart >= 0) {
            for (int i = nailStart; i < start; i++) {
                mWrapperList.get(i).move(direction);
                Log.d(TAG, "move head, i = " + i);
            }
        }

        for (int i = start; i < end; i++) {
            if (i >= 0) {
                mWrapperList.get(i).move(direction);
            }
            Log.d(TAG, "move bubble, i = " + i);
        }

        int count = 0;
        for (int i = end; i < childCount && count < mTailNails.size(); i++, count++) {
            mWrapperList.get(i).move(direction);
            Log.d(TAG, "move tail, i = " + i);
        }

        Log.d(TAG, "swipe end, current = " + mCurrentLayoutColumn);
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        return mGestureDetector.onTouchEvent(event);
    }


    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        BubbleEventCenter.getEventCenter().addBubbleAnimListener(this);
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        BubbleEventCenter.getEventCenter().removeBubbleAnimListener(this);
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
        replaceBubble(3, 5);
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

    public void replaceBubble(int position, int index) {
        if (position > mBubblePositions.size() || position < 0) {
            return;
        }

        if (index < 0 || index > mWrapperList.size()) {
            return;
        }

        BubbleAnimateWrapper animateWrapper = mWrapperList.get(index);
        BubblePosition bubblePos = mBubblePositions.get(position);
//        if (null == bubblePos || bubblePos.equals(animateWrapper.getPosition())) {
//            return;
//        }
        animateWrapper.setBubblePosition(bubblePos);
        animateWrapper.getCurrentView().setX(bubblePos.x);
        animateWrapper.getCurrentView().setY(bubblePos.y);

        final int wrapperSize = mWrapperList.size();
        for (int i = 0; i < wrapperSize; i++) {
            BubbleAnimateWrapper anim = mWrapperList.get(i);
            BubblePosition pos = anim.getPosition();
            if (null == pos || pos.isNail) {
                continue;
            }
            if (animateWrapper != anim && pos.row == bubblePos.row && pos.column >= bubblePos.column) {
                Log.d(TAG, "replace bubble, move right ====> i = " + i + ", position = " + pos);
                anim.move(BubbleAnimateWrapper.sDirectionRight);
            } else {
                anim.gravityMove(bubblePos);
            }
        }
        animateWrapper.scaleBounce();
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
            }
        }
    }

    @Override
    public void onCancel(BubbleEventCenter.AnimationType type, BubbleAnimateWrapper
            bubbleAnimateWrapper) {

    }


    public void addAnimationCallback(IAnimationListener animationListener) {
        mAnimationListeners.add(animationListener);
    }

    public void addBubbleClickCallback(IBubbleClickListener bubbleClicklistener) {
        mBubbleClickListeners.add(bubbleClicklistener);
    }


    public interface IAnimationListener {
        void onAnimationStart(BubbleEventCenter.AnimationType type);

        void onAnimationEnd(BubbleEventCenter.AnimationType type);
    }

    public interface IBubbleClickListener {
        void onClick(int id);
    }

}



