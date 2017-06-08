package com.alibaba.weex.plugin.gcanvas;


import android.content.Context;
import android.text.TextUtils;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.alibaba.weex.plugin.annotation.WeexComponent;
import com.taobao.gcanvas.GCanvas;
import com.taobao.gcanvas.GCanvasView;
import com.taobao.gcanvas.GUtil;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.Component;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.ComponentCreator;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;

import java.lang.reflect.InvocationTargetException;

@WeexComponent(names = {"gcanvas"})
@Component(lazyload = false)
public class WXGcanvasComponent extends WXComponent<FrameLayout> {

    private WXGCanvasGLSurfaceView mSurfaceView;

    private final GCanvasState mState = new GCanvasState();

//    private GcanvasModule mModule;

    private FrameLayout mContainer;

    private GCanvasView.GCanvasConfig mConfig = new GCanvasView.GCanvasConfig();

    private GCanvas mCanvas;

    private boolean mIsDetached = false;

    public WXGCanvasGLSurfaceView.WXCanvasLifecycleListener mLifeListener = new WXGCanvasGLSurfaceView.WXCanvasLifecycleListener() {
        @Override
        public void onGCanvasViewAttachToWindow() {
            if (mIsDetached) {

                Context context = mContainer.getContext();

                int width = 0, height = 0;

                if (mSurfaceView != null) {
                    width = mSurfaceView.getMeasuredWidth();
                    height = mSurfaceView.getMeasuredHeight();
                    mSurfaceView.setWXLifecycleListener(null);
                    mContainer.removeView(mSurfaceView);
                    mSurfaceView = null;
                }

                mCanvas.onDestroy();
                mCanvas = null;
                initGCanvas(context);
                mSurfaceView = new WXGCanvasGLSurfaceView(context, mConfig);
                mContainer.addView(mSurfaceView, new FrameLayout.LayoutParams(width, height));
                mSurfaceView.setWXLifecycleListener(mLifeListener);
                prepareGCanvasView();
//                if (null != mModule && mModule.enableCache != null) {
//                    mModule.enable(mModule.enableCache, null);
//                }

                mIsDetached = false;
            }
        }

        @Override
        public void onGCanvasViewDetachedFromWindow() {
            mState.clear();
            mIsDetached = true;
        }

        @Override
        public void onGCanvasViewDestroy() {
            mState.destroy();
        }

        @Override
        public void onGCanvasViewCreated() {
            mState.ready();
        }
    };

    private void initGCanvas(Context context) {
        mCanvas = new GCanvas();
        GCanvas.setDefaultViewMode(GCanvas.ViewMode.SINGLE_CANVAS_MODE);
        mCanvas.initialize(context);
        mCanvas.setViewMode(GCanvas.ViewMode.WEEX_MODE);
    }


    public static class Creator implements ComponentCreator {
        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGcanvasComponent(instance, node, parent, lazy);
        }

        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGcanvasComponent(instance, node, parent);
        }
    }

    public GCanvasState getCurrentState() {
        return mState;
    }

    @Deprecated
    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId, boolean isLazy) {
        this(instance, dom, parent, isLazy);
    }

    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject node,
                              WXVContainer parent, boolean lazy) {
        super(instance, node, parent, lazy);
    }

    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject node,
                              WXVContainer parent) {
        super(instance, node, parent);
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

    boolean isGCanvasViewPrepared() {
        return null != mCanvas && mCanvas.getCanvasView() == mSurfaceView;
    }

    @Override
    protected FrameLayout initComponentHostView(Context context) {

        registerActivityStateListener();

        String backgroundColor = getDomObject().getStyles().getBackgroundColor();
        if (!TextUtils.isEmpty(backgroundColor)) {
            mConfig.clearColor = backgroundColor;
        } else {
            mConfig.clearColor = GUtil.clearColor;
        }

        mContainer = new FrameLayout(context);
        mSurfaceView = new WXGCanvasGLSurfaceView(context, mConfig);
        mSurfaceView.setWXLifecycleListener(mLifeListener);
        mContainer.addView(mSurfaceView,
                new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        initGCanvas(context);
        return mContainer;
    }


    @Override
    public void onActivityResume() {
        super.onActivityResume();
        if (null != mSurfaceView) {
            mSurfaceView.onResume();
        }
    }

    @Override
    public void onActivityPause() {
        super.onActivityPause();
        if (null != mSurfaceView) {
            mSurfaceView.onPause();
        }
    }

//    void setModule(GcanvasModule module) {
//        this.mModule = module;
//    }

    @Override
    public void onActivityDestroy() {
        super.onActivityDestroy();
        if (null != mSurfaceView) {
            mSurfaceView.setOnCanvasLifecycleListener(null);
        }
        if (null != this.mCanvas) {
            this.mCanvas.onDestroy();
        }

        this.mCanvas = null;
        this.mSurfaceView = null;
//        this.mModule = null;
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
}
