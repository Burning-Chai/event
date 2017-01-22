package com.example.sasakimiho.droidrecyclerview;

import android.content.Context;
import android.graphics.Bitmap;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatDelegate;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import butterknife.Bind;
import butterknife.ButterKnife;

public class MainAdapter extends RecyclerView.Adapter {

    private ArrayList<Object> data = new ArrayList<>();
    private final int HEADER = 0;
    private final int ITEM = 1;
    private final int FOOTER = 2;
    private final int BUTTON = 3;
    private final int IMAGE = 4;
    private Context context;

    protected void onItemClicked(String fileName) {
    }
    protected void onButtonClicked(){

    }

    static class StandardViewHolder extends RecyclerView.ViewHolder {

        private final static int LAYOUT_ID = R.layout.recycler_view_item;

        @Bind(R.id.item_image_view)
        ImageView imageView;

//        @Bind(R.id.item_text_content)
//        TextView textItem;

        @NonNull
        static StandardViewHolder create(@NonNull LayoutInflater inflater, ViewGroup parent) {
            return new StandardViewHolder(inflater.inflate(LAYOUT_ID, parent, false));
        }

        public StandardViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    static class HeaderViewHolder extends RecyclerView.ViewHolder {

        private final static int LAYOUT_ID = R.layout.recycler_view_header;

        @Bind(R.id.header_image_view)
        ImageView headerImageView;

        @Bind(R.id.header_id)
        TextView headerView;

        @NonNull
        static HeaderViewHolder create(@NonNull LayoutInflater inflater, ViewGroup parent) {
            return new HeaderViewHolder(inflater.inflate(LAYOUT_ID, parent, false));
        }

        public HeaderViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    static class FooterViewHolder extends RecyclerView.ViewHolder {

        private final static int LAYOUT_ID = R.layout.recycler_view_footer;

        @Bind(R.id.recycler_view_footer)
        TextView footerView;

        @NonNull
        static FooterViewHolder create(@NonNull LayoutInflater inflater, ViewGroup parent) {
            return new FooterViewHolder(inflater.inflate(LAYOUT_ID, parent, false));
        }

        public FooterViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    static class ButtonViewHolder extends RecyclerView.ViewHolder {

        @Bind(R.id.recycler_view_button)
        Button button;

        private final static int LAYOUT_ID = R.layout.recycler_view_button;

        static ButtonViewHolder create(@NonNull LayoutInflater inflater, ViewGroup parent) {
            return new ButtonViewHolder(inflater.inflate(LAYOUT_ID, parent, false));
        }

        public ButtonViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    static class ImageViewHolder extends RecyclerView.ViewHolder {

        @Bind(R.id.image_view_item)
        ImageView imageView;

        private final static int LAYOUT_ID = R.layout.recycler_view_button;

        static ImageViewHolder create(@NonNull LayoutInflater inflater, ViewGroup parent) {
            return new ImageViewHolder(inflater.inflate(LAYOUT_ID, parent, false));
        }

        public ImageViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        switch (viewType) {
            case IMAGE:
                final ImageViewHolder imageViewHolder = ImageViewHolder.create(inflater, parent);
                imageViewHolder.imageView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        //TODO:add onclick listener
                    }
                });
            case ITEM:
                final StandardViewHolder standardViewHolder = StandardViewHolder.create(inflater, parent);
//                standardViewHolder.itemView.setOnClickListener(new View.OnClickListener() {
//                    @Override
//                    public void onClick(View view) {
//                    }
//                });
                context = parent.getContext();
                return standardViewHolder;
            case HEADER:
                return HeaderViewHolder.create(inflater, parent);
            case FOOTER:
                return FooterViewHolder.create(inflater, parent);
            case BUTTON:
                ButtonViewHolder buttonViewHolder = ButtonViewHolder.create(inflater, parent);
                buttonViewHolder.button.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        onButtonClicked();
//                        Random rm = new Random();
//                        int num = rm.nextInt(data.size());
//                        data.add(num, "Added Item");
//                        notifyItemInserted(num);
                    }
                });
                return buttonViewHolder;
        }
        return null;
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {
        if (data.get(position) instanceof ImageModel) {
            final ImageModel imageModel = (ImageModel) data.get(position);
            final StandardViewHolder viewHolder = (StandardViewHolder) holder;
            viewHolder.imageView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    onItemClicked(imageModel.getName());
                }
            });
//                viewHolder.textItem.setText(itemText);
            Picasso.with(context).load(imageModel.getUrl()).into(viewHolder.imageView);
        } else {
            String itemText = (String) data.get(position);
            if (holder instanceof StandardViewHolder) {
                final StandardViewHolder viewHolder = (StandardViewHolder) holder;
//                viewHolder.textItem.setText(itemText);
                Picasso.with(context).load(itemText).into(viewHolder.imageView);
            } else if (holder instanceof HeaderViewHolder) {
                final HeaderViewHolder viewHolder = (HeaderViewHolder) holder;
                viewHolder.headerView.setText(itemText);
//                String url = "https://www.gstatic.com/android/market_images/web/play_logo_x2.png";
//                Picasso.with().load(url).into(viewHolder.headerImageView);
//            viewHolder.headerImageView.setImageBitmap(MainApiConnection.parseUrlToImage(url));
            } else if (holder instanceof FooterViewHolder) {
                final FooterViewHolder viewHolder = (FooterViewHolder) holder;
                viewHolder.footerView.setText(itemText);
            } else if (holder instanceof ButtonViewHolder) {
                final ButtonViewHolder viewHolder = (ButtonViewHolder) holder;
                viewHolder.button.setText(itemText);
            }
        }
    }

    @Override
    public int getItemCount() {
        return data.size();
    }

    @Override
    public int getItemViewType(int position) {
        if (data.get(position) instanceof ImageModel) {
            return ITEM;
        } else {
            String text = (String) data.get(position);
            switch (text) {
                case "header":
                    return HEADER;
                case "footer":
                    return FOOTER;
                case "button":
                    return BUTTON;
//                default:
//                    return ITEM;
            }
        }
        return -1;
    }

    public void addAll(@NonNull List<ImageModel> lists) {
        int itemStart = data.size();
        for (ImageModel item : lists){
            data.add(item);
        }
//        data.addAll(lists);
        notifyItemRangeInserted(itemStart, data.size());
    }

    int spanSizeLookUp(int position) {
        if (position % 10 == 0) {
            return 3;
        }
        //あまりが0の場合spansizeを変える
        return 1;
    }

    public void add(Object item) {
        data.add(item);
    }

    public void remove(@NonNull int position) {
        data.remove(position);
        notifyItemRemoved(position);
    }
}
