package com.example.sasakimiho.droidrecyclerview;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.annotation.Nullable;
import android.widget.ImageView;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * APIを呼ぶ・取得する
 */
public class MainApiConnection {
    static void getImageUrls() {

        new Thread(new Runnable() {
            @Override
            public void run() {

            }
        }).start();

    }

    @Nullable
    static void parseUrlToImage(final ImageView imageView, final String url) {
        new Thread(new Runnable() {
            @Override
            public void run() {
//        HttpURLConnection connection = null;
                InputStream inputStream = null;
                Bitmap bitmap = null;
                try {
                    //画像のURLを取得
                    URL imageUrl = new URL(url);
                    inputStream = imageUrl.openStream();
                    bitmap = BitmapFactory.decodeStream(inputStream);
                    imageView.setImageBitmap(bitmap);
                } catch (IOException e) {
                    e.printStackTrace();
                }
//        imageView.setImageBitmap(bitmap);
            }
        }).start();

//                return bitmap;
    }

    static void sendSelectedImage() {

    }
}
