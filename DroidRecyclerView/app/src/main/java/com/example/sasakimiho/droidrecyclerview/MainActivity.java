package com.example.sasakimiho.droidrecyclerview;

import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.StaggeredGridLayoutManager;
import android.support.v7.widget.helper.ItemTouchHelper;
import android.util.Log;
import android.widget.ImageView;
import android.widget.Toast;

import com.squareup.picasso.Picasso;
import com.squareup.picasso.Target;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.ButterKnife;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    private ArrayList<String> data = new ArrayList<>();
    //    private MainAdapter adapter = new MainAdapter(
//    );
    private final int SPAN_SIZE = 3;

//    @Bind(R.id.main_header_image)
//    ImageView mainImageView;

    @Bind(R.id.recyclerview_main)
    RecyclerView recyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

        for (int i = 0; i < 50; i++) {
            data.add("item : " + i);
        }

        final LinearLayoutManager layoutManager = new LinearLayoutManager(this);
////        layoutManager.setReverseLayout(true);
//        layoutManager.setStackFromEnd(true);
//        final GridLayoutManager gridLayoutManager = new GridLayoutManager(this, SPAN_SIZE);
//        gridLayoutManager.setSpanSizeLookup(new GridLayoutManager.SpanSizeLookup() {
//            @Override
//            public int getSpanSize(int position) {
//                return adapter.spanSizeLookUp(position);
//            }
//        });

        final String baseUrl = "http://10.248.118.77:3000/";

        final MainAdapter adapter = new MainAdapter() {
            @Override
            protected void onButtonClicked() {
                super.onButtonClicked();
                Toast.makeText(MainActivity.this, "button is tapped", Toast.LENGTH_LONG).show();


//                new Thread(new Runnable() {
//                    @Override
//                    public void run() {
//                        //get http request
//                        try {
//                            URL url = new URL("http://10.");
//                            HttpURLConnection con = (HttpURLConnection) url.openConnection();
//                            String str = InputStreamToString(con.getInputStream());
//                            Log.d("HTTP", str);
//                        } catch (Exception ex) {
//                            System.out.println(ex);
//                        }
//                    }
//                }).start();
            }

            // InputStream -> String
//            String InputStreamToString(InputStream is) throws IOException {
//                BufferedReader br = new BufferedReader(new InputStreamReader(is));
//                StringBuilder sb = new StringBuilder();
//                String line;
//                while ((line = br.readLine()) != null) {
//                    sb.append(line);
//                }
//                br.close();
//                return sb.toString();
//            }

            @Override
            protected void onItemClicked(String fileName) {
                super.onItemClicked(fileName);
                Toast.makeText(MainActivity.this, "item is tapped" + fileName, Toast.LENGTH_LONG).show();

                Retrofit rt = new Retrofit.Builder()
                        .baseUrl(baseUrl)
                        .addConverterFactory(GsonConverterFactory.create())
                        .build();
                rt.create(ImageApi.class).postImage(fileName);
            }
        };

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        retrofit.create(ImageApi.class).getImages().enqueue(new Callback<List<ImageModel>>() {
            @Override
            public void onResponse(Call<List<ImageModel>> call, Response<List<ImageModel>> response) {
                final List<ImageModel> body = response.body();
                adapter.addAll(body);
            }

            @Override
            public void onFailure(Call<List<ImageModel>> call, Throwable t) {

            }
        });


        final DividerItemDecoration dividerItemDecoration = new DividerItemDecoration(this, DividerItemDecoration.VERTICAL);
        dividerItemDecoration.setDrawable(getResources().getDrawable(R.drawable.colored_line_item));
        final StaggeredGridLayoutManager staggeredGridLayoutManager = new StaggeredGridLayoutManager(3, StaggeredGridLayoutManager.VERTICAL);
        recyclerView.setLayoutManager(staggeredGridLayoutManager);
//        recyclerView.addItemDecoration(dividerItemDecoration);

//        adapter.add("header");
        adapter.add("button");
//        adapter.addAll(data);
//        adapter.add("footer");
        recyclerView.setHasFixedSize(true);

//        ImageView imageView = new ImageView(this);
//        String url = "https://www.gstatic.com/android/market_images/web/play_logo_x2.png";
////                    Picasso.with(this).load(url).into(imageView);
//        for (int item = 0; item < 5; item++) {
//            adapter.add(url);
//        }

        ItemTouchHelper itemTouchHelper = new ItemTouchHelper(
                new ItemTouchHelper.SimpleCallback(ItemTouchHelper.UP | ItemTouchHelper.DOWN, ItemTouchHelper.RIGHT | ItemTouchHelper.LEFT) {
                    @Override
                    public boolean onMove(RecyclerView recyclerView, RecyclerView.ViewHolder viewHolder, RecyclerView.ViewHolder target) {
                        final int fromPos = viewHolder.getAdapterPosition();
                        final int toPos = target.getAdapterPosition();
                        adapter.notifyItemMoved(fromPos, toPos);
                        return true;
                    }

                    @Override
                    public void onSwiped(RecyclerView.ViewHolder viewHolder, int direction) {
                        final int fromPos = viewHolder.getAdapterPosition();
                        adapter.remove(fromPos);
//                        adapter.notifyItemRemoved(fromPos);
                    }
                }
        );
        itemTouchHelper.attachToRecyclerView(recyclerView);
        recyclerView.addItemDecoration(itemTouchHelper);
        recyclerView.setAdapter(adapter);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
