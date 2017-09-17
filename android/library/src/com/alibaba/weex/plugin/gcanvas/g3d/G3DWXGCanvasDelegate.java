//package com.alibaba.weex.plugin.gcanvas.g3d;
//
//import android.app.Activity;
//import android.content.Context;
//import android.graphics.SurfaceTexture;
//import android.view.Display;
//import android.view.SurfaceHolder;
//import android.view.TextureView;
//import android.view.ViewGroup;
//
//import com.alibaba.weex.plugin.gcanvas.GcanvasModule;
//import com.alibaba.weex.plugin.gcanvas.WXGcanvasComponent;
//import com.taobao.gcanvas.GCanvasJNI;
//import com.taobao.gcanvas.surface.GSurfaceView;
//import com.taobao.gcanvas.util.GLog;
//
///**
// * @author ertong
// *         create at 2017/8/14
// */
//
////public class G3DWXGCanvasDelegate implements WXGcanvasComponent.IWXGCanvasComponentDelegate, SurfaceHolder.Callback {
//public class G3DWXGCanvasDelegate implements WXGcanvasComponent.IWXGCanvasComponentDelegate, TextureView.SurfaceTextureListener {
//
//    private WXGcanvasComponent mComponent;
//
//    private GSurfaceView mSurfaceView;
//
//    private static final String TAG = G3DWXGCanvasDelegate.class.getSimpleName();
//
//    public G3DWXGCanvasDelegate(WXGcanvasComponent mComponent) {
//        this.mComponent = mComponent;
//    }
//
//    @Override
//    public boolean setProperty(String key, Object param) {
//        return false;
//    }
//
//
//    @Override
//    public void onActivityResume() {
//        if (null != mSurfaceView) {
//            mSurfaceView.resume();
//        }
//    }
//
//    @Override
//    public void onActivityDestroy() {
//        if (null != mSurfaceView) {
////            mSurfaceView.getHolder().removeCallback(this);
//            mSurfaceView.setSurfaceTextureListener(null);
//        }
//    }
//
//    @Override
//    public void onActivityPause() {
//        if (null != mSurfaceView) {
//            mSurfaceView.pause();
//        }
//    }
//
//    @Override
//    public void initViewIntoContainer(ViewGroup container, Context context) {
//        mSurfaceView = new GSurfaceView(container.getContext(), mComponent.getRef());
////        mSurfaceView.getHolder().addCallback(this);
////        mSurfaceView.setSurfaceTextureListener(this);
//        container.addView(mSurfaceView, new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
//    }
//
////    @Override
////    public void surfaceCreated(SurfaceHolder holder) {
////
////    }
////
////    @Override
////    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
////        Context ctx = mComponent.getContext();
////        if (ctx == null) {
////            GLog.e(TAG, "setDevicePixelRatio error ctx == null");
////            return;
////        }
////
////        Display display = ((Activity) ctx).getWindowManager().getDefaultDisplay();
////
////        int screenWidth = display.getWidth();
////        double devicePixelRatio = screenWidth / 750.0;
////
////        GLog.d(TAG, "enable width " + screenWidth);
////        GLog.d(TAG, "enable devicePixelRatio " + devicePixelRatio);
////
////        GCanvasJNI.setContextType(mComponent.getRef(), GcanvasModule.IGCanvasModuleDelegate.ContextType._3D.value());
////
////        GCanvasJNI.setDevicePixelRatio(mComponent.getRef(), devicePixelRatio);
////    }
////
////    @Override
////    public void surfaceDestroyed(SurfaceHolder holder) {
////
////    }
//
//    public void onSurfaceTextureAvailable(SurfaceTexture surface, int width, int height){
//
//    }
//
//    public void onSurfaceTextureSizeChanged(SurfaceTexture surface, int width, int height){
//        Context ctx = mComponent.getContext();
//        if (ctx == null) {
//            GLog.e(TAG, "setDevicePixelRatio error ctx == null");
//            return;
//        }
//
//        Display display = ((Activity) ctx).getWindowManager().getDefaultDisplay();
//
//        int screenWidth = display.getWidth();
//        double devicePixelRatio = screenWidth / 750.0;
//
//        GLog.d(TAG, "enable width " + screenWidth);
//        GLog.d(TAG, "enable devicePixelRatio " + devicePixelRatio);
//
//        GCanvasJNI.setContextType(mComponent.getRef(), GcanvasModule.IGCanvasModuleDelegate.ContextType._2D.value());
//
//        GCanvasJNI.setDevicePixelRatio(mComponent.getRef(), devicePixelRatio);
//    }
//
//    public boolean onSurfaceTextureDestroyed(SurfaceTexture surface){
//
//        return true;
//    }
//
//    public void onSurfaceTextureUpdated(SurfaceTexture surface){
//
//    }
//}
