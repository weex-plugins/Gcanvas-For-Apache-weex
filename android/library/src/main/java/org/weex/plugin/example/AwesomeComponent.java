package org.weex.plugin.example;


import android.view.View;

import com.alibaba.weex.plugin.annotation.WeexComponent;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXVContainer;


@WeexComponent(names = {"awesome","amazing"})
public class AwesomeComponent extends WXComponent<View> {
    public AwesomeComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }
}
