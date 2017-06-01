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

    public static class Creator implements ComponentCreator {
        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGcanvasComponent(instance, node, parent, lazy);
        }

        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGcanvasComponent(instance, node, parent);
        }

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
        mSurfaceView.setOnCanvasLifecycleListener(GcanvasModule.sLifeListener);
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
}
