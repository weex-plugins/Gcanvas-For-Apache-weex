package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.annotation.NonNull;

/**
 * @author ertong
 *         create at 2017/9/29
 */

public class BubblePosition implements Comparable<BubblePosition> {
    private static final String TAG = BubblePosition.class.getSimpleName();
    float x, y, width, height;

    int row, column;

    static float sMaxWidth;
    static float sMaxHeight;

    boolean isNail;

    BubblePosition mLeft, mRight, mTop, mBottom;

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
//        if (null != this.mRight) {
//            this.disRightX = this.mRight.x - this.x;
//            this.disRightY = this.mRight.y - this.y;
//            this.scaleRightX = this.mRight.width / this.width;
//            this.scaleRightY = this.mRight.height / this.height;
//        }
    }

    BubblePosition getLeftSibling() {
        return mLeft;
    }

    BubblePosition getRightSibling() {
        return mRight;
    }

    void setLeftSibling(BubblePosition previousSibling) {
        this.mLeft = previousSibling;
//        if (null != this.mLeft) {
//            this.disLeftX = this.x - this.mLeft.x;
//            this.disLeftY = this.y - this.mLeft.y;
//            this.scaleLeftX = this.mLeft.width / this.width;
//            this.scaleLeftY = this.mLeft.height / this.height;
//        }
    }

    void setTopSibling(BubblePosition topSibling) {
        this.mTop = topSibling;
//        if (null != this.mTop) {
//            this.disTopY = this.mTop.y - this.y;
//        }
    }

    void setBottomSibling(BubblePosition bottomSibling) {
        this.mBottom = bottomSibling;
//        if (null != this.mBottom) {
//            this.disBottomY = this.y - this.mBottom.y;
//        }
    }

    @Override
    public String toString() {
        return '{' +
                "[" + row +
                "," + column + "]" +
                "x=" + x +
                ", y=" + y +
                ", width=" + width +
                ", height=" + height +
                ", mLeft=" + (null != mLeft) +
                ", mRight=" + (null != mRight) +
                ", mTop=" + (null != mTop) +
                ", mBottom=" + (null != mBottom) +
                '}';
    }

    @Override
    public int compareTo(@NonNull BubblePosition o) {
        int rowDiff = row - o.row;
        int columnDiff = column - o.column;
        if (columnDiff > 0) {
            return 1;
        } else if (columnDiff < 0) {
            return -1;
        } else {
            if (rowDiff > 0) {
                return 1;
            } else if (rowDiff < 0) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}
