package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.support.annotation.NonNull;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.TranslateAnimation;

import java.util.Random;

/**
 * @author ertong
 *         create at 2017/9/21
 */

public class BubbleAnimateWrapper implements SpringSet.ISpringSetListener, Comparable<BubbleAnimateWrapper> {
    private static final String TAG = BubbleAnimateWrapper.class.getSimpleName();

    static final int sDirectionLeft = 0x100;
    static final int sDirectionRight = 0x200;

    private static final float sMoveDamping = 600f;
//
//    private static final long[] sFloatDurationCandidates = {
//            1250, 1750, 2250
//    };


    private static final long[] sFloatDurationCandidates = {
            4000, 5000, 6000
    };

    private static final float[] sFloatDistanceCandidates = {
            5.0f, 6.0f, 7.0f
    };

    private Random mRandom = new Random();


    private int viewIndex;

    private View mView;
    private BubblePosition mPosition;

    private SpringSet.ISpringSetListener mMoveLeftEndListener, mMoveRightEndListener;

    private SpringSet.ISpringSetListener mEdgeLeftBounceListener, mEdgeRightBounceListener;

    private Animation mFloatingAnim;

    private SpringSet.ISpringSetListener mScaleListener;

    private boolean mIsPlaying = false;

    BubbleAnimateWrapper(@NonNull View view, int index) {
        this.mView = view;
        this.mView.setPivotX(0);

        mMoveLeftEndListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                if (null != mPosition && null != mPosition.mLeft) {
                    setBubblePosition(mPosition.mLeft);
                }
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
            }
        };

        mMoveRightEndListener = new SpringSet.ISpringSetListener() {

            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.MoveRight, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                if (null != mPosition && null != mPosition.mRight) {
                    setBubblePosition(mPosition.mRight);
                }
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.MoveRight, BubbleAnimateWrapper.this);
            }
        };

        mEdgeLeftBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.EdgeBounceLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.EdgeBounceLeft, BubbleAnimateWrapper.this);
            }
        };

        mEdgeRightBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.EdgeBounceRight, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.EdgeBounceRight, BubbleAnimateWrapper.this);
            }
        };



        mScaleListener = new SpringSet.ISpringSetListener() {

            @Override
            public void onSpringStart(SpringSet springSet) {
                mView.setPivotX(mView.getWidth() / 2);
                mView.setPivotY(mView.getHeight() / 2);
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.ReplaceScale, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                mView.setPivotX(0);
                mView.setPivotY(0);
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.ReplaceScale, BubbleAnimateWrapper.this);
            }
        };

        viewIndex = index;

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
        if (null != mPosition && null != mView) {
            if (mPosition.isNail) {
                mFloatingAnim.cancel();
            } else {
                if (!mFloatingAnim.hasStarted()) {
                    mView.startAnimation(mFloatingAnim);
                }
            }
        }
    }

    public View getCurrentView() {
        return this.mView;
    }

    public void move(int direction) {
        if (direction == sDirectionLeft) {
            if (null != mView) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.scaleLeftX * mView.getScaleX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.scaleLeftY * mView.getScaleY(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, -mPosition.disLeftX + mView.getTranslationX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, -mPosition.disLeftY + mView.getTranslationY(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                scaleX.setStartVelocity(Math.abs(mPosition.scaleLeftX * mView.getScaleX()) / 0.8f);
                scaleY.setStartVelocity(Math.abs(mPosition.scaleLeftY * mView.getScaleY()) / 0.8f);
                moveX.setStartVelocity(Math.abs(mPosition.disLeftX + mView.getTranslationX()) / 0.8f);
                moveY.setStartVelocity(Math.abs(mPosition.disLeftY + mView.getTranslationY()) / 0.8f);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                springSet.addSpringSetListener(mMoveLeftEndListener);
                springSet.addSpringSetListener(this);
                springSet.start();
            }
        } else if (direction == sDirectionRight) {
            if (null != mView) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.scaleRightX * mView.getScaleX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.scaleRightY * mView.getScaleY(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mPosition.disRightX + mView.getTranslationX(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, mPosition.disRightY + mView.getTranslationY(), sMoveDamping, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                scaleX.setStartVelocity(Math.abs(mPosition.scaleRightX * mView.getScaleX()) / 0.8f);
                scaleY.setStartVelocity(Math.abs(mPosition.scaleRightY * mView.getScaleY()) / 0.8f);
                moveX.setStartVelocity(Math.abs(mPosition.disRightX + mView.getTranslationX()) / 0.8f);
                moveY.setStartVelocity(Math.abs(mPosition.disRightY + mView.getTranslationY()) / 0.8f);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                springSet.addSpringSetListener(mMoveRightEndListener);
                springSet.addSpringSetListener(this);
                springSet.start();
            }
        }
    }

    void gravityMove(BubblePosition gravityHole) {
        if (null == gravityHole || null == mPosition || null == mView) {
            return;
        }

        final float k = 20.0f;
        final float l = this.mPosition.width;
        final float x1 = this.mPosition.x;
        final float y1 = this.mPosition.y;
        final float x2 = gravityHole.x;
        final float y2 = gravityHole.y;
        final float r = (float) Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        final float offsetX = k * l * l * (x2 - x1) / (r * r * r);
        final float offsetY = k * l * l * (y2 - y1) / (r * r * r);
        SpringSet gravityAnimation = new SpringSet();
        final float finalPosX = mView.getTranslationX();
        final float finalPosY = mView.getTranslationY();
        SpringAnimation springX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, finalPosX, SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        springX.setMaxValue(offsetX > 0 ? finalPosX + offsetX : finalPosX - offsetX);
        springX.setStartValue(offsetX > 0 ? finalPosX - offsetX : finalPosX + offsetX);
        SpringAnimation springY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, finalPosY, SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        springY.setMaxValue(offsetY > 0 ? finalPosY + offsetY : finalPosY - offsetY);
        springY.setStartValue(offsetY > 0 ? finalPosY - offsetY : finalPosY + offsetY);
        gravityAnimation.playTogether(springX, springY);
        gravityAnimation.addSpringSetListener(this);
//        gravityAnimation.start();
    }

    void scaleBounce(float destX, float destY) {
        SpringSet mBounceAnim = new SpringSet();
        final float scaleToX = destX * mView.getScaleX();
        final float scaleToY = destY * mView.getScaleY();
        SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, scaleToX, SpringForce.STIFFNESS_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleX.setMaxValue(scaleToX * 1.05f);
        scaleX.setStartValue(0);
        SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, scaleToY, SpringForce.STIFFNESS_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleX.setMaxValue(scaleToY * 1.05f);
        scaleX.setStartValue(0);
        mBounceAnim.playTogether(scaleX, scaleY);
        mBounceAnim.addSpringSetListener(mScaleListener);
        mBounceAnim.addSpringSetListener(this);
        mBounceAnim.start();
    }

    void edgeBounce(int direction) {
        if (direction == sDirectionLeft) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mView.getTranslationX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mView.getTranslationX() * 0.9f);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(this);
                mBounceAnim.addSpringSetListener(mEdgeLeftBounceListener);
                mBounceAnim.start();
            }
        } else if (direction == sDirectionRight) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mView.getTranslationX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mView.getTranslationX() * 0.9f);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(this);
                mBounceAnim.addSpringSetListener(mEdgeRightBounceListener);
                mBounceAnim.start();
            }
        }
    }

    @Override
    public void onSpringStart(SpringSet springSet) {
        mFloatingAnim.cancel();
        this.mIsPlaying = true;
    }

    @Override
    public void onSpringEnd(SpringSet springSet) {
        this.mIsPlaying = false;
        springSet.removeSpringSetListener(this);
    }

    public boolean isPlaying() {
        return mIsPlaying;
    }

    void startFloating() {

    }

    void stopFloating() {
    }

    @Override
    public int compareTo(@NonNull BubbleAnimateWrapper o) {
        if (null == o.mPosition) {
            return 1;
        } else if (null == mPosition) {
            return -1;
        }
        int positionCompare = mPosition.compareTo(o.getPosition());
        if (0 != positionCompare) {
            return positionCompare;
        } else {
            return (viewIndex < o.viewIndex) ? -1 : ((viewIndex == o.viewIndex) ? 0 : 1);
        }
    }

    @Override
    public String toString() {
        return "[" + viewIndex + "," + (null == mPosition ? "NaN, NaN]" : mPosition.row + "," + mPosition.column + "]");
    }
}
