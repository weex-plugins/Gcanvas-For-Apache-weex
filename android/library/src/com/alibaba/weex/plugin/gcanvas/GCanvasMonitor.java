package com.alibaba.weex.plugin.gcanvas;

import com.alibaba.mtl.appmonitor.AppMonitor;

/**
 * Created by yiling.wj on 2017/8/4.
 */

public class GCanvasMonitor {
    private static final String MONITOR_MODULE = "weex";
    private static final String MONITOR_POINT_GCANVAS_ERROR = "GCanvasError";

    /**
     * 上传 GCanvas 异常信息
     * @param info        其它信息
     * @param errorCode   错误码
     * @param errorMsg    错误信息
     */
    public static void commitError(String info, String errorCode, String errorMsg){
        try {
            AppMonitor.Alarm.commitFail(MONITOR_MODULE, MONITOR_POINT_GCANVAS_ERROR, info, errorCode, errorMsg);
        } catch (Throwable e) {
        }
    }
}
