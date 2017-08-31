package com.alibaba.weex.plugin.gcanvas.g2d;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;
import android.util.Log;
import android.view.Display;

import com.alibaba.weex.plugin.gcanvas.GCanvasImageLoader;
import com.alibaba.weex.plugin.gcanvas.GcanvasModule;
import com.alibaba.weex.plugin.gcanvas.WXGcanvasComponent;
import com.taobao.gcanvas.GCanvas;
import com.taobao.gcanvas.GCanvasMessage;
import com.taobao.gcanvas.GCanvasResult;
import com.taobao.gcanvas.GCanvasView;
import com.taobao.gcanvas.util.GCanvasHelper;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.ui.component.WXComponent;

import org.json.JSONArray;
import org.json.JSONObject;

import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicBoolean;

/**
 * @author ertong
 *         create at 2017/8/9
 */

public class G2DModuleDelegate implements GcanvasModule.IGCanvasModuleDelegate, WXGCanvasGLSurfaceView.WXCanvasLifecycleListener {
    private static String TAG = "GCanvas2DModuleDelegate";
    private static final String CMD_RENDER = "render";
    private static final String CMD_ENABLE = "enable";
    private static final String CMD_BIND_TEXTURE = "bindTexture";
    private static final String CMD_SET_CONTEXT_TYPE = "setContextType";
    private static final String CMD_SET_HIGH_QUALITY = "setHiQuality";
    private static final String CMD_SET_DEVICE_PIXEL = "setDevicePixelRatio";
    private static final String CMD_RESET = "reset";

    private static final long MAX_WAIT_TIME = 240;

    private final Object mLock = new Object();

    private AtomicBoolean mIsDestroyed = new AtomicBoolean(false);

    private Handler mUIHandler = new Handler(Looper.getMainLooper());

    private HashMap<String, GComponentDelegate> mComponentMappings = new HashMap<>(1);

    private GcanvasModule mModule;

    private GCanvasImageLoader mImageCache = new GCanvasImageLoader();

    public G2DModuleDelegate(GcanvasModule module) {
        this.mModule = module;
    }

    @Override
    public void bindImageTexture(String src, String refId, JSCallback callback) {
        if (TextUtils.isEmpty(src) || TextUtils.isEmpty(refId)) {
            return;
        }
        this.execGCanvasCMD(refId, CMD_BIND_TEXTURE, src, callback);
    }

