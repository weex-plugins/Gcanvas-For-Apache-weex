package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.annotation.NonNull;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.LinearInterpolator;
import android.view.animation.TranslateAnimation;

import com.taobao.weex.utils.WXViewUtils;

import java.util.Random;

import static android.support.animation.SpringForce.DAMPING_RATIO_LOW_BOUNCY;
import static android.support.animation.SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY;

/**
 * @author ertong
 *         create at 2017/9/21
 */

public class BubbleAnimateWrapper implements Comparable<BubbleAnimateWrapper> {
    private static final String TAG = BubbleAnimateWrapper.class.getSimpleName();

    static final int sDirectionLeft = 0x100;
    static final int sDirectionRight = 0x200;

    private static final float sMoveDamping = 80;

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

    private SpringSet.ISpringSetListener mScaleListener;

    private Animation mFloatingAnim;

    private SpringSet mLastMoveSpring;

    private SpringSet mLastBounce;

    private float mBounceValue = -1.0f;


    BubbleAnimateWrapper(@NonNull View view, int index) {
        this.mView = view;

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

    public void move(int direction, boolean notifyEvent) {
        if (null == mView || mPosition == null) {
            return;
        }
        if (null != mLastMoveSpring && mLastMoveSpring.isRunning()) {
            mLastMoveSpring.fastMove();
        }

        if (direction == sDirectionLeft) {
            if (null != mPosition.mLeft) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.mLeft.width / mView.getWidth(), sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.mLeft.height / mView.getHeight(), sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.X, mPosition.mLeft.x + (mPosition.mLeft.width - mView.getWidth()) / 2.0f, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.Y, mPosition.mLeft.y + (mPosition.mLeft.height - mView.getHeight()) / 2.0f, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                if (notifyEvent) {
                    springSet.addSpringSetListener(mMoveLeftEndListener);
                }
                springSet.start();
                if (null != mPosition && null != mPosition.mLeft) {
                    mPosition = mPosition.mLeft;
                }
                mLastMoveSpring = springSet;
            }
        } else if (direction == sDirectionRight) {
            if (null != mPosition.mRight) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.mRight.width / mView.getWidth(), sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.mRight.height / mView.getHeight(), sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.X, mPosition.mRight.x + (mPosition.mRight.width - mView.getWidth()) / 2.0f, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.Y, mPosition.mRight.y + (mPosition.mRight.height - mView.getHeight()) / 2.0f, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                if (notifyEvent) {
                    springSet.addSpringSetListener(mMoveRightEndListener);
                }
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

        final float k = WXViewUtils.getRealPxByWidth(16.0f, 750);
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
        SpringAnimation springXTo = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, translationX + offsetX, sMoveDamping, DAMPING_RATIO_LOW_BOUNCY);
        SpringAnimation springYTo = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, translationY + offsetY, sMoveDamping, DAMPING_RATIO_LOW_BOUNCY);
        gravityAnimation.playTogether(springXTo, springYTo);

        final SpringSet gravityBackAnim = new SpringSet();
        SpringAnimation springXBack = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, translationX, sMoveDamping * 1.5f, DAMPING_RATIO_MEDIUM_BOUNCY);
        SpringAnimation springYBack = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, translationY, sMoveDamping * 1.5f, DAMPING_RATIO_MEDIUM_BOUNCY);
        gravityBackAnim.playTogether(springXBack, springYBack);

        gravityAnimation.addSpringSetListener(new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                gravityBackAnim.start();
            }
        });
        gravityAnimation.start();
    }

    void scaleBounce(BubblePosition newPos) {
        if (null == newPos) {
            return;
        }
        float scaleX = mPosition != null ? newPos.width / mView.getWidth() : 1.0f;
        float scaleY = mPosition != null ? newPos.height / mView.getHeight() : 1.0f;
        SpringSet mBounceAnim = new SpringSet();
        final float scaleToX = scaleX;
        final float scaleToY = scaleY;
        mView.setX(newPos.x + (newPos.width - mView.getWidth()) / 2.0f);
        mView.setY(newPos.y + (newPos.height - mView.getHeight()) / 2.0f);
        mPosition = newPos;
        SpringAnimation scaleXAnim = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, scaleToX, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleXAnim.setStartValue(0);
        SpringAnimation scaleYAnim = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, scaleToY, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleYAnim.setStartValue(0);
        mBounceAnim.playTogether(scaleXAnim, scaleYAnim);
        mBounceAnim.addSpringSetListener(mScaleListener);
        mBounceAnim.start();
    }

    void edgeBounce(int direction) {
        boolean fastBounce = false;
        if (null != mLastBounce && mLastBounce.isRunning()) {
            mLastBounce.removeSpringSetListener(mEdgeLeftBounceListener);
            mLastBounce.fastMove();
            fastBounce = true;
        }

        if (!fastBounce) {
            mBounceValue = mView.getX();
        }
        if (direction == sDirectionLeft) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.X, mBounceValue, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mBounceValue - 100);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(mEdgeLeftBounceListener);
                mBounceAnim.start();
                mLastBounce = mBounceAnim;
            }
        } else if (direction == sDirectionRight) {
            if (null != mView) {
                SpringSet mBounceAnim = new SpringSet();
                SpringAnimation springAnimation = SpringUtils.createSpring(mView, DynamicAnimation.X, mBounceValue, sMoveDamping, DAMPING_RATIO_MEDIUM_BOUNCY);
                springAnimation.setStartValue(mBounceValue + 100);
                mBounceAnim.play(springAnimation);
                mBounceAnim.addSpringSetListener(mEdgeRightBounceListener);
                mBounceAnim.start();
                mLastBounce = mBounceAnim;
            }
        }
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
    }

    @Override
    public String toString() {
        return "[" + mViewIndex + "," + (null == mPosition ? "NaN, NaN]" : mPosition.row + "," + mPosition.column + "]");
    }
}
