package org.weex.plugin.example;

import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

@WeexModule(name = "testPlugin")
public class TestPluginModule extends WXModule {
    @JSMethod
    public String syncRet(String param) {
        return param;
    }

    @JSMethod
    public void asyncRet(String param, JSCallback callback) {
        callback.invoke(param);
    }
}
