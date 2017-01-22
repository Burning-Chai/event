package com.example.sasakimiho.droidrecyclerview;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.widget.TextView;

import butterknife.Bind;
import butterknife.ButterKnife;

public class SubActivity extends Activity{

    public static Intent createIntent(@NonNull Context context) {
        return new Intent(context, SubActivity.class);
    }

    @Bind(R.id.sub_text)
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.sub_activity_view);
        ButterKnife.bind(this);
    }
}
