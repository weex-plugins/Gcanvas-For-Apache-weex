package com.alibaba.weex.plugin.gcanvas;

import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.opengl.GLES20;
import android.text.TextUtils;
import android.util.Log;
import android.view.Display;

import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.gcanvas.GCanvasJNI;
import com.taobao.gcanvas.surface.GSurfaceView;
import com.taobao.gcanvas.util.GLog;
import com.taobao.phenix.intf.Phenix;
import com.taobao.phenix.intf.event.FailPhenixEvent;
import com.taobao.phenix.intf.event.IPhenixListener;
import com.taobao.phenix.intf.event.PhenixEvent;
import com.taobao.phenix.intf.event.SuccPhenixEvent;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.Destroyable;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.ui.component.WXComponent;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

import static com.alibaba.analytics.core.filter.LogFilter.map;
import static com.alibaba.weex.plugin.gcanvas.GCanvasLightningModule.ContextType._2D;

/**
 * @author ertong
 *         create at 2017/8/17
 */

@WeexModule(name = "gcanvas")
public class GCanvasLightningModule extends WXModule implements Destroyable {
    private static final String TAG = "GCanvasLightningModule";

    private HashMap<String, WXGCanvasLigntningComponent> mComponentMap = new HashMap<>(1);

    private GCanvasImageLoader mImageLoader = new GCanvasImageLoader();


    public GCanvasLightningModule() {
        GCanvasJNI.init();
//        GLog.setLevel("debug");
    }

