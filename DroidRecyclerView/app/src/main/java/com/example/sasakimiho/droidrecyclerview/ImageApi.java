package com.example.sasakimiho.droidrecyclerview;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Query;

public interface ImageApi {

    @GET("images")
    Call<List<ImageModel>> getImages();
    //access_tokenが必要なとき(@Header())

    @GET("check")
    Call<String> postImage(
            @Query("name") String fileName
    );
}