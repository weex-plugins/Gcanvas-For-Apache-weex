package com.alibaba.weex.plugin.gcanvas.g3d;

import android.text.TextUtils;

import com.alibaba.weex.plugin.gcanvas.GCanvasImageLoader;
import com.alibaba.weex.plugin.gcanvas.GcanvasModule;
import com.alibaba.weex.plugin.gcanvas.WXGcanvasComponent;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.ui.component.WXComponent;

import org.json.JSONArray;

import java.util.HashMap;

/**
 * @author ertong
 *         create at 2017/8/10
 */

public class G3DModuleDelegate implements GcanvasModule.IGCanvasModuleDelegate {

    private static final String TAG = "G3DModuleDelegate";

    private GcanvasModule mModule;

    private GCanvasImageLoader mImageLoader = new GCanvasImageLoader();

    private HashMap<String, G3DWXGCanvasDelegate> mComponentMappings = new HashMap<>(1);

    public G3DModuleDelegate(GcanvasModule mModule) {
        this.mModule = mModule;
    }

    @Override
    public void bindImageTexture(String src, String refId, JSCallback callback) {

    }

    @Override
    public void resetComponent(String refId) {

    }

    @Override
    public void enable(String refId) {
        if (!TextUtils.isEmpty(refId)) {
            try {
                WXComponent myComponent = WXSDKManager.getInstance().getWXRenderManager().getWXComponent(mModule.mWXSDKInstance.getInstanceId(), refId);

                if (myComponent instanceof WXGcanvasComponent) {
                    WXGcanvasComponent mWXGCanvasComp = (WXGcanvasComponent) myComponent;
                    G3DWXGCanvasDelegate canvasDelegate = new G3DWXGCanvasDelegate(mWXGCanvasComp);
                    mComponentMappings.put(refId, canvasDelegate);
                    mWXGCanvasComp.setComponentDelegate(canvasDelegate);
                }
            } catch (Throwable e) {
            }
        }
    }

    @Override
    public void setup(String args, String refId, JSCallback callback) {

    }

    @Override
    public void preLoadImage(String args, JSCallback callBack) {
        try {
            JSONArray dataArray = new JSONArray(args);
            final String url = dataArray.getString(0);
            final int id = dataArray.getInt(1);
            mImageLoader.loadImage(url, id, callBack);
        } catch (Throwable e) {
            GLog.e(TAG, e.getMessage(), e);
        }
    }

    @Override
    public void setHiQuality(String args, String refId) {

    }

    @Override
    public void render(String cmd, String refId, JSCallback callBack) {

    }

    @Override
    public void setDevicePixelRatio(String refId) {

    }

    @Override
    public String execSyncCMD(String refId, String action, String args) {
        return null;
    }

    @Override
    public void setContextType(String args, String refId, JSCallback callBack) {
    }

    @Override
    public void destroy() {

    }

    @Override
    public ContextType getContextType() {
        return ContextType._3D;
    }
}
