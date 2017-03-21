package com.taobao.weex.actionsheet;

import android.app.Activity;
import android.content.Context;
import android.content.res.Resources;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.text.TextUtils;
import android.util.Pair;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;
import android.view.inputmethod.InputMethodManager;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by moxun on 17/2/10.
 */

public class WXActionSheet extends Fragment {
    private static final String KEY_TITLE = "TITLE";
    private static final String KEY_MESSAGE = "MESSAGE";
    private static final String KEY_ITEMS = "ITEMS";
    private static final String KEY_HAS_DISMISSED = "HAS_DISMISSED";
    private static final String SEPARATOR = "@##@";
    private boolean hasDismissed = true;
    private boolean hasCancelItemAdded = false;
    private View backgroundLayer;
    private ViewGroup decor;
    private View actionSheetView;
    private LinearLayout sheetContainer;
    private ActionListener actionListener;

    private String titleText;
    private String messageText;
    private List<Pair<String, String>> actionItems;

    private static final int TRANSLATE_DURATION = 200;
    private static final int ALPHA_DURATION = 300;

    private static final int COLOR_TITLE = Color.rgb(143, 143, 143);
    private static final int COLOR_LINE = Color.rgb(219, 219, 219);
    private static final int COLOR_ITEM_NORMAL = Color.rgb(0, 122, 252);
    private static final int COLOR_ITEM_ALERT = Color.rgb(255, 59, 48);

