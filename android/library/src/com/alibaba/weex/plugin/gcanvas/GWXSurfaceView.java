package com.alibaba.weex.plugin.gcanvas;

import android.content.Context;
import android.view.MotionEvent;

import com.taobao.gcanvas.surface.GSurfaceView;
import com.taobao.weex.ui.view.gesture.WXGesture;
import com.taobao.weex.ui.view.gesture.WXGestureObservable;

/**
 * @author ertong
 *         create at 2017/9/7
 */

public class GWXSurfaceView extends GSurfaceView implements WXGestureObservable {

    private WXGesture wxGesture;

    public GWXSurfaceView(Context context, String id) {
        super(context, id);
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
}
