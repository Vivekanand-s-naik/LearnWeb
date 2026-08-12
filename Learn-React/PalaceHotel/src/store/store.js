import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import postsReducer from "../features/postsSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        allPosts: postsReducer
    }
});

export default store;