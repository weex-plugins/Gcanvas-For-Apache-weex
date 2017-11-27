package com.alibaba.weex.plugin.gcanvas;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.Drawable;
import android.util.Log;

import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;
import com.taobao.gcanvas.util.GCanvasBase64;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.bridge.JSCallback;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author ertong
 *         create at 2017/8/14
 */

public class GCanvasImageLoader {

    private static final String TAG = GCanvasImageLoader.class.getSimpleName();

    private HashMap<String, ImageInfo> mImageIdCache = new HashMap<>();

    private HashMap<String, ArrayList<JSCallback>> mCallbacks = new HashMap<>();

    private Target mTarget;

    public static class ImageInfo {
        static final int IDLE = -1;
        static final int LOADING = 0x100;
        static final int LOADED = 0x200;
        public int width;
        public int height;
        public int id;
        public AtomicInteger status = new AtomicInteger(IDLE);
    }

    public HashMap<String, ImageInfo> allCache() {
        return mImageIdCache;
    }

    public ImageInfo getCache(String url) {
        return mImageIdCache.get(url);
    }

    public void loadImage(final String url, final int id, final JSCallback callBack, Context context) {
        try {
            final HashMap<String, Object> resultMap = new HashMap<>();
//            if (!(url.startsWith("http://") || url.startsWith("https://"))) {
            if (url.startsWith("data:image")) {
                Bitmap bmp = handleBase64Texture(url.substring(url.indexOf("base64,")+"base64,".length()));
                if (bmp != null) {
                    resultMap.put("id", id);
                    resultMap.put("url", url);
                    resultMap.put("width", bmp.getWidth());
                    resultMap.put("height", bmp.getHeight());
                } else {
                    resultMap.put("error", "process base64 failed,url=" + url);
                }

                callBack.invoke(resultMap);

                return;
            }

            ImageInfo imgInfo = mImageIdCache.get(url);

            if (null == imgInfo) {
                imgInfo = new ImageInfo();
                mImageIdCache.put(url, imgInfo);
            }
            if (imgInfo.status.get() == GCanvasLightningModule.ImageInfo.IDLE) {
                imgInfo.status.set(GCanvasLightningModule.ImageInfo.LOADING);
                imgInfo.id = id;
                ArrayList<JSCallback> callbacks = mCallbacks.get(url);
                if (null == callbacks) {
                    callbacks = new ArrayList<>();
                    mCallbacks.put(url, callbacks);
                }
                callbacks.add(callBack);
                Log.e("luanxuan","start ot load!");
                mTarget = new Target() {
                    @Override
                    public void onBitmapLoaded(Bitmap bitmap, Picasso.LoadedFrom from) {
                        Log.e("luanxuan","on bitmap load!");
                        mTarget = null;
                        if (null != bitmap) {
                            ImageInfo imageInfo = mImageIdCache.get(url);
                            imageInfo.width = bitmap.getWidth();
                            imageInfo.height = bitmap.getHeight();
                            resultMap.put("id", id);
                            resultMap.put("url", url);
                            resultMap.put("width", imageInfo.width);
                            resultMap.put("height", imageInfo.height);
                            imageInfo.status.set(GCanvasLightningModule.ImageInfo.LOADED);
                            try {
                                ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
                                if (null != callbackList) {
                                    for (JSCallback callback : callbackList) {
                                        callback.invoke(resultMap);
                                    }
                                }
                            } catch (Throwable throwable) {
                                imageInfo.status.set(GCanvasLightningModule.ImageInfo.IDLE);
                                callBack.invoke(resultMap);
                            }
                        } else {
                            resultMap.put("error", "bitmap load failed");
                            try {
                                ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
                                if (null != callbackList) {
                                    for (JSCallback callback : callbackList) {
                                        callback.invoke(resultMap);
                                    }
                                }
                            } catch (Throwable throwable) {
                                callBack.invoke(resultMap);
                            }
                        }
                    }

                    @Override
                    public void onBitmapFailed(Drawable errorDrawable) {
                        mTarget = null;
                        Log.e("luanxuan","on bitmap load failed!");
                        resultMap.put("error", "bitmap load failed");
                        try {
                            ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
                            if (null != callbackList) {
                                for (JSCallback callback : callbackList) {
                                    callback.invoke(resultMap);
                                }
                            }
                        } catch (Throwable throwable) {
                            callBack.invoke(resultMap);
                        }
                    }

                    @Override
                    public void onPrepareLoad(Drawable placeHolderDrawable) {

                    }
                };
                Picasso.with(context).load(url).into(mTarget);
//                Phenix.instance().load(url).succListener(new IPhenixListener<SuccPhenixEvent>() {
//                    @Override
//                    public boolean onHappen(SuccPhenixEvent succPhenixEvent) {
//                        Bitmap bitmap = succPhenixEvent.getDrawable().getBitmap();
//                        if (null != bitmap) {
//                            ImageInfo imageInfo = mImageIdCache.get(url);
//                            imageInfo.width = bitmap.getWidth();
//                            imageInfo.height = bitmap.getHeight();
//                            resultMap.put("id", id);
//                            resultMap.put("url", url);
//                            resultMap.put("width", imageInfo.width);
//                            resultMap.put("height", imageInfo.height);
//                            imageInfo.status.set(GCanvasLightningModule.ImageInfo.LOADED);
//                            try {
//                                ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
//                                if (null != callbackList) {
//                                    for (JSCallback callback : callbackList) {
//                                        callback.invoke(resultMap);
//                                    }
//                                }
//                            } catch (Throwable throwable) {
//                                imageInfo.status.set(GCanvasLightningModule.ImageInfo.IDLE);
//                                callBack.invoke(resultMap);
//                            }
//                        } else {
//                            resultMap.put("error", "bitmap load failed");
//                            try {
//                                ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
//                                if (null != callbackList) {
//                                    for (JSCallback callback : callbackList) {
//                                        callback.invoke(resultMap);
//                                    }
//                                }
//                            } catch (Throwable throwable) {
//                                callBack.invoke(resultMap);
//                            }
//                        }
//                        return true;
//                    }
//                }).failListener(new IPhenixListener<FailPhenixEvent>() {
//                    @Override
//                    public boolean onHappen(FailPhenixEvent failPhenixEvent) {
//                        resultMap.put("error", "bitmap load failed");
//                        try {
//                            ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
//                            if (null != callbackList) {
//                                for (JSCallback callback : callbackList) {
//                                    callback.invoke(resultMap);
//                                }
//                            }
//                        } catch (Throwable throwable) {
//                            callBack.invoke(resultMap);
//                        }
//                        return true;
//                    }
//                }).fetch();
            } else if (GCanvasLightningModule.ImageInfo.LOADING == imgInfo.status.get()) {
                ArrayList<JSCallback> callbacks = mCallbacks.get(url);
                if (null == callbacks) {
                    callbacks = new ArrayList<>();
                    mCallbacks.put(url, callbacks);
                }

                callbacks.add(callBack);
            } else if (GCanvasLightningModule.ImageInfo.LOADED == imgInfo.status.get()) {
                resultMap.put("id", id);
                resultMap.put("url", url);
                resultMap.put("width", imgInfo.width);
                resultMap.put("height", imgInfo.height);
                ArrayList<JSCallback> callbackList = mCallbacks.remove(url);
                if (null != callbackList) {
                    for (JSCallback cb : callbackList) {
                        cb.invoke(resultMap);
                    }
                }
                callBack.invoke(resultMap);
            }
        } catch (Throwable e) {
            GLog.e(TAG, e.getMessage(), e);
        }
    }

    public Bitmap handleBase64Texture(String url) {
        try {
            byte[] decodedBytes = GCanvasBase64.decode(url.getBytes());
            Bitmap bmp = BitmapFactory.decodeByteArray(decodedBytes, 0,
                    decodedBytes.length);

            return bmp;
        } catch (Throwable e) {
            GLog.d("error in processing base64Texture,error=" + e);
        }

        return null;
    }
}
