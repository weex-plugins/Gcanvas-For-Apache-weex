package com.taobao.weex.actionsheet;

import android.support.v4.app.FragmentActivity;

import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.annotations.WeexModule;
import com.taobao.weex.bridge.JSCallback;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by moxun on 17/2/10.
 */

@WeexModule(name = "actionSheet")
public class WXActionSheetModule extends WXSDKEngine.DestroyableModule {

    private WXActionSheet actionSheet;

    @JSMethod
    public void create(Map<String, Object> options, final JSCallback callback) {
        Object title = options.get("title");
        Object message = options.get("message");
        Object items = options.get("items");
        if (mWXSDKInstance.getContext() instanceof FragmentActivity) {
            WXActionSheet.Builder builder = WXActionSheet.createBuilder((FragmentActivity) mWXSDKInstance.getContext());
            if (title != null) {
                builder.setTitle(String.valueOf(title));
            }

            if (message != null) {
                builder.setMessage(String.valueOf(message));
            }

            if (items != null && items instanceof List) {
                builder.setItems((List<Map<String, Object>>) items);
            }

            builder.setListener(new WXActionSheet.ActionListener() {
                @Override
                public void onSelected(int index, String content) {
                    Map<String, Object> event = new HashMap<>(2);
                    event.put("index", index);
                    event.put("message", content);

                    Map<String, Object> ret = new HashMap<>(2);
                    ret.put("result", "success");
                    ret.put("data", event);
                    callback.invoke(ret);
                }

                @Override
                public void onCancel() {
                    Map<String, Object> ret = new HashMap<>(2);
                    ret.put("result", "cancel");
                    ret.put("data", null);
                    callback.invoke(ret);
                }

                @Override
                public void onError(String message) {
                    Map<String, Object> ret = new HashMap<>(2);
                    ret.put("result", "error");
                    ret.put("data", message);
                    callback.invoke(ret);
                }
            });

            actionSheet = builder.buildAndShow();
        }
    }

    @Override
    public void destroy() {
        actionSheet.dismiss();
    }
}
