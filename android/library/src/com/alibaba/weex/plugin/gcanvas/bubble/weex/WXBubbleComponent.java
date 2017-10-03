package com.alibaba.weex.plugin.gcanvas.bubble.weex;

import android.content.Context;
import android.support.annotation.NonNull;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.serializer.ObjectArrayCodec;
import com.alibaba.weex.plugin.annotation.WeexComponent;
import com.alibaba.weex.plugin.gcanvas.bubble.BubbleContainer;
import com.alibaba.weex.plugin.gcanvas.bubble.BubbleEventCenter;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.ComponentCreator;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;
import com.taobao.weex.utils.WXUtils;
import com.taobao.weex.utils.WXViewUtils;

import java.lang.reflect.InvocationTargetException;
import java.util.HashMap;

/**
 * @author ertong
 *         create at 2017/9/21
 */
@WeexComponent(names = {"bubble"})
public class WXBubbleComponent extends WXVContainer<BubbleContainer> {

    private static final String TAG = WXBubbleComponent.class.getSimpleName();

    private static final float sBasicWidth = 375.0f;

    private static final float[][] sDefaultPositions = {
            /**
             * 1 2 3 4
             * 5 6 7 8
             **/
            // 1
            {20.0f / sBasicWidth, 13.0f / sBasicWidth, 77f / sBasicWidth, 83f / sBasicWidth},
            // 2
            {105.0f / sBasicWidth, 6.0f / sBasicWidth, 125 / sBasicWidth, 134 / sBasicWidth},
            // 3
            {238 / sBasicWidth, 26 / sBasicWidth, 100 / sBasicWidth, 107 / sBasicWidth},
            // 4
            {346 / sBasicWidth, 38 / sBasicWidth, 77 / sBasicWidth, 83 / sBasicWidth},
            // 5
            {-19.0f / sBasicWidth, 102 / sBasicWidth, 125 / sBasicWidth, 134 / sBasicWidth},
            // 6
            {114.0f / sBasicWidth, 145 / sBasicWidth, 77 / sBasicWidth, 83 / sBasicWidth},
            // 7
            {199 / sBasicWidth, 137 / sBasicWidth, 100 / sBasicWidth, 107 / sBasicWidth},
            // 8
            {307 / sBasicWidth, 127 / sBasicWidth, 100 / sBasicWidth, 107 / sBasicWidth}
    };

    private BubbleContainer mBubbleContainer;

