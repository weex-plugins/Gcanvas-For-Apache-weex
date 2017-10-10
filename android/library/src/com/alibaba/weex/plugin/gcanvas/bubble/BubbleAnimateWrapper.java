package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.support.annotation.NonNull;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.TranslateAnimation;

import com.taobao.weex.utils.WXViewUtils;

import java.util.Random;

/**
 * @author ertong
 *         create at 2017/9/21
 */

public class BubbleAnimateWrapper implements SpringSet.ISpringSetListener, Comparable<BubbleAnimateWrapper> {
    private static final String TAG = BubbleAnimateWrapper.class.getSimpleName();

    static final int sDirectionLeft = 0x100;
    static final int sDirectionRight = 0x200;

    private static final float sMoveDamping = 250;

    private static final long[] sFloatDurationCandidates = {
            2000, 2500, 3000
    };

    private static final float[] sFloatDistanceCandidates = {
            5.0f, 6.0f, 7.0f
    };

    private Random mRandom = new Random();


    private int mViewIndex;

    private View mView;
    private BubblePosition mPosition;

    private SpringSet.ISpringSetListener mMoveLeftEndListener, mMoveRightEndListener;

    private SpringSet.ISpringSetListener mEdgeLeftBounceListener, mEdgeRightBounceListener;

    private Animation mFloatingAnim;

    private SpringSet.ISpringSetListener mScaleListener;

    private boolean mIsPlaying = false;

    private SpringSet mLastMoveSpring;

    BubbleAnimateWrapper(@NonNull View view, int index) {
        this.mView = view;
        this.mView.setPivotX(0);

        mMoveLeftEndListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireAnimationStart(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                BubbleEventCenter.getEventCenter().fireAnimationEnd(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
            }
        };

        mMoveRightEndListener = new SpringSet.ISpringSetListener() {

            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireAnimationStart(BubbleEventCenter.AnimationType.MoveRight, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                BubbleEventCenter.getEventCenter().fireAnimationEnd(BubbleEventCenter.AnimationType.MoveRight, BubbleAnimateWrapper.this);
            }
        };

        mScaleListener = new SpringSet.ISpringSetListener() {

            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireAnimationStart(BubbleEventCenter.AnimationType.ReplaceScale, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                BubbleEventCenter.getEventCenter().fireAnimationEnd(BubbleEventCenter.AnimationType.ReplaceScale, BubbleAnimateWrapper.this);
            }
        };

        mEdgeLeftBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireAnimationStart(BubbleEventCenter.AnimationType.EdgeBounceLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                BubbleEventCenter.getEventCenter().fireAnimationEnd(BubbleEventCenter.AnimationType.EdgeBounceLeft, BubbleAnimateWrapper.this);
            }
        };

        mEdgeRightBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireAnimationStart(BubbleEventCenter.AnimationType.EdgeBounceRight, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                BubbleEventCenter.getEventCenter().fireAnimationEnd(BubbleEventCenter.AnimationType.EdgeBounceRight, BubbleAnimateWrapper.this);
            }
        };

        mViewIndex = index;

        mFloatingAnim = new TranslateAnimation(0, 0, mView.getTranslationY(), sFloatDistanceCandidates[mRandom.nextInt(sFloatDistanceCandidates.length)] * mView.getContext().getResources().getDisplayMetrics().density);
        mFloatingAnim.setDuration(sFloatDurationCandidates[mRandom.nextInt(sFloatDurationCandidates.length)]);
        mFloatingAnim.setInterpolator(new LinearInterpolator());
        mFloatingAnim.setRepeatMode(Animation.REVERSE);
        mFloatingAnim.setRepeatCount(Animation.INFINITE);
    }

    BubblePosition getPosition() {
        return mPosition;
    }

    void setBubblePosition(BubblePosition position) {
        this.mPosition = position;
    }

    public View getCurrentView() {
        return this.mView;
    }

    public void move(int direction) {
        if (null != mLastMoveSpring && mLastMoveSpring.isRunning()) {
            mLastMoveSpring.fastMove();
        }

        if (null == mView || mPosition == null) {
            return;
        }

        if (direction == sDirectionLeft) {
            if (null != mPosition.mLeft) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.mLeft.width / mView.getWidth(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.mLeft.height / mView.getHeight(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.X, mPosition.mLeft.x, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.Y, mPosition.mLeft.y, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                springSet.addSpringSetListener(this);
                springSet.addSpringSetListener(mMoveLeftEndListener);
                springSet.start();
                if (null != mPosition && null != mPosition.mLeft) {
                    mPosition = mPosition.mLeft;
                }
                mLastMoveSpring = springSet;
            }
        } else if (direction == sDirectionRight) {
            if (null != mPosition.mRight) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.mRight.width / mView.getWidth(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.mRight.height / mView.getHeight(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.X, mPosition.mRight.x, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.Y, mPosition.mRight.y, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                springSet.addSpringSetListener(this);
                springSet.addSpringSetListener(mMoveRightEndListener);
                springSet.start();
                if (null != mPosition && null != mPosition.mRight) {
                    mPosition = mPosition.mRight;
                }
                mLastMoveSpring = springSet;
            }
        }
    }

    int getViewIndex() {
        return mViewIndex;
    }

    void gravityMove(BubblePosition gravityHole) {
        if (null == gravityHole || null == mPosition || null == mView) {
            return;
        }

        final float k = WXViewUtils.getRealPxByWidth(20.0f, 750);
        final float l = this.mPosition.width;
        final float x1 = this.mPosition.x;
        final float y1 = this.mPosition.y;
        final float x2 = gravityHole.x;
        final float y2 = gravityHole.y;
        final float r = (float) Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        final float offsetX = k * l * l * (x2 - x1) / (r * r * r);
        final float offsetY = k * l * l * (y2 - y1) / (r * r * r);
        SpringSet gravityAnimation = new SpringSet();
        final float translationX = mView.getTranslationX();
        final float translationY = mView.getTranslationY();
        SpringAnimation springX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, translationX, 200f, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        SpringAnimation springY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, translationY, 200f, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        springX.setStartValue(translationX + offsetX);
        springY.setStartValue(translationY + offsetY);
        gravityAnimation.playTogether(springX, springY);
        gravityAnimation.addSpringSetListener(this);
        gravityAnimation.start();
    }

    void scaleBounce(BubblePosition newPos) {
        if (null == newPos) {
            return;
        }
        float scaleX = mPosition != null ? newPos.width / mView.getWidth() : 1.0f;
        float scaleY = mPosition != null ? newPos.height / mView.getHeight() : 1.0f;
        SpringSet mBounceAnim = new SpringSet();
//        final float scaleToX = scaleX * mView.getScaleX();
//        final float scaleToY = scaleY * mView.getScaleY();
        final float scaleToX = scaleX;
        final float scaleToY = scaleY;
        mView.setX(newPos.x);
        mView.setY(newPos.y);
        mPosition = newPos;
        SpringAnimation scaleXAnim = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, scaleToX, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleXAnim.setStartValue(0);
        SpringAnimation scaleYAnim = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, scaleToY, sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleYAnim.setStartValue(0);
        mBounceAnim.playTogether(scaleXAnim, scaleYAnim);
        mBounceAnim.addSpringSetListener(mScaleListener);
        mBounceAnim.start();
    }

    void edgeBounce(int direction) {
        if (direction == sDirectionLeft) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mView.getTranslationX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mView.getTranslationX() - 100);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(this);
                mBounceAnim.addSpringSetListener(mEdgeLeftBounceListener);
                mBounceAnim.start();
            }
        } else if (direction == sDirectionRight) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mView.getTranslationX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mView.getTranslationX() + 100);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(this);
                mBounceAnim.addSpringSetListener(mEdgeRightBounceListener);
                mBounceAnim.start();
            }
        }
    }

    @Override
    public void onSpringStart(SpringSet springSet) {
        this.mIsPlaying = true;
        enableFloating(false);
    }

    @Override
    public void onSpringEnd(SpringSet springSet) {
        this.mIsPlaying = false;
        springSet.removeSpringSetListener(this);
        if (!mPosition.isNail) {
            enableFloating(true);
        }
    }

    public boolean isPlaying() {
        return mIsPlaying;
    }

    void enableFloating(boolean enable) {
        if (null == mPosition || null == mView) {
            return;
        }
        if (enable) {
            mFloatingAnim.reset();
            mView.startAnimation(mFloatingAnim);
        } else {
            mFloatingAnim.cancel();
        }
    }

    @Override
    public int compareTo(@NonNull BubbleAnimateWrapper o) {
        if (null == o.mPosition) {
            return 1;
        } else if (null == mPosition) {
            return -1;
        }
        return mPosition.compareTo(o.getPosition());
//        if (0 != positionCompare) {
//            return positionCompare;
//        } else {
//            return (mViewIndex < o.mViewIndex) ? -1 : ((mViewIndex == o.mViewIndex) ? 0 : 1);
//        }
    }

    @Override
    public String toString() {
        return "[" + mViewIndex + "," + (null == mPosition ? "NaN, NaN]" : mPosition.row + "," + mPosition.column + "]");
    }
}
