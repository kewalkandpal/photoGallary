import { configureStore } from "@reduxjs/toolkit";
import AlbumSlice from "../reducer/AlbumSlice";

const store = configureStore({
    reducer: {
        albumStore: AlbumSlice
    }
})
export default store;