    public WXBubbleComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, String instanceId, boolean isLazy) {
        super(instance, dom, parent, instanceId, isLazy);
    }

    public WXBubbleComponent(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) {
        super(instance, node, parent, lazy);
    }

    public WXBubbleComponent(WXSDKInstance instance, WXDomObject node, WXVContainer parent) {
        super(instance, node, parent);
    }

    public static class Creator implements ComponentCreator {
        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent, boolean lazy) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXBubbleComponent(instance, node, parent, lazy);
        }

        public WXComponent createInstance(WXSDKInstance instance, WXDomObject node, WXVContainer parent) throws IllegalAccessException, InvocationTargetException, InstantiationException {
            return new WXBubbleComponent(instance, node, parent);
        }
    }

    @Override
    protected BubbleContainer initComponentHostView(@NonNull Context context) {
        mBubbleContainer = new BubbleContainer(context);
        mBubbleContainer.setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        return mBubbleContainer;
    }

    @WXComponentProp(name = "positions")
    public void setPositions(float[][] positions) {
        if (null != mBubbleContainer && null != positions) {
            mBubbleContainer.setPositions(positions);
        }
    }

    @WXComponentProp(name = "rows")
    public void setRows(int rows) {
        if (null != mBubbleContainer && rows > 0) {
            mBubbleContainer.setRows(rows);
        }
    }

    @Override
    protected void addSubView(View child, int index) {
        if (child != null && this.getRealView() != null && this.getRealView() == mBubbleContainer) {
            int count = this.getRealView().getChildCount();
            index = index >= count ? -1 : index;
            mBubbleContainer.addView(child, index);
        }
    }


    @Override
    protected boolean setProperty(String key, Object param) {
        switch (key) {
            case "positions":
                String value = WXUtils.getString(param, null);
                if (value != null) {
                    try {
                        JSONArray data = (JSONArray) JSONArray.parse(value);
                        final int length = data.size();
                        float[][] positions = new float[length][];
                        for (int i = 0; i < length; i++) {
                            JSONArray posData = data.getJSONArray(i);
                            final int coordLength = posData.size();
                            positions[i] = new float[coordLength];
                            for (int j = 0; j < coordLength; j++) {
                                positions[i][j] = WXViewUtils.getRealPxByWidth(posData.getFloat(j), 750);
                            }
                        }
                        if (null != mBubbleContainer) {
                            mBubbleContainer.setPositions(positions);
                        }
                    } catch (Throwable e) {

                    }
                }
                return true;

            case "rows":
                int rows = WXUtils.getInt(param);
                if (null != mBubbleContainer) {
                    mBubbleContainer.setRows(rows);
                }
                return true;

            case "nails":
                String nailStr = WXUtils.getString(param, null);
                if (nailStr != null) {
                    try {
                        JSONArray data = (JSONArray) JSONArray.parse(nailStr);
                        final int length = data.size();
                        if (length != 2) {
                            Log.e(TAG, "nail array length must be 2, 0 is head, 1 is tail. example:[ [[head_nail1],[head_nail2]], [[tail_nail1],[tail_nail2]] ]");
                            return false;
                        }

                        for (int i = 0; i < length; i++) {
                            JSONArray nails = data.getJSONArray(i);
                            final int nailLength = nails.size();
                            float[][] positions = new float[nailLength][];
                            for (int j = 0; j < nailLength; j++) {
                                JSONArray nailData = nails.getJSONArray(j);
                                final int coordLength = nailData.size();
                                positions[j] = new float[coordLength];
                                for (int k = 0; k < coordLength; k++) {
                                    positions[j][k] = WXViewUtils.getRealPxByWidth(nailData.getFloat(k), 750);
                                }
                            }
                            if (null != mBubbleContainer) {
                                if (i == 0) {
                                    mBubbleContainer.setHeadNails(positions);
                                } else {
                                    mBubbleContainer.setTailNails(positions);
                                }
                            }
                        }
                    } catch (Throwable e) {

                    }
                }
                return true;
        }
        return super.setProperty(key, param);
    }


    @JSMethod
    public void registerCallback(final JSCallback startCallback, final JSCallback endCallback, final JSCallback bubbleClickCallback) {
        if (mBubbleContainer != null) {
            BubbleContainer.IAnimationListener animationListener = new BubbleContainer.IAnimationListener() {
                @Override
                public void onAnimationStart(BubbleEventCenter.AnimationType type) {
                    HashMap<String, Object> result = new HashMap<>();
                    if (type == BubbleEventCenter.AnimationType.MoveLeft) {
                        result.put("direction", "left");
                        result.put("type", "swipe");
                    } else if (type == BubbleEventCenter.AnimationType.MoveRight) {
                        result.put("direction", "right");
                        result.put("type", "swipe");
                    } else if (type == BubbleEventCenter.AnimationType.BounceLeft) {
                        result.put("direction", "left");
                        result.put("type", "bounce");
                    } else if (type == BubbleEventCenter.AnimationType.BounceRight) {
                        result.put("direction", "right");
                        result.put("type", "bounce");
                    }
                    startCallback.invoke(result);
                }

                @Override
                public void onAnimationEnd(BubbleEventCenter.AnimationType type) {
                    HashMap<String, Object> result = new HashMap<>();
                    if (type == BubbleEventCenter.AnimationType.MoveLeft) {
                        result.put("direction", "left");
                        result.put("type", "swipe");
                    } else if (type == BubbleEventCenter.AnimationType.MoveRight) {
                        result.put("direction", "right");
                        result.put("type", "swipe");
                    } else if (type == BubbleEventCenter.AnimationType.BounceLeft) {
                        result.put("direction", "left");
                        result.put("type", "bounce");
                    } else if (type == BubbleEventCenter.AnimationType.BounceRight) {
                        result.put("direction", "right");
                        result.put("type", "bounce");
                    }
                    endCallback.invoke(result);
                }
            };
            mBubbleContainer.addAnimationCallback(animationListener);
            BubbleContainer.IBubbleClickListener bubbleClickListener = new BubbleContainer.IBubbleClickListener() {
                @Override
                public void onClick(int id) {
                    HashMap<String, Object> result = new HashMap<>();
                    result.put("bubbleId", id);
                    bubbleClickCallback.invoke(result);
                }
            };
            mBubbleContainer.addBubbleClickCallback(bubbleClickListener);

        }
    }

    @JSMethod
    public void replaceBubble(int id, int position) {
        if (mBubbleContainer != null) {
            mBubbleContainer.replaceBubble(position, id);
        }
    }

}


