package com.alibaba.weex.plugin.gcanvas.g2d;

import android.content.Context;
import android.text.TextUtils;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.alibaba.weex.plugin.gcanvas.WXGcanvasComponent;
import com.taobao.gcanvas.GCanvas;
import com.taobao.gcanvas.GCanvasView;
import com.taobao.weex.utils.WXUtils;

/**
 * @author ertong
 *         create at 2017/8/10
 */

public class G2DWXGCanvasDelegate implements WXGcanvasComponent.IWXGCanvasComponentDelegate {
    private WXGCanvasGLSurfaceView mSurfaceView;

    private final GCanvasState mState = new GCanvasState();

    private GCanvas mCanvas;

    WXCanvasComponentLifeListener mLifeListener = new WXCanvasComponentLifeListener();

    private WXGcanvasComponent mComponent;

    private ViewGroup mContainer;

    private String mTransparency = "opaque";

    public G2DWXGCanvasDelegate(WXGcanvasComponent mComponent) {
        this.mComponent = mComponent;
    }

    public WXGcanvasComponent getComponent() {
        return this.mComponent;
    }

    public void setTransparency(String transparency) {
        mTransparency = transparency;
    }

    @Override
    public boolean setProperty(String key, Object param) {
        switch (key) {
            case WXGcanvasComponent.PropName.Transparency:
                setTransparency(WXUtils.getString(param, "opaque"));
                return true;
        }
        return false;
    }

    @Override
    public void onActivityResume() {
        if (null != mSurfaceView) {
            mSurfaceView.onResume();
        }
    }

    @Override
    public void onActivityDestroy() {
        if (null != mSurfaceView) {
            mSurfaceView.setOnCanvasLifecycleListener(null);
        }
        if (null != this.mCanvas) {
            this.mCanvas.onDestroy();
        }

        if (null != mSurfaceView) {
            mSurfaceView.setWXLifecycleListener(null);
        }

        this.mCanvas = null;
        this.mSurfaceView = null;
        this.mLifeListener.mDelegateListener = null;
        this.mLifeListener = null;
        this.mContainer = null;
    }

    @Override
    public void onActivityPause() {
        if (null != mSurfaceView) {
            mSurfaceView.onPause();
        }
    }

    @Override
    public void initViewIntoContainer(ViewGroup container, Context context) {
        initGCanvas(context);

        String backgroundColor = mComponent.getDomObject().getStyles().getBackgroundColor();
        if (!TextUtils.isEmpty(backgroundColor)) {
            mCanvas.config.clearColor = backgroundColor;
        }

        mSurfaceView = new WXGCanvasGLSurfaceView(this, mCanvas, context);
        mSurfaceView.setWXLifecycleListener(mLifeListener);

        mContainer = container;
        container.addView(mSurfaceView, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));
    }

    public GCanvasView.GCanvasConfig getCanvasConfig() {
        return mCanvas == null ? null : mCanvas.config;
    }

    private void initGCanvas(Context context) {
        mCanvas = new GCanvas(mComponent.getRef());
        GCanvas.setDefaultViewMode(GCanvas.ViewMode.SINGLE_CANVAS_MODE);
        mCanvas.initialize(context);
        mCanvas.setViewMode(GCanvas.ViewMode.WEEX_MODE);
    }

    void setWXSurfaceViewLifeListener(WXGCanvasGLSurfaceView.WXCanvasLifecycleListener lifeListener) {
        if (null != mLifeListener) {
            mLifeListener.mDelegateListener = lifeListener;
        }
    }


    GCanvas getGCanvas() {
        return mCanvas;
    }

    void prepareGCanvasView() {
        if (null != mCanvas) {
            mCanvas.setCanvasView(mSurfaceView);
            if (mCanvas.enableCanvas()) {
                mSurfaceView.onResume();
            }
        }
    }


    static class GCanvasState {

        private int mDestroyCount, mReadyCount;

        private long mFirstReadyTime = 0;

        public GCanvasState() {
            this.mDestroyCount = 0;
            this.mReadyCount = 0;
        }

        public synchronized void clear() {
            this.mDestroyCount = 0;
            this.mReadyCount = 0;
            this.mFirstReadyTime = 0;
        }

        public synchronized void ready() {
            this.mReadyCount++;
            if (mFirstReadyTime == 0) {
                mFirstReadyTime = System.currentTimeMillis();
            }
        }

        public synchronized void destroy() {
            this.mDestroyCount++;
        }

        public synchronized boolean isReady() {
            return mReadyCount > 0 && mReadyCount > mDestroyCount && (System.currentTimeMillis() - mFirstReadyTime) > 80;
        }

        public synchronized boolean isDestroyed() {
            return mDestroyCount > 0 && mDestroyCount > mReadyCount;
        }
    }

    boolean isGCanvasViewPrepared() {
        // Log.i("CANVAS", "isGCanvasViewPrepared===>" + (null != mCanvas && mCanvas.getCanvasView() == mSurfaceView));
        return null != mCanvas && mCanvas.getCanvasView() == mSurfaceView;
    }

    public GCanvasState getCurrentState() {
        return mState;
    }

    class WXCanvasComponentLifeListener implements WXGCanvasGLSurfaceView.WXCanvasLifecycleListener {

        private WXGCanvasGLSurfaceView.WXCanvasLifecycleListener mDelegateListener;
        GCanvasView.GCanvasConfig config;
        int width = 0;
        int height = 0;


        @Override
        public void onGCanvasViewDestroy(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
            mState.destroy();
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewDestroy(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewCreated(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
            mState.ready();
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewCreated(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewReattached(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
            Context context = canvasView.getContext();

            if (null == mContainer) {
                return;
            }

            if (mSurfaceView != null) {
                width = mSurfaceView.getMeasuredWidth();
                height = mSurfaceView.getMeasuredHeight();
                mSurfaceView.setWXLifecycleListener(null);
                mContainer.removeView(mSurfaceView);
                mSurfaceView = null;
            }

            initGCanvas(context);
            mCanvas.config = config;
            mSurfaceView = new WXGCanvasGLSurfaceView(component, mCanvas, context);
            mContainer.addView(mSurfaceView, new FrameLayout.LayoutParams(width, height));
            mSurfaceView.setWXLifecycleListener(mLifeListener);
            prepareGCanvasView();

            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewReattached(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewAttachToWindow(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewAttachToWindow(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewDetachedFromWindow(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
            if (mState.mReadyCount > 0 && ((System.currentTimeMillis() - mState.mFirstReadyTime) > 80)) {
                mState.clear();
                if (null != mDelegateListener) {
                    mDelegateListener.onGCanvasViewDetachedFromWindow(component, canvasView);
                }
                if (mCanvas != null) {
                    config = mCanvas.config;
                    mCanvas.onDestroy();
                    mCanvas = null;
                }
            }
        }
    }
}
