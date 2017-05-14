package com.alibaba.weex.plugin.gcanvas;


import android.content.Context;
import android.text.TextUtils;

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
public class WXGcanvasComponent extends WXComponent<WXGCanvasGLSurfaceView> {

    private GCanvasView.GCanvasConfig mConfig = new GCanvasView.GCanvasConfig();
    private WXGCanvasGLSurfaceView mCurrentGLView = null;

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


        String backgroundColor = getDomObject().getStyles().getBackgroundColor();
        if (!TextUtils.isEmpty(backgroundColor)) {
            mConfig.clearColor = backgroundColor;
        } else {
            mConfig.clearColor = GUtil.clearColor;
        }

        mCurrentGLView = new WXGCanvasGLSurfaceView(context, mConfig);
        return mCurrentGLView;
    }


    @Override
    public void onActivityDestroy() {
        if (GCanvas.fastCanvas != null) {

            GCanvas.fastCanvas.onDestroy();
            GCanvas.fastCanvas = null;
        }

        GcanvasModule.sRef = null;
    }

//    @Override
//    public void onActivityPause() {
//        mCurrentGLView.onPause();
//        super.onActivityPause();
//    }
//
//    @Override
//    public void onActivityResume() {
//        mCurrentGLView.onResume();
//        super.onActivityResume();
//    }
}





