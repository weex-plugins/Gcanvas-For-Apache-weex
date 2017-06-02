package com.alibaba.weex.plugin.gcanvas;


import android.content.Context;
import android.text.TextUtils;

import com.alibaba.weex.plugin.annotation.WeexComponent;
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
public class WXGcanvasComponent extends WXComponent<WXGCanvasGLSurfaceView> {

    private WXGCanvasGLSurfaceView mSurfaceView;

    private final GCanvasState mState = new GCanvasState();

    public GCanvasView.CanvasLifecycleListener mLifeListener = new GCanvasView.CanvasLifecycleListener() {
        @Override
        public void onGCanvasViewDestroy() {
            mState.destroy();
        }

        @Override
        public void onGCanvasViewCreated() {
            mState.ready();
        }
    };

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

    @Override
    protected WXGCanvasGLSurfaceView initComponentHostView(Context context) {

        registerActivityStateListener();

        GCanvasView.GCanvasConfig mConfig = new GCanvasView.GCanvasConfig();
        String backgroundColor = getDomObject().getStyles().getBackgroundColor();
        if (!TextUtils.isEmpty(backgroundColor)) {
            mConfig.clearColor = backgroundColor;
        } else {
            mConfig.clearColor = GUtil.clearColor;
        }

        mSurfaceView = new WXGCanvasGLSurfaceView(context, mConfig);
        mSurfaceView.setOnCanvasLifecycleListener(mLifeListener);
        return mSurfaceView;
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
    }

    static class GCanvasState {

        private int mDestroyCount, mReadyCount;

        private long mFirstReadyTime = 0;

        public GCanvasState() {
            this.mDestroyCount = 0;
            this.mReadyCount = 0;
        }

        public synchronized void init() {
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
            return mReadyCount > 0 && mReadyCount > mDestroyCount && (System.currentTimeMillis() - mFirstReadyTime) > 160;
        }

        public synchronized boolean isDestroyed() {
            return mDestroyCount > 0 && mDestroyCount > mReadyCount;
        }
    }
}