    @Override
    public void resetComponent(String refId) {
        Iterator iter = mComponentMappings.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            GComponentDelegate delegate = (GComponentDelegate) entry.getValue();
            delegate.isDirty = true;
        }
    }

    @Override
    public void enable(String refId) {
        if (!TextUtils.isEmpty(refId)) {
            try {
                WXComponent myComponent = WXSDKManager.getInstance().getWXRenderManager().getWXComponent(mModule.mWXSDKInstance.getInstanceId(), refId);

                synchronized (mLock) {
                    if (myComponent instanceof WXGcanvasComponent) {
                        WXGcanvasComponent mWXGCanvasComp = (WXGcanvasComponent) myComponent;
                        G2DWXGCanvasDelegate canvasDelegate = new G2DWXGCanvasDelegate(mWXGCanvasComp);
                        GComponentDelegate componentMapping = new GComponentDelegate(this, canvasDelegate);
                        mComponentMappings.put(refId, componentMapping);
                        mWXGCanvasComp.setComponentDelegate(canvasDelegate);
                    }
                    mLock.notifyAll();
                }

            } catch (Throwable e) {
            }
        }
    }

    @Override
    public void setup(String args, String refId, JSCallback callback) {
        if (TextUtils.isEmpty(args) || TextUtils.isEmpty(refId)) {
            return;
        }

        GComponentDelegate mWXGCanvasCompMapping = mComponentMappings.get(refId);

        if (null == mWXGCanvasCompMapping) {
            return;
        }

        G2DWXGCanvasDelegate mWXGCanvasComp = mWXGCanvasCompMapping.gcanvasComponent;

        if (null == mWXGCanvasComp) {
            return;
        }

        JSONObject jo;
        try {
            jo = new JSONObject(args);
            if (jo.has("renderMode")) {
                mWXGCanvasComp.getCanvasConfig().renderMode = jo.getInt("renderMode");
            }
            if (jo.has("hybridLayerType")) {
                mWXGCanvasComp.getCanvasConfig().hybridLayerType = jo.getInt("hybridLayerType");
            }

            if (jo.has("newCanvasMode")) {
                mWXGCanvasComp.getCanvasConfig().newCanvasMode = jo.getBoolean("newCanvasMode");
            }

            if (jo.has("sameLevel")) {
                mWXGCanvasComp.getCanvasConfig().sameLevel = jo.getBoolean("sameLevel");
            }

            if (jo.has("supportScroll")) {
                mWXGCanvasComp.getCanvasConfig().supportScroll = jo.getBoolean("supportScroll");
            }

            if (jo.has("clearColor")) {
                mWXGCanvasComp.getCanvasConfig().clearColor = jo.getString("clearColor");
            }
        } catch (Exception e) {
        }
    }

    @Override
    public void preLoadImage(String args, final JSCallback callBack) {
        GLog.d(TAG, "preLoadImage() args: " + args);
        if (!TextUtils.isEmpty(args)) {
            try {
                JSONArray dataArray = new JSONArray(args);
                final String url = dataArray.getString(0);
                final int id = dataArray.getInt(1);
                mImageCache.loadImage(url, id, callBack);
            } catch (Throwable e) {
                GLog.e(TAG, e.getMessage(), e);
            }
        }
    }

    @Override
    public void setHiQuality(String args, String refId) {
        GLog.d(TAG, "setHiQuality() args: " + args);
        if (!TextUtils.isEmpty(args)) {
            this.execGCanvasCMD(refId, CMD_SET_HIGH_QUALITY, args, null);
        }
    }

    @Override
    public void render(String cmd, String refId, JSCallback callBack) {
        if (!TextUtils.isEmpty(cmd) && !TextUtils.isEmpty(refId)) {
            GComponentDelegate delegate = mComponentMappings.get(refId);
//            !delegate.isEnabled.get() &&
            if ((null == delegate || (!delegate.isDestroyed())) && !mIsDestroyed.get()) {
                try {
                    long waitGap = 16;
                    long waitTime = 0;
                    synchronized (mLock) {
//                        !delegate.isEnabled.get() &&
                        while ((null == delegate || !delegate.isReady()) && !mIsDestroyed.get() && waitTime <= MAX_WAIT_TIME) {
                            mLock.wait(waitGap);
                            waitTime += waitGap;
                            delegate = mComponentMappings.get(refId);
                        }
                    }
                } catch (Throwable throwable) {
                    GLog.e(TAG, "error when render " + refId, throwable);
                }
            }

            if (null == delegate || mIsDestroyed.get()) {
                return;
            }

            if (delegate.isReady()) {
                delegate.executeRenderCahceIfExits();
                delegate.render(cmd);
            } else {
                delegate.addRenderCache(cmd);
            }
        }
    }

    @Override
    public void setDevicePixelRatio(String refId) {
        Context ctx = (mModule.mWXSDKInstance.getContext());
        if (ctx == null) {
            GLog.e(TAG, "setDevicePixelRatio error ctx == null");
            return;
        }
        Display display = ((Activity) ctx).getWindowManager().getDefaultDisplay();

        int width = display.getWidth();
        double devicePixelRatio = width / 750.0;

        GLog.d(TAG, "enable width " + width);
        GLog.d(TAG, "enable devicePixelRatio " + devicePixelRatio);

        try {
            execGCanvasCMD(refId, CMD_SET_DEVICE_PIXEL, String.valueOf(devicePixelRatio), null);
        } catch (Exception e) {
            GLog.e(TAG, "setDevicePixelRatio Exception: " + e);
        }
    }

    @Override
    public String execSyncCMD(String refId, String action, String args) {
        GComponentDelegate mapping = mComponentMappings.get(refId);
        if (null == mapping) {
            return "";
        }
        return mapping.executeSyncCmd(action, args);
    }

    @Override
    public void setContextType(String args, String refId, JSCallback callBack) {
        if (!TextUtils.isEmpty(args)) {
            this.execGCanvasCMD(refId, CMD_SET_CONTEXT_TYPE, args, callBack);
        }
    }

    @Override
    public void destroy() {
        GLog.i(TAG, "canvas module destroy!!!");

        for (Map.Entry<String, GComponentDelegate> entry : mComponentMappings.entrySet()) {
            entry.getValue().destroy();
        }

        mComponentMappings.clear();
        mUIHandler.removeCallbacksAndMessages(null);
        mIsDestroyed.set(true);
    }

    @Override
    public ContextType getContextType() {
        return ContextType._2D;
    }

    private void execGCanvasCMD(final String refId,
                                final String cmd,
                                final String args,
                                final JSCallback callback) {
        GComponentDelegate delegate = mComponentMappings.get(refId);
        if (null == delegate || delegate.isDestroyed()) {
            GLog.i(TAG, "abandon cmd:" + cmd);
            return;
        }
        if (delegate.addCmdCacheIfNotReady(cmd, args, callback)) {
            return;
        }

        delegate.executeCacheCmd();

        delegate.executeCmdImpl(cmd, args, callback);
    }

    @Override
    public void onGCanvasViewAttachToWindow(G2DWXGCanvasDelegate component, GCanvasView canvasView) {

    }

    @Override
    public void onGCanvasViewDetachedFromWindow(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
        GLog.d(TAG, "onGCanvasViewDetachedFromWindow");
        mUIHandler.removeCallbacksAndMessages(null);
    }

    @Override
    public void onGCanvasViewDestroy(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
        GLog.i(TAG, "onGCanvasViewDestroy");
    }

    @Override
    public void onGCanvasViewCreated(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
        GLog.d(TAG, "onGCanvasViewCreated");
    }

    @Override
    public void onGCanvasViewReattached(G2DWXGCanvasDelegate component, GCanvasView canvasView) {
        if (mIsDestroyed.get()) {
            return;
        }

        GComponentDelegate delegate = mComponentMappings.get(component.getComponent().getRef());

        if (null == delegate) {
            return;
        }

        if (delegate.isDestroyed()) {
            return;
        }

        if (component.isGCanvasViewPrepared()) {
            delegate.executeCmdImpl(CMD_SET_CONTEXT_TYPE, delegate.contextType, null);
        }

        if (!mImageCache.allCache().isEmpty()) {
            Log.i("GCanvasModule", "start to rebind image texture.");
            Iterator iter = mImageCache.allCache().entrySet().iterator();
            while (iter.hasNext()) {
                Map.Entry entry = (Map.Entry) iter.next();
                String url = (String) entry.getKey();
                GCanvasImageLoader.ImageInfo info = (GCanvasImageLoader.ImageInfo) entry.getValue();
                try {
                    JSONArray ja = new JSONArray();
                    ja.put(url);
                    ja.put(info.id);
                    component.getGCanvas().executeForWeex(CMD_BIND_TEXTURE, ja, null);
                } catch (Throwable e) {
                    GLog.e(TAG, e.getMessage(), e);
                }
                GLog.i("GCanvasModule", "rebind image url is " + url);
            }
        }
    }

    static class CommandCache {
        public String cmd;
        public String args;
        public JSCallback callback;

        public CommandCache(String cmd, String args, JSCallback callback) {
            this.cmd = cmd;
            this.args = args;
            this.callback = callback;
        }
    }

    static class GCanvasImageCache {
        public String url;
        public int width;
        public int height;
        public int jsCacheId;
        public int textureId;
        public AtomicBoolean isBindingCompleted = new AtomicBoolean(false);

        @Override
        public String toString() {
            return "GCanvasImageCache{" +
                    "url='" + url + '\'' +
                    ", width='" + width + '\'' +
                    ", height='" + height + '\'' +
                    '}';
        }
    }

    static class CommandCacheRunner implements Runnable {
        private WeakReference<GComponentDelegate> mDelegateRef;

        public CommandCacheRunner(GComponentDelegate delegate) {
            this.mDelegateRef = new WeakReference<>(delegate);
        }

        @Override
        public void run() {
            GComponentDelegate delegate = mDelegateRef.get();
            if (null == delegate || delegate.canvasModule == null || delegate.gcanvasComponent == null || delegate.gcanvasComponent.getGCanvas() == null) {
                return;
            }

            if (delegate.gcanvasComponent.getCurrentState().isReady()) {
                delegate.executeCacheCmd();
            } else {
                delegate.canvasModule.mUIHandler.postDelayed(this, 16);
            }
        }
    }

    static class GComponentDelegate {

        G2DModuleDelegate canvasModule;

        int sIdCounter = 0;
        volatile G2DWXGCanvasDelegate gcanvasComponent;
        CopyOnWriteArrayList<CommandCache> commandCaches = new CopyOnWriteArrayList<>();
        Map<String, GCanvasImageCache> sPicToTextureMap = new HashMap<>();
        CommandCacheRunner cacheRunner;
        HashMap<String, ArrayList<JSCallback>> mBindCallbacks = new HashMap<>();
        String contextType;
        boolean isDirty = false;
        final ArrayList<String> cacheCmd = new ArrayList<>();

        GComponentDelegate(G2DModuleDelegate module, G2DWXGCanvasDelegate component) {
            this.canvasModule = module;
            this.gcanvasComponent = component;
            this.cacheRunner = new CommandCacheRunner(this);
            this.gcanvasComponent.setWXSurfaceViewLifeListener(module);
        }

        void executeRenderCahceIfExits() {
            synchronized (cacheCmd) {
                if (!cacheCmd.isEmpty()) {
                    for (String cmd : cacheCmd) {
                        render(cmd);
                    }
                }
            }
        }

        void addRenderCache(String cmd) {
            synchronized (cacheCmd) {
                if (!cacheCmd.contains(cmd)) {
                    cacheCmd.add(cmd);
                }
            }
        }


        boolean addCmdCacheIfNotReady(String cmd, String args, JSCallback callback) {
            if (!gcanvasComponent.getCurrentState().isReady()) {
                GLog.i(TAG, "add cmd to queue:" + cmd + ", args:" + args);
                commandCaches.add(new CommandCache(cmd, args, callback));
                canvasModule.mUIHandler.removeCallbacks(cacheRunner);
                canvasModule.mUIHandler.postDelayed(cacheRunner, 16);
                return true;
            }
            return false;
        }

        void destroy() {
            gcanvasComponent.setWXSurfaceViewLifeListener(null);
            gcanvasComponent = null;
            canvasModule.mUIHandler.removeCallbacks(cacheRunner);
            commandCaches.clear();
            sIdCounter = 0;
            sPicToTextureMap.clear();
            synchronized (this) {
                mBindCallbacks.clear();
            }
        }

        synchronized void doUrlCallbacks(String url, Object resultData) {
            ArrayList<JSCallback> callbacks = mBindCallbacks.get(url);
            if (null != callbacks) {
                for (JSCallback callback : callbacks) {
                    callback.invoke(resultData);
                }
                callbacks.clear();
            }
            mBindCallbacks.remove(url);
        }

        synchronized void addUrlCallback(String url, JSCallback callback) {
            ArrayList<JSCallback> callbacks = mBindCallbacks.get(url);
            if (null != callbacks) {
                callbacks.add(callback);
            } else {
                callbacks = new ArrayList<>();
                callbacks.add(callback);
                mBindCallbacks.put(url, callbacks);
            }
        }

        void checkGCanvasView() {
            if (gcanvasComponent != null && gcanvasComponent.isGCanvasViewPrepared()) {
                return;
            }

            if (null != gcanvasComponent) {
                gcanvasComponent.prepareGCanvasView();
                canvasModule.setDevicePixelRatio(gcanvasComponent.getComponent().getRef());
            }
        }

        boolean isDestroyed() {
            //Log.i(TAG, "isDestroyed ===> component = " + gcanvasComponent + ", canvas = " + gcanvasComponent.getGCanvas() + ", state destroyed = " + gcanvasComponent.getCurrentState().isDestroyed());
            return null == gcanvasComponent || gcanvasComponent.getCurrentState().isDestroyed();
        }

        boolean isReady() {
            return null != gcanvasComponent && gcanvasComponent.getCurrentState().isReady();
        }

        String executeSyncCmd(String cmd, String args) {
            if (gcanvasComponent == null || isDestroyed()) {
                GLog.i(TAG, "abandon sync cmd:" + cmd);
                return "";
            }

            return gcanvasComponent.getGCanvas().executeSyncCmd(cmd, args);
        }

        void render(String cmd) {
            if (isDestroyed()) {
                GLog.i(TAG, "destroyed! abandon render cmd = " + cmd);
                return;
            }

            /*
            原始
            ["d5,https:\/\/img.alicdn.com\/tps\/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png,100,250,210,330,undefined,undefined,undefined,undefined;"]
            替换后
            ["d0,0,0,210,330,100,250,210,330;"]

            原始
            ["d5,https:\/\/img.alicdn.com\/tps\/TB1TFNdKVXXXXbeaXXXXXXXXXXX-210-330.png,0,0,105,165,100,250,210,330;"]
            替换后
            ["d0,0,0,105,165,100,250,210,330;"]
            */

            try {
                gcanvasComponent.getGCanvas().executeRender(CMD_RENDER, cmd, null);
            } catch (Throwable e) {
            }
        }

        private void executeCacheCmd() {
            if (!commandCaches.isEmpty() && gcanvasComponent.getCurrentState().isReady()) {
                CommandCache[] caches = new CommandCache[commandCaches.size()];
                commandCaches.toArray(caches);
                commandCaches.clear();
                for (CommandCache cache : caches) {
                    if (gcanvasComponent != null) {
                        executeCmdImpl(cache.cmd, cache.args, cache.callback);
                    }
                }
            }
        }

        private void executeCmdImpl(String cmd, String args, JSCallback callback) {
            if (null == gcanvasComponent || null == gcanvasComponent.getGCanvas()) {
                return;
            }

            checkGCanvasView();

            GCanvas fastCanvas = gcanvasComponent.getGCanvas();

            if (cmd.equals(CMD_BIND_TEXTURE)) {

                final String url = args;

                GCanvasImageCache textureCache = sPicToTextureMap.get(url);
                GCanvasImageLoader.ImageInfo imgInfo = canvasModule.mImageCache.getCache(url);
                if (null == textureCache) {
                    JSONArray ja = new JSONArray();
                    textureCache = new GCanvasImageCache();
                    sPicToTextureMap.put(url, textureCache);
                    try {
                        ja.put(url);
                        ja.put(imgInfo.id);
                        addUrlCallback(url, callback);
                        gcanvasComponent.getGCanvas().executeForWeex(CMD_BIND_TEXTURE, ja, new GCanvasResultCallback(url, imgInfo.id, this));
                    } catch (Throwable e) {
                        GLog.e(TAG, e.getMessage(), e);
                    }
                } else if (!textureCache.isBindingCompleted.get()) {
                    addUrlCallback(url, callback);
                } else {
                    if (null != callback) {
                        HashMap<String, Object> hm = new HashMap<>();
                        hm.put("url", url);
                        hm.put("id", textureCache.jsCacheId);
                        hm.put("width", textureCache.width);
                        hm.put("height", textureCache.height);

                        callback.invoke(hm);
                    }
                }
            } else if (cmd.equals(CMD_SET_CONTEXT_TYPE)) {
                GLog.d(TAG, "cmd match setContextType, args: " + args);

                try {
                    JSONArray ja = GCanvasHelper.argsToJsonArray(CMD_SET_CONTEXT_TYPE, "[" + args + "]");
                    contextType = args;
                    fastCanvas.executeForWeex(CMD_SET_CONTEXT_TYPE, ja, null);
                } catch (Exception e) {
                    GLog.e(TAG, "cmd match setContextType, Exception: " + e.toString());
                }
            } else if (cmd.equals(CMD_SET_HIGH_QUALITY)) {
                GLog.d(TAG, "cmd match setHighQuality");

                try {

                    JSONArray ja = GCanvasHelper.argsToJsonArray(CMD_SET_HIGH_QUALITY, "[" + args + "]");
                    fastCanvas.executeForWeex(CMD_SET_HIGH_QUALITY, ja, null);
                } catch (Exception e) {
                    GLog.e(TAG, "cmd match setHighQuality Exception: " + e);
                }
            } else if (cmd.equals(CMD_ENABLE)) {

                GLog.d(TAG, "cmd match enable, args: " + args);

                try {
                    JSONObject jo = new JSONObject(args);

                    JSONArray ja = GCanvasHelper.argsToJsonArray("enable", jo.get("config").toString());

                    fastCanvas.executeForWeex(CMD_ENABLE, ja, new EnableResult(this));
                } catch (Exception e) {
                    GLog.e(TAG, "match enable Exception: " + e);
                    return;
                }

                if (null != callback) {
                    callback.invoke(new HashMap<String, Object>());
                }
            } else if (cmd.equals(CMD_SET_DEVICE_PIXEL)) {
                try {
                    fastCanvas.executeForWeex(CMD_SET_DEVICE_PIXEL, GCanvasHelper.argsToJsonArray(CMD_SET_DEVICE_PIXEL, "[" + args + "]"), null);
                } catch (Throwable e) {
                }
            } else if (cmd.equals(CMD_RESET)) {
                try {
                    fastCanvas.executeForWeex(CMD_RESET, null, null);
                } catch (Throwable e) {
                }
            }
        }
    }

    static class EnableResult extends GCanvasResult {
        private GComponentDelegate mGCanvasDelegate;

        public EnableResult(GComponentDelegate mGCanvasDelegate) {
            this.mGCanvasDelegate = mGCanvasDelegate;
        }

        @Override
        protected void onResult(ResultCode resultCode, Object resultMessage) {
            GLog.d("WeexGcanvasPluginResult", "onResult resultCode " + resultCode);
            if (ResultCode.OK.equals(resultCode)) {
//                this.mGCanvasDelegate.isEnabled.set(true);
            }
        }
    }


    static class GCanvasResultCallback extends GCanvasResult {

        private GComponentDelegate delegate;
        private String mUrl;
        private int mId;

        public GCanvasResultCallback(String url, int id, GComponentDelegate componentDelegate) {
            this.delegate = componentDelegate;
            this.mUrl = url;
            this.mId = id;
        }

        @Override
        protected void onResult(ResultCode resultCode, Object resultMessage) {
            GLog.d("WeexGcanvasPluginResult", "onResult resultCode " + resultCode);
            if (delegate.isDestroyed() || delegate.canvasModule.mIsDestroyed.get()) {
                return;
            }

            HashMap<String, Object> resultData = new HashMap<>();

            if (ResultCode.OK.equals(resultCode) && resultMessage instanceof GCanvasMessage) {
                GCanvasMessage canvasMessage = (GCanvasMessage) resultMessage;
                GCanvasImageCache cache = delegate.sPicToTextureMap.get(mUrl);
                if (null == cache) {
                    cache = new GCanvasImageCache();
                    delegate.sPicToTextureMap.put(mUrl, cache);
                }
                cache.url = mUrl;
                cache.jsCacheId = mId;
                cache.textureId = canvasMessage.textureID;
                cache.width = canvasMessage.width;
                cache.height = canvasMessage.height;
                cache.isBindingCompleted.set(true);
                resultData.put("src", mUrl);
                resultData.put("width", canvasMessage.width);
                resultData.put("height", canvasMessage.height);
                resultData.put("id", mId);
            } else if (ResultCode.ERROR.equals(resultCode)) {
                resultData.put("error", resultMessage);
            }

            delegate.doUrlCallbacks(mUrl, resultData);
        }
    }
}
