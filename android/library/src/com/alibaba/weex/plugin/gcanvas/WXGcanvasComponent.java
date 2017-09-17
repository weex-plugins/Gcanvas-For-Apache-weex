//package com.alibaba.weex.plugin.gcanvas;
//
//
//import android.content.Context;
//import android.view.ViewGroup;
//import android.widget.FrameLayout;
//
//import com.alibaba.weex.plugin.annotation.WeexComponent;
//import com.taobao.gcanvas.surface.GSurfaceView;
//import com.taobao.weex.WXSDKInstance;
//import com.taobao.weex.annotation.Component;
//import com.taobao.weex.dom.WXDomObject;
//import com.taobao.weex.ui.ComponentCreator;
//import com.taobao.weex.ui.component.WXComponent;
//import com.taobao.weex.ui.component.WXComponentProp;
//import com.taobao.weex.ui.component.WXVContainer;
//import com.taobao.weex.utils.WXUtils;
//
//import java.lang.reflect.InvocationTargetException;
//
//@WeexComponent(names = {"gcanvas"})
//@Component(lazyload = false)
//public class WXGcanvasComponent extends WXComponent<FrameLayout> {
//
//    private FrameLayout mContainer;
//
//    private String mContextType = "2d";
//
//    private IWXGCanvasComponentDelegate mComponentDelegate;
//
//    public static class PropName {
//        public static final String ContextType = "contextType";
//        public static final String Transparency = "Transparency";
//    }
//
//    @WXComponentProp(name = PropName.ContextType)
//    public void setContextType(String type) {
//        mContextType = type;
//    }
//
//
//    public ViewGroup getContainer() {
//        return mContainer;
//    }
//
//    @Override
//    protected boolean setProperty(String key, Object param) {
//        switch (key) {
//            case PropName.ContextType:
//                setContextType(WXUtils.getString(param, "2d"));
//                return true;
//        }
//
//        if (null != mComponentDelegate) {
//            if (mComponentDelegate.setProperty(key, param)) {
//                return true;
//            }
//        }
//
//        return super.setProperty(key, param);
//    }
//
//
//    public static class Creator implements ComponentCreator {
//        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) throws IllegalAccessException, InvocationTargetException, InstantiationException {
//            return new WXGcanvasComponent(instance, node, parent, lazy);
//        }
//
//        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) throws IllegalAccessException, InvocationTargetException, InstantiationException {
//            return new WXGcanvasComponent(instance, node, parent);
//        }
//    }
//
//    @Deprecated
//    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId, boolean isLazy) {
//        this(instance, dom, parent, isLazy);
//    }
//
//    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject node,
//                              WXVContainer parent, boolean lazy) {
//        super(instance, node, parent, lazy);
//    }
//
//    public WXGcanvasComponent(WXSDKInstance instance, WXDomObject node,
//                              WXVContainer parent) {
//        super(instance, node, parent);
//    }
//
//    @Override
//    protected FrameLayout initComponentHostView(Context context) {
//        registerActivityStateListener();
//        mContainer = new FrameLayout(context);
//        mContainer.setBackground(null);
//        if (null != mComponentDelegate) {
//            mComponentDelegate.initViewIntoContainer(mContainer, context);
//        }
//        return mContainer;
//    }
//
//    public void setComponentDelegate(IWXGCanvasComponentDelegate delegate) {
//        this.mComponentDelegate = delegate;
//        if (null != mContainer && null != this.mComponentDelegate) {
//            mComponentDelegate.initViewIntoContainer(mContainer, getContext());
//        }
//    }
//
//    @Override
//    public void onActivityResume() {
//        super.onActivityResume();
//        if (null != mComponentDelegate) {
//            mComponentDelegate.onActivityResume();
//        }
//    }
//
//    @Override
//    public void onActivityPause() {
//        super.onActivityPause();
//        if (null != mComponentDelegate) {
//            mComponentDelegate.onActivityPause();
//        }
//    }
//
//    @Override
//    public void onActivityDestroy() {
//        super.onActivityDestroy();
//        if (null != mComponentDelegate) {
//            mComponentDelegate.onActivityDestroy();
//        }
//    }
//
//    public interface IWXGCanvasComponentDelegate {
//        boolean setProperty(String key, Object param);
//
//        void onActivityResume();
//
//        void onActivityDestroy();
//
//        void onActivityPause();
//
//        void initViewIntoContainer(ViewGroup container, Context context);
//    }
//}
