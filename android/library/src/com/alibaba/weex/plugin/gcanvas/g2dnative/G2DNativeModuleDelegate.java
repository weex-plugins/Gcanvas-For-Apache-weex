//package com.alibaba.weex.plugin.gcanvas.g2dnative;
//
//import android.graphics.Bitmap;
//import android.opengl.GLES20;
//import android.text.TextUtils;
//
//import com.alibaba.weex.plugin.gcanvas.GCanvasImageLoader;
//import com.alibaba.weex.plugin.gcanvas.GcanvasModule;
//import com.alibaba.weex.plugin.gcanvas.WXGcanvasComponent;
//import com.taobao.gcanvas.GCanvasJNI;
//import com.taobao.gcanvas.util.GLog;
//import com.taobao.phenix.intf.Phenix;
//import com.taobao.phenix.intf.event.FailPhenixEvent;
//import com.taobao.phenix.intf.event.IPhenixListener;
//import com.taobao.phenix.intf.event.PhenixEvent;
//import com.taobao.phenix.intf.event.SuccPhenixEvent;
//import com.taobao.weex.WXSDKManager;
//import com.taobao.weex.bridge.JSCallback;
//import com.taobao.weex.ui.component.WXComponent;
//
//import org.json.JSONArray;
//
//import java.util.HashMap;
//
///**
// * @author ertong
// *         create at 2017/8/16
// */
//
//public class G2DNativeModuleDelegate implements GcanvasModule.IGCanvasModuleDelegate {
//    private static final String TAG = G2DNativeModuleDelegate.class.getSimpleName();
//
//    private GcanvasModule mModule;
//
//    private GCanvasImageLoader mImageLoader = new GCanvasImageLoader();
//
//    private HashMap<String, G2DSurfaceCanvasDelegate> mComponentMappings = new HashMap<>(1);
//
//    public G2DNativeModuleDelegate(GcanvasModule mModule) {
//        this.mModule = mModule;
//    }
//
//    @Override
//    public void bindImageTexture(String src, final String refId, JSCallback callback) {
//        if (!TextUtils.isEmpty(src)) {
//
//            final Object sync = new Object();
//
//            GLog.d("start to load texture in 2dmodule.start time = "+System.currentTimeMillis());
//            try {
//                if(src.startsWith("data:image")) {
//                    GLog.d("start to decode base64 texture in 2dmodule.start time = "+System.currentTimeMillis());
//                    Bitmap bmp = mImageLoader.handleBase64Texture(src.substring(src.indexOf("base64,")+"base64,".length()));
//                    GLog.d("start to decode base64 texture in 2dmodule.end time = "+System.currentTimeMillis());
//                    if (bmp != null) {
//                        GLog.d("start to bind base64 format texture in 2dmodule.");
//                        GCanvasJNI.bindTexture(refId,bmp, 0,GLES20.GL_TEXTURE_2D,0,GLES20.GL_RGBA,GLES20.GL_RGBA,GLES20.GL_UNSIGNED_BYTE);
//                    } else {
//                        GLog.d("decode base64 texture failed,bitmap is null.");
//                    }
//
//                } else {
//
//                    Phenix.instance().load(src).succListener(new IPhenixListener<SuccPhenixEvent>() {
//                        @Override
//                        public boolean onHappen(SuccPhenixEvent succPhenixEvent) {
//                            Bitmap bitmap = succPhenixEvent.getDrawable().getBitmap();
//                            if (null != bitmap) {
//                                GLog.d("start to bindtexture in 2dmodule.");
//                                GCanvasJNI.bindTexture(refId, bitmap, 0,GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA,GLES20.GL_RGBA,GLES20.GL_UNSIGNED_BYTE);
//                            } else {
//                                GLog.d("bitmap is null in teximage2D.");
//                            }
//
//                            synchronized (sync) {
//                                GLog.d("finish bindtexture in 2dmodule.");
//                                sync.notifyAll();
//                            }
//
//                            return true;
//                        }
//                    }).failListener(new IPhenixListener<FailPhenixEvent>() {
//                        @Override
//                        public boolean onHappen(FailPhenixEvent failPhenixEvent) {
//                            GLog.d("teximage2D load picture failed.");
//
//                            synchronized (sync) {
//                                GLog.d("finish bindtexture in 2dmodule.");
//                                sync.notifyAll();
//                            }
//
//                            return true;
//                        }
//                    }).cancelListener(new IPhenixListener<PhenixEvent>() {
//                        @Override
//                        public boolean onHappen(PhenixEvent phenixEvent) {
//                            GLog.d("teximage2D load picture cancel.");
//
//                            synchronized (sync) {
//                                GLog.d("finish bindtexture in 2dmodule.");
//                                sync.notifyAll();
//                            }
//                            return true;
//                        }
//                    }).fetch();
//
//                    synchronized (sync) {
//                        sync.wait();
//                        GLog.d("finish wait bindtexture in 2dmodule,end time = " + System.currentTimeMillis());
//                    }
//                }
//            } catch (Throwable e) {
//                GLog.e(TAG, e.getMessage(), e);
//            }
//        }
//    }
//
//    @Override
//    public void resetComponent(String refId) {
//
//    }
//
//    @Override
//    public void enable(String refId) {
//        if (!TextUtils.isEmpty(refId)) {
//            try {
//                WXComponent myComponent = WXSDKManager.getInstance().getWXRenderManager().getWXComponent(mModule.mWXSDKInstance.getInstanceId(), refId);
//
//                if (myComponent instanceof WXGcanvasComponent) {
//                    WXGcanvasComponent mWXGCanvasComp = (WXGcanvasComponent) myComponent;
//                    G2DSurfaceCanvasDelegate canvasDelegate = new G2DSurfaceCanvasDelegate(mWXGCanvasComp);
//                    mComponentMappings.put(refId, canvasDelegate);
//                    mWXGCanvasComp.setComponentDelegate(canvasDelegate);
//                }
//            } catch (Throwable e) {
//            }
//        }
//    }
//
//    @Override
//    public void setup(String args, String refId, JSCallback callback) {
//
//    }
//
//    @Override
//    public void preLoadImage(String args, JSCallback callBack) {
//        GLog.d(TAG, "preLoadImage() args: " + args);
//        if (!TextUtils.isEmpty(args)) {
//            try {
//                JSONArray dataArray = new JSONArray(args);
//                final String url = dataArray.getString(0);
//                final int id = dataArray.getInt(1);
//                mImageLoader.loadImage(url, id, callBack);
//            } catch (Throwable e) {
//                GLog.e(TAG, e.getMessage(), e);
//            }
//        }
//    }
//
//    @Override
//    public void setHiQuality(String args, String refId) {
//
//    }
//
//    @Override
//    public void render(String cmd, String refId, JSCallback callBack) {
//
//    }
//
//    @Override
//    public void setDevicePixelRatio(String refId) {
//
//    }
//
//    @Override
//    public String execSyncCMD(String refId, String action, String args) {
//        return "";
//    }
//
//    @Override
//    public void setContextType(String args, String refId, JSCallback callBack) {
//
//    }
//
//    @Override
//    public void destroy() {
//
//    }
//
//    @Override
//    public ContextType getContextType() {
//        return ContextType._2D;
//    }
//}
