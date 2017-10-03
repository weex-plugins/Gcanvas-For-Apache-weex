package com.alibaba.weex.plugin.gcanvas.bubble;

/**
 * @author ertong
 *         create at 2017/9/29
 */

public class BubblePosition {
    private static final String TAG = BubbleAnimateWrapper.class.getSimpleName();
    float x, y, width, height;

    int row, column;

    static float sMaxWidth;
    static float sMaxHeight;

    boolean isNail;

    BubblePosition mLeft, mRight, mTop, mBottom;

    float disLeftX, disRightX, disLeftY, disRightY, disTopY, disBottomY;
    float scaleLeftX, scaleLeftY, scaleRightX, scaleRightY;

    public BubblePosition(float[] position) {
        if (position != null && position.length == 4) {
            this.x = position[0];
            this.y = position[1];
            this.width = position[2];
            this.height = position[3];
        }
    }

    void setRightSibling(BubblePosition nextSibling) {
        this.mRight = nextSibling;
        if (null != this.mRight) {
            this.disRightX = this.mRight.x - this.x;
            this.disRightY = this.mRight.y - this.y;
            this.scaleRightX = this.mRight.width / this.width;
            this.scaleRightY = this.mRight.height / this.height;
        }
    }

    void setLeftSibling(BubblePosition previousSibling) {
        this.mLeft = previousSibling;
        if (null != this.mLeft) {
            this.disLeftX = this.x - this.mLeft.x;
            this.disLeftY = this.y - this.mLeft.y;
            this.scaleLeftX = this.mLeft.width / this.width;
            this.scaleLeftY = this.mLeft.height / this.height;
        }
    }

    void setTopSibling(BubblePosition topSibling) {
        this.mTop = topSibling;
        if (null != this.mTop) {
            this.disTopY = this.mTop.y - this.y;
        }
    }

    void setBottomSibling(BubblePosition bottomSibling) {
        this.mBottom = bottomSibling;
        if (null != this.mBottom) {
            this.disBottomY = this.y - this.mBottom.y;
        }
    }

    @Override
    public String toString() {
        return '{' +
                "x=" + x +
                ", y=" + y +
                ", width=" + width +
                ", height=" + height +
                ", mLeft=" + (null != mLeft) +
                ", mRight=" + (null != mRight) +
                ", mTop=" + (null != mTop) +
                ", mBottom=" + (null != mBottom) +
                ", disLeftX=" + disLeftX +
                ", disRightX=" + disRightX +
                ", disLeftY=" + disLeftY +
                ", disRightY=" + disRightY +
                ", disTopY=" + disTopY +
                ", disBottomY=" + disBottomY +
                ", scaleLeftX=" + scaleLeftX +
                ", scaleLeftY=" + scaleLeftY +
                ", scaleRightX=" + scaleRightX +
                ", scaleRightY=" + scaleRightY +
                '}';
    }
}
