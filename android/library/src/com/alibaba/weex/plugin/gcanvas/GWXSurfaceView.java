package com.alibaba.weex.plugin.gcanvas;

import android.content.Context;
import android.view.MotionEvent;

import com.taobao.gcanvas.surface.GSurfaceView;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.ui.view.gesture.WXGesture;
import com.taobao.weex.ui.view.gesture.WXGestureObservable;

/**
 * @author ertong
 *         create at 2017/9/7
 */

public class GWXSurfaceView extends GSurfaceView implements WXGestureObservable {

    private WXGesture wxGesture;
    private WXGCanvasLigntningComponent wxComponent;

    public GWXSurfaceView(Context context, WXGCanvasLigntningComponent component) {
        super(context, component.getRef());
        this.wxComponent = component;
    }

    @Override
    public void registerGestureListener(WXGesture wxGesture) {
        this.wxGesture = wxGesture;
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        boolean result = super.onTouchEvent(event);
        if (wxGesture != null) {
            result |= wxGesture.onTouch(this, event);
        }
        return result;
    }

    public void sendEvent(){
        if(wxComponent != null){
            GLog.d("start to send event in GWXSurfaceView");
            wxComponent.sendEvent();
        }
    }
}
