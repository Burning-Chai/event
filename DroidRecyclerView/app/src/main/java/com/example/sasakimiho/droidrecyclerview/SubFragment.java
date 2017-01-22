package com.example.sasakimiho.droidrecyclerview;

import android.app.Fragment;
import android.os.Bundle;

public class SubFragment extends Fragment{
    public static SubFragment newInstance() {
        Bundle args = new Bundle();
        SubFragment fragment = new SubFragment();
        fragment.setArguments(args);
        return fragment;
    }


}
