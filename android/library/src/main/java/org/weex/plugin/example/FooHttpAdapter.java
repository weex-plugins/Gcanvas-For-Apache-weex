package org.weex.plugin.example;


import com.alibaba.weex.plugin.annotation.WeexAdapter;
import com.taobao.weex.adapter.IWXHttpAdapter;
import com.taobao.weex.common.WXRequest;


@WeexAdapter(type = IWXHttpAdapter.class)
public class FooHttpAdapter implements IWXHttpAdapter {
    @Override
    public void sendRequest(WXRequest request, OnHttpListener listener) {

    }
}
