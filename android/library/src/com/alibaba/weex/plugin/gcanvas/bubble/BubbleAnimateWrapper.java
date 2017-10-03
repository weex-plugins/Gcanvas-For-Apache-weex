package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.util.Log;
import android.view.View;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;

/**
 * @author ertong
 *         create at 2017/9/21
 */

public class BubbleAnimateWrapper implements SpringSet.ISpringSetListener {
    private static final String TAG = BubbleAnimateWrapper.class.getSimpleName();

    static final int sDirectionLeft = 0x100;
    static final int sDirectionRight = 0x200;


    private View mView;
    private BubblePosition mPosition;

    private SpringSet.ISpringSetListener mMoveLeftEndListener, mMoveRightEndListener;

    private Animation mFloatingAnim;

    private SpringSet.ISpringSetListener mScaleListener;

    private SpringSet.ISpringSetListener mEdgeLeftBounceListener, mEdgeRightBounceListener;

    private boolean mIsPlaying = false;

    public BubbleAnimateWrapper(View view) {
        this.mView = view;
        this.mView.setPivotX(0);

        mMoveLeftEndListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.MoveLeft, BubbleAnimateWrapper.this);
                springSet.removeSpringSetListener(this);
                if (null != mPosition && null != mPosition.mLeft) {
                    setBubblePosition(mPosition.mLeft);
                }
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
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.MoveRight, BubbleAnimateWrapper.this);
                if (null != mPosition && null != mPosition.mRight) {
                    setBubblePosition(mPosition.mRight);
                }
            }
        };

        mScaleListener = new SpringSet.ISpringSetListener() {

            @Override
            public void onSpringStart(SpringSet springSet) {
                mView.setPivotX(mView.getWidth() / 2);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                springSet.removeSpringSetListener(this);
                mView.setPivotX(0);
            }
        };

        mEdgeLeftBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.BounceLeft, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.BounceLeft, BubbleAnimateWrapper.this);
            }
        };

        mEdgeRightBounceListener = new SpringSet.ISpringSetListener() {
            @Override
            public void onSpringStart(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveStart(BubbleEventCenter.AnimationType.BounceRight, BubbleAnimateWrapper.this);
            }

            @Override
            public void onSpringEnd(SpringSet springSet) {
                BubbleEventCenter.getEventCenter().fireOnMoveEnd(BubbleEventCenter.AnimationType.BounceRight, BubbleAnimateWrapper.this);
            }
        };

        mFloatingAnim = new TranslateAnimation(0, 0, 0, 6);
        mFloatingAnim.setDuration(1000);
        mFloatingAnim.setInterpolator(new AccelerateDecelerateInterpolator());
        mFloatingAnim.setRepeatMode(Animation.REVERSE);
        mFloatingAnim.setRepeatCount(Animation.INFINITE);
    }

    BubblePosition getPosition() {
        return mPosition;
    }

    void setBubblePosition(BubblePosition position) {
        this.mPosition = position;
        if (null != mPosition && null != mView) {
            if (mPosition.isNail && mFloatingAnim.hasStarted()) {
                mFloatingAnim.cancel();
                mFloatingAnim.reset();
            } else if (!mFloatingAnim.hasStarted()) {
                mView.post(new Runnable() {
                    @Override
                    public void run() {
                        if (null != mView) {
                            mView.startAnimation(mFloatingAnim);
                        }
                    }
                });
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
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.scaleLeftX * mView.getScaleX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.scaleLeftY * mView.getScaleY(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, -mPosition.disLeftX + mView.getTranslationX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, -mPosition.disLeftY + mView.getTranslationY(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                springSet.playTogether(scaleX, scaleY, moveX, moveY);
                springSet.addSpringSetListener(mMoveLeftEndListener);
                springSet.addSpringSetListener(this);
                springSet.start();
            }
        } else if (direction == sDirectionRight) {
            if (null != mView) {
                SpringSet springSet = new SpringSet();
                SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, mPosition.scaleRightX * mView.getScaleX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, mPosition.scaleRightY * mView.getScaleY(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveX = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_X, mPosition.disRightX + mView.getTranslationX(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
                SpringAnimation moveY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, mPosition.disRightY + mView.getTranslationY(), SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
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
        Log.d(TAG, "final postion = [" + finalPosX + "," + finalPosY + "], offset x = " + offsetX + ", offset y = " + offsetY);
        SpringAnimation springY = SpringUtils.createSpring(mView, DynamicAnimation.TRANSLATION_Y, finalPosY, SpringForce.STIFFNESS_VERY_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        springY.setMaxValue(offsetY > 0 ? finalPosY + offsetY : finalPosY - offsetY);
        springY.setStartValue(offsetY > 0 ? finalPosY - offsetY : finalPosY + offsetY);
        gravityAnimation.playTogether(springX, springY);
        gravityAnimation.addSpringSetListener(this);
//        gravityAnimation.start();
    }

    void scaleBounce() {
        SpringSet mBounceAnim = new SpringSet();
        SpringAnimation scaleX = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_X, 1.0f, SpringForce.STIFFNESS_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleX.setMaxValue(1.05f);
        scaleX.setStartValue(0);
        SpringAnimation scaleY = SpringUtils.createSpring(mView, DynamicAnimation.SCALE_Y, 1.0f, SpringForce.STIFFNESS_LOW, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        scaleX.setMaxValue(1.05f);
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
}
