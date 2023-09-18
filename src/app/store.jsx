import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import postReducer from "../features/posts/postSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        posts: postReducer
    }
});
