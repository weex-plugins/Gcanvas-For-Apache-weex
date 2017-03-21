package com.taobao.weex.demo;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.taobao.weex.actionsheet.WXActionSheet;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        findViewById(R.id.text).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                List<Map<String, Object>> fake = new ArrayList<>();

                for (int i = 0; i < 3; i++) {
                    Map<String, Object> item = new HashMap<>();
                    item.put("type", 0);
                    item.put("message", "Item " + i);
                    fake.add(item);
                }

                Map<String, Object> item1 = new HashMap<>();
                item1.put("type", 1);
                item1.put("message", "CANCEL");
                fake.add(item1);

                Map<String, Object> error = new HashMap<>();
                error.put("type", 1);
                error.put("message", "CANCEL1");
                fake.add(error);

                Map<String, Object> item2 = new HashMap<>();
                item2.put("type", 2);
                item2.put("message", "DANGEROUS");
                fake.add(item2);

                WXActionSheet.createBuilder(MainActivity.this)
                        .setTitle("Title")
                        .setMessage("A short and complete sentence")
                        .setItems(fake)
                        .setListener(new WXActionSheet.ActionListener() {
                            @Override
                            public void onSelected(int index, String content) {
                                Log.e("ActionSheet", index + ", " + content);
                            }

                            @Override
                            public void onCancel() {
                                Log.e("ActionSheet", "cancel");
                            }

                            @Override
                            public void onError(String message) {
                                Log.e("ActionSheet", "error: " + message);
                            }
                        })
                        .buildAndShow();

            }
        });
    }
}