    @JSMethod(uiThread = false)
    public void bindImageTexture(final String args, final String refId, final JSCallback callback) {
        Log.i("luanxuan", "enter bindImageTexture.");
        String url = null;
        int rid = 0;
        if (!TextUtils.isEmpty(args)) {
            try {
                JSONArray dataArray = new JSONArray(args);
                url = dataArray.getString(0);
                rid = dataArray.getInt(1);
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }

        final String src = url;
        final int id = rid;
        if(!TextUtils.isEmpty(src)){

            final Object sync = new Object();
            final AtomicBoolean finished = new AtomicBoolean(false);

            GLog.d("start to load texture in 2dmodule.start time = " + System.currentTimeMillis());
            try {
                if (src.startsWith("data:image")) {
                    GLog.d("start to decode base64 texture in 2dmodule.start time = " + System.currentTimeMillis());
                    Bitmap bmp = mImageLoader.handleBase64Texture(src.substring(src.indexOf("base64,") + "base64,".length()));
//                    int id = mImageLoader.getCache(src).id;
                    GLog.d("start to decode base64 texture in 2dmodule.end time = " + System.currentTimeMillis());
                    if (bmp != null) {
                        GLog.d("start to bind base64 format texture in 2dmodule.");
                        GCanvasJNI.bindTexture(refId, bmp, 0, GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA, GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE);
                    } else {
                        GLog.d("decode base64 texture failed,bitmap is null.");
                    }

                } else {
                    final HashMap<String, Object> hm = new HashMap<>();
                    Phenix.instance().load(src).succListener(new IPhenixListener<SuccPhenixEvent>() {
                        @Override
                        public boolean onHappen(SuccPhenixEvent succPhenixEvent) {
                            Bitmap bitmap = succPhenixEvent.getDrawable().getBitmap();
                            if (null != bitmap) {
//                                int id = mImageLoader.getCache(src).id;
                                Log.i("luanxuan", "start to bindtexture in 2dmodule.id="+id+",componentId="+refId);
                                GCanvasJNI.bindTexture(refId, bitmap, id,GLES20.GL_TEXTURE_2D, 0, GLES20.GL_RGBA, GLES20.GL_RGBA, GLES20.GL_UNSIGNED_BYTE);

                            } else {
                                GLog.d("bitmap is null in teximage2D.");
                            }

                            if (null != callback && bitmap != null) {
                                hm.put("url", src);
//                                hm.put("id", textureCache.jsCacheId);
                                hm.put("error", 0);
                                hm.put("width", bitmap.getWidth());
                                hm.put("height", bitmap.getHeight());
                            }

                            synchronized (sync) {
                                GLog.d("[bindImageTexture]finish bindtexture in 2dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[bindImageTexture]finish notify in 2dmodule.");
                            }

                            return true;
                        }
                    }).failListener(new IPhenixListener<FailPhenixEvent>() {
                        @Override
                        public boolean onHappen(FailPhenixEvent failPhenixEvent) {
                            GLog.d("teximage2D load picture failed.");

                            synchronized (sync) {
                                GLog.d("[bindImageTexture]finish bindtexture in 2dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[bindImageTexture]finish notify in 2dmodule.");
                            }

                            return true;
                        }
                    }).cancelListener(new IPhenixListener<PhenixEvent>() {
                        @Override
                        public boolean onHappen(PhenixEvent phenixEvent) {
                            GLog.d("teximage2D load picture cancel.");

                            synchronized (sync) {
                                GLog.d("[bindImageTexture]finish bindtexture in 2dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[bindImageTexture]finish notify in 2dmodule.");
                            }
                            return true;
                        }
                    }).fetch();

                    synchronized (sync) {
                        GLog.d("start wait bindtexture in 2dmodule.");
                        if(!finished.get()) {
                            sync.wait();
                        }

                        callback.invoke(hm);
                        GLog.d("finish wait bindtexture in 2dmodule,end time = " + System.currentTimeMillis());
                    }
                }
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }
    }

    @JSMethod
    public void resetComponent(String refId) {
    }

    @JSMethod
    public void setup(String args, String refId, JSCallback callback) {
    }

    @JSMethod
    public void registerRetachFunction(String refId, JSCallback callback) {
    }


    @JSMethod(uiThread = false)
    public void preLoadImage(String args, final JSCallback callBack) {
        GLog.d(TAG, "preLoadImage() in GCanvasLightningModule,args: " + args);
        if (!TextUtils.isEmpty(args)) {
            try {
                JSONArray dataArray = new JSONArray(args);
                final String url = dataArray.getString(0);
                final int id = dataArray.getInt(1);
                mImageLoader.loadImage(url, id, callBack);
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }
    }

    @JSMethod
    public void setHiQuality(String args, String refId) {
    }

    @JSMethod(uiThread = false)
    public void setLogLevel(String args) {
        GLog.d(TAG, "setLogLevel() args: " + args);
        GLog.setLevel(args);
    }


    @JSMethod(uiThread = false)
    public void enable(String args, JSCallback callBack) {
        String refId;
        JSONObject jo;
        try {
            jo = new JSONObject(args);
            refId = jo.getString("componentId");
            WXComponent myComponent = WXSDKManager.getInstance().getWXRenderManager().getWXComponent(mWXSDKInstance.getInstanceId(), refId);

            if (myComponent instanceof WXGCanvasLigntningComponent) {
                WXGCanvasLigntningComponent mWXGCanvasComp = (WXGCanvasLigntningComponent) myComponent;
                mComponentMap.put(refId, mWXGCanvasComp);
            }
        } catch (Throwable e) {
        }
    }

    @JSMethod(uiThread = false)
    public void render(String cmd, String refId, JSCallback callBack) {
    }

    @JSMethod(uiThread = false)
    public void getDeviceInfo(String args, JSCallback callBack) {
        if (!TextUtils.isEmpty(args)) {

            HashMap<String, Object> hm = new HashMap<>();

            JSONObject data = new JSONObject();
            try {
                data.put("platform", "Android");
            } catch (JSONException e) {
            }
            hm.put("data", data.toString());
            callBack.invoke(hm);
        }
    }

    @JSMethod(uiThread = false)
    public void setContextType(String args, String refId, JSCallback callBack) {
        if (TextUtils.isEmpty(args) || TextUtils.isEmpty(refId)) {
            return;
        }

        Context ctx = (mWXSDKInstance.getContext());
        if (ctx == null) {
            GLog.e(TAG, "setDevicePixelRatio error ctx == null");
            return;
        }

        Display display = ((Activity) ctx).getWindowManager().getDefaultDisplay();

        int width = display.getWidth();
        double devicePixelRatio = width / 750.0;

        GLog.d(TAG, "enable width " + width);
        GLog.d(TAG, "enable devicePixelRatio " + devicePixelRatio);

        ContextType type = _2D;

        if ("3d".equals(args) || "1".equals(args)) {
            type = ContextType._3D;
        }

        GCanvasJNI.setContextType(refId, type.value());
        GCanvasJNI.setDevicePixelRatio(refId, devicePixelRatio);
        if(GCanvasJNI.sendEvent(refId)){
            GLog.d("start to send event in module.");
            WXGCanvasLigntningComponent component = mComponentMap.get(refId);
            if (component != null) {
                component.sendEvent();
            }
        }
    }

    @JSMethod(uiThread = false)
    public void setAlpha(String refId, float alpha) {
        GLog.d("start to set alpha in 3dmodule.");
        WXGCanvasLigntningComponent component = mComponentMap.get(refId);
        if (component != null) {
            GSurfaceView view = component.getSurfaceView();
            if (view != null) {
                GLog.d("set alpha success in 3dmodule.");
                view.setAlpha(alpha);
            }
        }
    }

    @JSMethod
    public void setDevicePixelRatio(String refId) {
    }

    @JSMethod(uiThread = false)
    public String execGcanvaSyncCMD(String refId, String action, String args) {
        return "";
    }

    @Override
    public void destroy() {
        Log.i(TAG, "canvas module destroy!!!");
        Iterator iter = mComponentMap.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            WXGCanvasLigntningComponent val = (WXGCanvasLigntningComponent)entry.getValue();
            GLog.d("component destroy id="+entry.getKey());
            val.onActivityDestroy();
        }

        mComponentMap.clear();
    }


    enum ContextType {
        _2D(0), _3D(1);

        private int value;

        ContextType(int value) {
            this.value = value;
        }

        public int value() {
            return value;
        }
    }

    @JSMethod(uiThread = false)
    public void texImage2D(final String refid, final int target, final int level, final int internalformat, final int format, final int type, String path) {
        GLog.d("texImage2D in 3dmodule,refid=" + refid + ",target=" + target + ",level=" + level + ",internalformat=" + internalformat + ",format=" + format + ",type=" + type + ",path=" + path);
        if (!TextUtils.isEmpty(path)) {

            final Object sync = new Object();
            final AtomicBoolean finished = new AtomicBoolean(false);

            GLog.d("start to load texture in 3dmodule.start time = " + System.currentTimeMillis());
            try {
                if (path.startsWith("data:image")) {
                    GLog.d("start to decode base64 texture in 3dmodule.start time = " + System.currentTimeMillis());
                    Bitmap bmp = mImageLoader.handleBase64Texture(path.substring(path.indexOf("base64,") + "base64,".length()));
                    GLog.d("start to decode base64 texture in 3dmodule.end time = " + System.currentTimeMillis());
                    if (bmp != null) {
                        GLog.d("start to bind base64 format texture in 3dmodule.");
                        GCanvasJNI.bindTexture(refid, bmp, 0, target, level, internalformat, format, type);
                    } else {
                        GLog.d("decode base64 texture failed,bitmap is null.");
                    }

                } else {

                    Phenix.instance().load(path).succListener(new IPhenixListener<SuccPhenixEvent>() {
                        @Override
                        public boolean onHappen(SuccPhenixEvent succPhenixEvent) {
                            Bitmap bitmap = succPhenixEvent.getDrawable().getBitmap();
                            if (null != bitmap) {
                                GLog.d("start to bindtexture in 3dmodule.");
                                GCanvasJNI.bindTexture(refid, bitmap, 0, target, level, internalformat, format, type);
                            } else {
                                GLog.d("bitmap is null in teximage2D.");
                            }

                            synchronized (sync) {
                                GLog.d("[texImage2D]finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texImage2D]finish notify in 3dmodule.");
                            }

                            return true;
                        }
                    }).failListener(new IPhenixListener<FailPhenixEvent>() {
                        @Override
                        public boolean onHappen(FailPhenixEvent failPhenixEvent) {
                            GLog.d("teximage2D load picture failed.");

                            synchronized (sync) {
                                GLog.d("[texImage2D]finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texImage2D]finish notify in 3dmodule.");
                            }

                            return true;
                        }
                    }).cancelListener(new IPhenixListener<PhenixEvent>() {
                        @Override
                        public boolean onHappen(PhenixEvent phenixEvent) {
                            GLog.d("teximage2D load picture cancel.");

                            synchronized (sync) {
                                GLog.d("[texImage2D]finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texImage2D]finish notify in 3dmodule.");
                            }
                            return true;
                        }
                    }).fetch();

                    synchronized (sync) {
                        GLog.d("[texImage2D] start wait bindtexture in 3dmodule");
                        if(!finished.get()) {
                            sync.wait();
                        }

                        GLog.d("finish wait bindtexture in 3dmodule,end time = " + System.currentTimeMillis());
                    }
                }
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }
    }

    @JSMethod(uiThread = false)
    public void texSubImage2D(final String refid, final int target, final int level, final int xoffset, final int yoffset, final int format, final int type, String path) {
        GLog.d("texSubImage2D in 3dmodule,refid=" + refid + ",target=" + target + ",level=" + level + ",xoffset=" + xoffset + ",yoffset=" + yoffset + ",format=" + format + ",type=" + type + ",path=" + path);
        if (!TextUtils.isEmpty(path)) {

            final Object sync = new Object();
            final AtomicBoolean finished = new AtomicBoolean(false);

            GLog.d("start to texSubImage2D in 3dmodule.start time = " + System.currentTimeMillis());
            try {
                if (path.startsWith("data:image")) {
                    GLog.d("[texSubImage2D] start to decode base64 texture in 3dmodule.start time = " + System.currentTimeMillis());
                    Bitmap bmp = mImageLoader.handleBase64Texture(path.substring(path.indexOf("base64," + "base64,".length())));
                    GLog.d("[texSubImage2D] start to decode base64 texture in 3dmodule.end time = " + System.currentTimeMillis());
                    if (bmp != null) {
                        GLog.d("[texSubImage2D] start to bind base64 format texture in 3dmodule.");
                        GCanvasJNI.texSubImage2D(refid, bmp, 0, target, level, xoffset, yoffset, format, type);
                    } else {
                        GLog.d("[texSubImage2D] decode base64 texture failed,bitmap is null.");
                    }

                    return;
                } else {
                    Phenix.instance().load(path).succListener(new IPhenixListener<SuccPhenixEvent>() {
                        @Override
                        public boolean onHappen(SuccPhenixEvent succPhenixEvent) {
                            Bitmap bitmap = succPhenixEvent.getDrawable().getBitmap();
                            if (null != bitmap) {
                                GLog.d("[texSubImage2D] start to bindtexture in 3dmodule.");
                                GCanvasJNI.texSubImage2D(refid, bitmap, 0, target, level, xoffset, yoffset, format, type);
                            } else {
                                GLog.d("[texSubImage2D] bitmap is null.");
                            }

                            synchronized (sync) {
                                GLog.d("[texSubImage2D] finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texSubImage2D]finish notify in 3dmodule.");
                            }

                            return true;
                        }
                    }).failListener(new IPhenixListener<FailPhenixEvent>() {
                        @Override
                        public boolean onHappen(FailPhenixEvent failPhenixEvent) {
                            GLog.d("[texSubImage2D] load picture failed.");

                            synchronized (sync) {
                                GLog.d("[texSubImage2D]finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texSubImage2D]finish notify in 3dmodule.");
                            }

                            return true;
                        }
                    }).cancelListener(new IPhenixListener<PhenixEvent>() {
                        @Override
                        public boolean onHappen(PhenixEvent phenixEvent) {
                            GLog.d("texSubimage2D load picture cancel.");

                            synchronized (sync) {
                                GLog.d("finish bindtexture in 3dmodule.");
                                sync.notifyAll();
                                finished.set(true);
                                GLog.d("[texSubImage2D]finish notify in 3dmodule.");
                            }
                            return true;
                        }
                    }).fetch();

                    synchronized (sync) {
                        GLog.d("[texSubImage2D] start wait bindtexture in 3dmodule");
                        if(!finished.get()) {
                            sync.wait();
                        }

                        GLog.d("[texSubImage2D] finish wait bindtexture in 3dmodule,end time = " + System.currentTimeMillis());
                    }
                }
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }
    }

    static class ImageInfo {
        static final int IDLE = -1;
        static final int LOADING = 0x100;
        static final int LOADED = 0x200;
        public int width;
        public int height;
        public int id;
        public AtomicInteger status = new AtomicInteger(IDLE);
    }
}
