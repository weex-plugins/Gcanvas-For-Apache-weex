package com.alibaba.weex.plugin.gcanvas;

import android.app.Activity;
import android.content.Context;
import android.graphics.SurfaceTexture;
import android.os.Build;
import android.support.annotation.NonNull;
import android.view.Display;
import android.view.TextureView;

import com.alibaba.weex.plugin.annotation.WeexComponent;
import com.taobao.gcanvas.GCanvasJNI;
import com.taobao.gcanvas.surface.GSurfaceView;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.Component;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.ComponentCreator;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * @author ertong
 *         create at 2017/8/17
 */

@WeexComponent(names = {"gcanvas"})
@Component(lazyload = false)
//public class WXGCanvasLigntningComponent extends WXComponent<GWXSurfaceView> implements TextureView.SurfaceTextureListener, WeexPageFragment.WXViewCreatedListener {
    public class WXGCanvasLigntningComponent extends WXComponent<GWXSurfaceView> implements TextureView.SurfaceTextureListener{
    private GWXSurfaceView mSurfaceView;
    public AtomicBoolean mSended = new AtomicBoolean(false);

//    private FrameLayout mContainer;
    private static final String TAG = WXGCanvasLigntningComponent.class.getSimpleName();
//    private boolean mIsFragmentReady = false;
//    private boolean mIsAliWeex = false;

//    @Override
//    public void onViewCreated(WXSDKInstance wxsdkInstance, View view) {
////        mIsFragmentReady = true;
////        if (null != mContainer) {
////            addGCanvasView();
////        }
//    }

    private void addGCanvasView() {
        String backgroundColor = getDomObject().getStyles().getBackgroundColor();
        mSurfaceView = new GWXSurfaceView(getContext(),this);
        if (Build.VERSION.SDK_INT >= 24) {
                String libraryPath = getContext().getApplicationInfo().nativeLibraryDir + "/libweexjsc.so";
                GLog.w("start to load gcanvas library,path=" + libraryPath);
                GCanvasJNI.registerCallback(libraryPath);
        } else {
            GCanvasJNI.registerCallback(null);
        }

        if (backgroundColor.isEmpty()) {
            backgroundColor = "rgba(0,0,0,0)";
        }
        mSurfaceView.setBackgroundColor(backgroundColor);

//        mContainer.addView(mSurfaceView, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
    }

    public static class Creator implements ComponentCreator {
        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGCanvasLigntningComponent(instance, node, parent, lazy);
        }

        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXGCanvasLigntningComponent(instance, node, parent);
        }
    }

    @Deprecated
    public WXGCanvasLigntningComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId, boolean isLazy) {
        this(instance, dom, parent, isLazy);
    }

    public WXGCanvasLigntningComponent(WXSDKInstance instance, WXDomObject node,
                                       WXVContainer parent, boolean lazy) {
        super(instance, node, parent, lazy);
//        registerViewCreateListener(instance.getContext());
    }


//    private void registerViewCreateListener(Context context) {
////        if (context instanceof FragmentActivity) {
////            FragmentActivity fragmentAct = (FragmentActivity) context;
////            Fragment fragment = fragmentAct.getSupportFragmentManager().findFragmentByTag(WeexPageFragment.FRAGMENT_TAG);
////            if (fragment instanceof WeexPageFragment) {
////                ((WeexPageFragment) fragment).setViewCreatedListener(this);
////                mIsAliWeex = true;
////            }
////        }
//    }

    public WXGCanvasLigntningComponent(WXSDKInstance instance, WXDomObject node,
                                       WXVContainer parent) {
        super(instance, node, parent);
//        registerViewCreateListener(instance.getContext());
    }

    @Override
    public void onActivityResume() {
        if (null != mSurfaceView) {
            mSurfaceView.resume();
        }
    }

    @Override
    public void onActivityDestroy() {
//        if (getInstance().getContext() instanceof FragmentActivity) {
//            FragmentActivity fragmentAct = (FragmentActivity) getInstance().getContext();
//            Fragment fragment = fragmentAct.getSupportFragmentManager().findFragmentByTag(WeexPageFragment.FRAGMENT_TAG);
//            if (fragment instanceof WeexPageFragment) {
//                ((WeexPageFragment) fragment).setViewCreatedListener(null);
//            }
//        }
        if (null != mSurfaceView) {
//            mSurfaceView.getHolder().removeCallback(this);
            mSurfaceView.setSurfaceTextureListener(null);
            mSurfaceView.requestExit();
        }
    }

    @Override
    public void onActivityPause() {
        if (null != mSurfaceView) {
            mSurfaceView.pause();
        }
    }

    @Override
    protected GWXSurfaceView initComponentHostView(@NonNull Context context) {
//        mContainer = new FrameLayout(context);
//        mContainer.setBackground(null);
//
//        if (!mIsAliWeex || mIsFragmentReady) {
//            addGCanvasView();
//        }
//        return mContainer;
        mSended.set(false);
        addGCanvasView();

//        if(getInstance() instanceof AliWXSDKInstance){
//            AliWXSDKInstance instance = (AliWXSDKInstance)getInstance();
//            instance.addUserTrackParameter("gcanvas",true);
//        }

        return mSurfaceView;
    }

    public void onSurfaceTextureAvailable(SurfaceTexture surface, int width, int height) {

    }

    public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int width, int height) {
        Context ctx = getContext();
        if (ctx == null) {
            GLog.e(TAG, "setDevicePixelRatio error ctx == null");
            return;
        }

        Display display = ((Activity) ctx).getWindowManager().getDefaultDisplay();

        int screenWidth = display.getWidth();
        double devicePixelRatio = screenWidth / 750.0;

        GLog.d(TAG, "enable width " + screenWidth);
        GLog.d(TAG, "enable devicePixelRatio " + devicePixelRatio);

        GCanvasJNI.setDevicePixelRatio(getRef(), devicePixelRatio);
    }

    public boolean onSurfaceTextureDestroyed(SurfaceTexture surface) {
        return true;
    }

    public void onSurfaceTextureUpdated(SurfaceTexture surface) {

    }

    public GSurfaceView getSurfaceView() {
        return mSurfaceView;
    }

    public void sendEvent(){

        synchronized (this) {
            if (mSended.get() != true) {
                Map<String, Object> params = new HashMap<>();
                params.put("ref", getRef());

                GLog.d("send event in gcanvas component.params=" + params.toString());

                getInstance().fireGlobalEventCallback("GCanvasReady", params);
                mSended.set(true);
            } else {
                GLog.d("event sended.");
            }
        }
    }
}
