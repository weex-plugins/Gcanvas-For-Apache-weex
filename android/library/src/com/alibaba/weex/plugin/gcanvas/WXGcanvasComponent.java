package com.alibaba.weex.plugin.gcanvas;


import android.content.Context;
import android.text.TextUtils;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.alibaba.weex.plugin.annotation.WeexComponent;
import com.taobao.gcanvas.GCanvas;
import com.taobao.gcanvas.GCanvasView;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.Component;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.ComponentCreator;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXUtils;

import java.lang.reflect.InvocationTargetException;

@WeexComponent(names = {"gcanvas"})
@Component(lazyload = false)
public class WXGcanvasComponent extends WXComponent<FrameLayout> {

    private WXGCanvasGLSurfaceView mSurfaceView;

    private final GCanvasState mState = new GCanvasState();

    private FrameLayout mContainer;

    private GCanvas mCanvas;

    private boolean mIsDetached = false;

    WXCanvasComponentLifeListener mLifeListener = new WXCanvasComponentLifeListener();

    private JSCallback detachCallback;

    private String mContextType = "2d";

    private String mTransparency = "opaque";

    public static class PropName {
        public static final String ContextType = "context-type";
        public static final String Transparency = "Transparency";
    }

    public GCanvasView.GCanvasConfig getCanvasConfig() {
        return mCanvas == null ? null : mCanvas.config;
    }

    private void initGCanvas(Context context) {
        mCanvas = new GCanvas(getRef());
        GCanvas.setDefaultViewMode(GCanvas.ViewMode.SINGLE_CANVAS_MODE);
        mCanvas.initialize(context);
        mCanvas.setViewMode(GCanvas.ViewMode.WEEX_MODE);
    }

    void setWXSurfaceViewLifeListener(WXGCanvasGLSurfaceView.WXCanvasLifecycleListener lifeListener) {
        if (null != mLifeListener) {
            mLifeListener.mDelegateListener = lifeListener;
        }
    }

    @WXComponentProp(name = PropName.ContextType)
    public void setContextType(String type) {
        mContextType = type;
    }

    @WXComponentProp(name = PropName.Transparency)
    public void setTransparency(String transparency){
        mTransparency = transparency;
    }


    @Override
    protected boolean setProperty(String key, Object param) {
        switch (key) {
            case PropName.ContextType:
                setContextType(WXUtils.getString(param, "2d"));
                return true;

            case PropName.Transparency:
                setTransparency(WXUtils.getString(param, "opaque"));
                return true;
        }
        return super.setProperty(key, param);
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

    void setReattachJSCallback(JSCallback callback) {
        this.detachCallback = callback;
    }

    boolean isGCanvasViewPrepared() {
        // Log.i("CANVAS", "isGCanvasViewPrepared===>" + (null != mCanvas && mCanvas.getCanvasView() == mSurfaceView));
        return null != mCanvas && mCanvas.getCanvasView() == mSurfaceView;
    }

    @Override
    protected FrameLayout initComponentHostView(Context context) {
        registerActivityStateListener();
        initGCanvas(context);

        String backgroundColor = getDomObject().getStyles().getBackgroundColor();
        if (!TextUtils.isEmpty(backgroundColor)) {
            mCanvas.config.clearColor = backgroundColor;
        }

        mContainer = new FrameLayout(context);
        mSurfaceView = new WXGCanvasGLSurfaceView(this, mCanvas, context);
        mSurfaceView.setWXLifecycleListener(mLifeListener);
        mContainer.addView(mSurfaceView,
                new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
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

    @Override
    public void onActivityDestroy() {
        super.onActivityDestroy();
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
        this.detachCallback = null;
    }

    class WXCanvasComponentLifeListener implements WXGCanvasGLSurfaceView.WXCanvasLifecycleListener {

        private WXGCanvasGLSurfaceView.WXCanvasLifecycleListener mDelegateListener;


        @Override
        public void onGCanvasViewDestroy(WXGcanvasComponent component, GCanvasView canvasView) {
            mState.destroy();
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewDestroy(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewCreated(WXGcanvasComponent component, GCanvasView canvasView) {
            mState.ready();
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewCreated(component, canvasView);
            }
        }

        @Override
        public void onGCanvasViewReattached(WXGcanvasComponent component, GCanvasView canvasView) {

        }

        @Override
        public void onGCanvasViewAttachToWindow(WXGcanvasComponent component, GCanvasView canvasView) {
            if (null != mDelegateListener) {
                mDelegateListener.onGCanvasViewAttachToWindow(component, canvasView);
            }
            if (mIsDetached) {
                Context context = mContainer.getContext();


                if (null != detachCallback) {
                    detachCallback.invoke(null);
                }

                int width = 0, height = 0;

                if (mSurfaceView != null) {
                    width = mSurfaceView.getMeasuredWidth();
                    height = mSurfaceView.getMeasuredHeight();
                    mSurfaceView.setWXLifecycleListener(null);
                    mContainer.removeView(mSurfaceView);
                    mSurfaceView = null;
                }

                GCanvasView.GCanvasConfig config = mCanvas.config;
                mCanvas.onDestroy();
                mCanvas = null;

                initGCanvas(context);
                mCanvas.config = config;
                mSurfaceView = new WXGCanvasGLSurfaceView(component, mCanvas, context);
                mContainer.addView(mSurfaceView, new FrameLayout.LayoutParams(width, height));
                mSurfaceView.setWXLifecycleListener(mLifeListener);
                prepareGCanvasView();
//                if (null != mModule && mModule.enableCache != null) {
//                    mModule.enable(mModule.enableCache, null);
//                }

                mIsDetached = false;
                if (null != mDelegateListener) {
                    mDelegateListener.onGCanvasViewReattached(component, canvasView);
                }
            }
        }

        @Override
        public void onGCanvasViewDetachedFromWindow(WXGcanvasComponent component, GCanvasView canvasView) {
            if (mState.mReadyCount > 0 && ((System.currentTimeMillis() - mState.mFirstReadyTime) > 80)) {
                mState.clear();
                mIsDetached = true;
                if (null != mDelegateListener) {
                    mDelegateListener.onGCanvasViewDetachedFromWindow(component, canvasView);
                }
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
}
