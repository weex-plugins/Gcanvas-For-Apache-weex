package com.alibaba.weex.plugin.gcanvas;


import android.content.Context;
import android.graphics.Canvas;
import android.util.Log;
import android.view.MotionEvent;
import android.view.SurfaceHolder;

import com.taobao.gcanvas.GCanvas;
import com.taobao.gcanvas.GCanvasView;
import com.taobao.weex.ui.view.gesture.WXGesture;
import com.taobao.weex.ui.view.gesture.WXGestureObservable;


public class WXGCanvasGLSurfaceView extends GCanvasView implements WXGestureObservable {
    private WXGesture wxGesture;

    protected WXCanvasLifecycleListener mWXLifecycleListener;

    public WXGCanvasGLSurfaceView(GCanvas canvas, Context context) {
        super(canvas, context);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
    }

    @Override
    public void registerGestureListener(WXGesture wxGesture) {
        this.wxGesture = wxGesture;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        boolean result = super.onTouchEvent(event);
        if (wxGesture != null) {
            result |= wxGesture.onTouch(this, event);
        }
        return result;
    }

    public void setWXLifecycleListener(WXCanvasLifecycleListener listener) {
        this.mWXLifecycleListener = listener;
        setOnCanvasLifecycleListener(listener);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right,
                            int bottom) {
        super.onLayout(changed, left, top, right, bottom);
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        super.surfaceDestroyed(holder);
    }


    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        Log.i("CANVAS", "onAttachedToWindow======");
        if (null != mWXLifecycleListener) {
            mWXLifecycleListener.onGCanvasViewAttachToWindow();
        }
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        Log.i("CANVAS", "onDetachedFromWindow======");
        if (null != mWXLifecycleListener) {
            mWXLifecycleListener.onGCanvasViewDetachedFromWindow();
        }
    }

    @Override
    public void onResume() {
        super.onResume();
        Log.i("CANVAS", "onResume======");
    }

    @Override
    public void onPause() {
        super.onPause();
        Log.i("CANVAS", "onPause======");
    }

    public interface WXCanvasLifecycleListener extends GCanvasView.CanvasLifecycleListener {
        void onGCanvasViewAttachToWindow();

        void onGCanvasViewDetachedFromWindow();
    }
}