    public void display(final FragmentManager manager, final String tag) {
        if (!hasDismissed || manager.isDestroyed()) {
            return;
        }
        hasDismissed = false;
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                FragmentTransaction transaction = manager.beginTransaction();
                transaction.add(WXActionSheet.this, tag);
                transaction.addToBackStack(null);
                transaction.commitAllowingStateLoss();
            }
        });
    }

    public void dismiss() {
        if (hasDismissed) {
            return;
        }
        hasDismissed = true;
        new Handler().post(new Runnable() {
            @Override
            public void run() {
                getFragmentManager().popBackStack();
                FragmentTransaction ft = getFragmentManager().beginTransaction();
                ft.remove(WXActionSheet.this);
                ft.commitAllowingStateLoss();
            }
        });
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (savedInstanceState != null) {
            hasDismissed = savedInstanceState.getBoolean(KEY_HAS_DISMISSED);
        }
        prepareArguments();
    }

    private void prepareArguments() {
        Bundle bundle = getArguments();
        if (bundle != null) {
            titleText = bundle.getString(KEY_TITLE);
            messageText = bundle.getString(KEY_MESSAGE);
            actionItems = new ArrayList<>();
            ArrayList<String> items = bundle.getStringArrayList(KEY_ITEMS);
            if (items != null) {
                for (String item : items) {
                    String[] splited = item.split(SEPARATOR);
                    if (splited.length == 2) {
                        actionItems.add(Pair.create(splited[0], splited[1]));
                    }
                }
            }
        }
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        InputMethodManager imm = (InputMethodManager) getActivity()
                .getSystemService(Context.INPUT_METHOD_SERVICE);
        if (imm.isActive()) {
            View focusView = getActivity().getCurrentFocus();
            if (focusView != null) {
                imm.hideSoftInputFromWindow(focusView.getWindowToken(), 0);
            }
        }

        actionSheetView = createRoot();
        decor = (ViewGroup) getActivity().getWindow().getDecorView();

        attachItems();

        decor.addView(actionSheetView);

        backgroundLayer.startAnimation(createAlphaInAnimation());
        sheetContainer.startAnimation(createTranslationInAnimation());
        return super.onCreateView(inflater, container, savedInstanceState);
    }

    private View createRoot() {
        FrameLayout parent = new FrameLayout(getActivity());
        parent.setLayoutParams(new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        backgroundLayer = new View(getActivity());
        backgroundLayer.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        backgroundLayer.setBackgroundColor(Color.argb(136, 0, 0, 0));
        backgroundLayer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dismiss();
                if (actionListener != null) {
                    actionListener.onCancel();
                }
            }
        });

        sheetContainer = new LinearLayout(getActivity());
        FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        params.gravity = Gravity.BOTTOM;
        sheetContainer.setLayoutParams(params);
        sheetContainer.setOrientation(LinearLayout.VERTICAL);
        sheetContainer.setPadding(dp2px(8), dp2px(8), dp2px(8), dp2px(8));

        parent.setPadding(0, 0, 0, getNavBarHeight(getActivity()));
        parent.addView(backgroundLayer);
        parent.addView(sheetContainer);
        return parent;
    }

    private void attachItems() {
        hasCancelItemAdded = false;
        ensureTitle();
        addItem();
    }

    private void ensureTitle() {
        if (!TextUtils.isEmpty(titleText) || !TextUtils.isEmpty(messageText)) {
            LinearLayout titleContainer = new LinearLayout(getActivity());
            titleContainer.setOrientation(LinearLayout.VERTICAL);
            titleContainer.setGravity(Gravity.CENTER);
            titleContainer.setBackgroundColor(Color.WHITE);
            titleContainer.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp2px(56)));

            if (!TextUtils.isEmpty(titleText)) {
                TextView title = new TextView(getActivity());
                title.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
                title.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 14);
                title.setText(titleText);
                title.setGravity(Gravity.CENTER_HORIZONTAL);
                title.setTextColor(COLOR_TITLE);
                title.getPaint().setFakeBoldText(true);
                titleContainer.addView(title);
            }

            if (!TextUtils.isEmpty(messageText)) {
                TextView message = new TextView(getActivity());
                message.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));
                message.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 12);
                message.setGravity(Gravity.CENTER_HORIZONTAL);
                message.setText(messageText);
                message.setTextColor(COLOR_TITLE);
                titleContainer.addView(message);
            }

            titleContainer.setClickable(true);
            titleContainer.setFocusableInTouchMode(true);

            sheetContainer.addView(titleContainer);
            sheetContainer.addView(createLine());
        }
    }

    private void addItem() {
        for (int i = 0; i < actionItems.size(); i++) {
            View item = makeItem(actionItems.get(i), i);
            if (item != null) {
                sheetContainer.addView(item);
                sheetContainer.addView(createLine());
            }
        }

        for (int i = 0; i < actionItems.size(); i++) {
            Pair<String, String> item = actionItems.get(i);
            if ("1".equals(item.first)) {
                if (hasCancelItemAdded) {
                    if (actionListener != null) {
                        actionListener.onError("Can only add most 1 item with type 1");
                    }
                    return;
                }
                TextView textView = createItemBase();
                textView.setText(item.second);
                textView.setTextColor(COLOR_ITEM_NORMAL);
                textView.getPaint().setFakeBoldText(true);
                LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp2px(48));
                lp.topMargin = dp2px(8);
                textView.setLayoutParams(lp);
                textView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (actionListener != null) {
                            actionListener.onCancel();
                            dismiss();
                        }
                    }
                });
                sheetContainer.addView(textView);
                hasCancelItemAdded = true;
            }
        }
    }

    private TextView createItemBase() {
        TextView textView = new TextView(getActivity());
        textView.setBackgroundColor(Color.WHITE);
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_PX, dp2px(18));
        return textView;
    }

    private View makeItem(final Pair<String, String> item, final int index) {
        TextView textView = createItemBase();
        textView.setText(item.second);

        if ("2".equals(item.first)) {
            textView.setTextColor(COLOR_ITEM_ALERT);
        } else if ("0".equals(item.first)) {
            textView.setTextColor(COLOR_ITEM_NORMAL);
        } else {
            return null;
        }
        textView.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp2px(48)));
        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (actionListener != null) {
                    actionListener.onSelected(index, item.second);
                    dismiss();
                }
            }
        });

        return textView;
    }

    private View createLine() {
        View line = new View(getActivity());
        line.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, 1));
        line.setBackgroundColor(COLOR_LINE);
        return line;
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        outState.putBoolean(KEY_HAS_DISMISSED, hasDismissed);
    }

    public int getNavBarHeight(Context context) {
        int navigationBarHeight = 0;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            Resources rs = context.getResources();
            int id = rs.getIdentifier("navigation_bar_height", "dimen", "android");
            if (id > 0 && checkDeviceHasNavigationBar(context)) {
                navigationBarHeight = rs.getDimensionPixelSize(id);
            }
        }
        return navigationBarHeight;
    }

    private boolean checkDeviceHasNavigationBar(Context context) {
        boolean hasNavigationBar = false;
        Resources rs = context.getResources();
        int id = rs.getIdentifier("config_showNavigationBar", "bool", "android");
        if (id > 0) {
            hasNavigationBar = rs.getBoolean(id);
        }
        try {
            Class systemPropertiesClass = Class.forName("android.os.SystemProperties");
            Method m = systemPropertiesClass.getMethod("get", String.class);
            String navBarOverride = (String) m.invoke(systemPropertiesClass, "qemu.hw.mainkeys");
            if ("1".equals(navBarOverride)) {
                hasNavigationBar = false;
            } else if ("0".equals(navBarOverride)) {
                hasNavigationBar = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hasNavigationBar;
    }

    public void setActionListener(ActionListener actionListener) {
        this.actionListener = actionListener;
    }

    private Animation createTranslationInAnimation() {
        int type = TranslateAnimation.RELATIVE_TO_SELF;
        TranslateAnimation an = new TranslateAnimation(type, 0, type, 0, type,
                1, type, 0);
        an.setDuration(TRANSLATE_DURATION);
        return an;
    }

    private Animation createAlphaInAnimation() {
        AlphaAnimation an = new AlphaAnimation(0, 1);
        an.setDuration(ALPHA_DURATION);
        return an;
    }

    private Animation createTranslationOutAnimation() {
        int type = TranslateAnimation.RELATIVE_TO_SELF;
        TranslateAnimation an = new TranslateAnimation(type, 0, type, 0, type,
                0, type, 1);
        an.setDuration(TRANSLATE_DURATION);
        an.setFillAfter(true);
        return an;
    }

    private Animation createAlphaOutAnimation() {
        AlphaAnimation an = new AlphaAnimation(1, 0);
        an.setDuration(ALPHA_DURATION);
        an.setFillAfter(true);
        return an;
    }

    private int dp2px(int dp) {
        return (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,
                dp, getActivity().getResources().getDisplayMetrics());
    }

    @Override
    public void onDestroyView() {
        sheetContainer.startAnimation(createTranslationOutAnimation());
        backgroundLayer.startAnimation(createAlphaOutAnimation());
        actionSheetView.postDelayed(new Runnable() {
            @Override
            public void run() {
                decor.removeView(actionSheetView);
            }
        }, ALPHA_DURATION);
        super.onDestroyView();
    }

    public static class Builder {
        private Activity context;
        private FragmentManager fragmentManager;
        private String title;
        private String message;
        private List<Map<String, Object>> items;
        private ActionListener listener;

        Builder(FragmentActivity context) {
            this.context = context;
            this.fragmentManager = context.getSupportFragmentManager();
        }

        public Builder setTitle(String title) {
            this.title = title;
            return this;
        }

        public Builder setMessage(String message) {
            this.message = message;
            return this;
        }

        public Builder setListener(ActionListener listener) {
            this.listener = listener;
            return this;
        }

        public Builder setItems(List<Map<String, Object>> items) {
            this.items = items;
            return this;
        }

        private Bundle parseToBundle() {
            Bundle bundle = new Bundle();
            bundle.putString(KEY_TITLE, title);
            bundle.putString(KEY_MESSAGE, message);
            ArrayList<String> itemsBundle = new ArrayList<>();

            for (Map<String, Object> map : items) {
                String type = String.valueOf(map.get("type"));
                String message = String.valueOf(map.get("message"));

                if (TextUtils.isEmpty(type)) {
                    type = "0";
                }

                if (message == null) {
                    message = "";
                }

                itemsBundle.add(type + SEPARATOR + message);
            }

            bundle.putStringArrayList(KEY_ITEMS, itemsBundle);

            return bundle;
        }

        public WXActionSheet buildAndShow() {
            WXActionSheet actionSheet = (WXActionSheet) Fragment.instantiate(context, WXActionSheet.class.getName(), parseToBundle());
            actionSheet.setActionListener(listener);
            actionSheet.display(fragmentManager, "WXActionSheet");
            return actionSheet;
        }
    }

    public static Builder createBuilder(FragmentActivity context) {
        return new Builder(context);
    }

    public interface ActionListener {
        void onSelected(int index, String content);

        void onCancel();

        void onError(String message);
    }
}
