import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
    posts: localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : []
};
export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        savePost: (state, action) => {
            const unique_id = uuid();
            const small_id = unique_id.slice(0, 4);
            state.posts = [
                {
                    title: action.payload.title,
                    content: action.payload.content,
                    like: true,
                    id: small_id
                },
                ...state.posts
            ];
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        deletePost: (state, action) => {
            console.log(action.payload, state.posts);
            state.posts = state.posts.filter(
                (post) => post.id != action.payload
            );
            console.log(state.posts);
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        react: (state, action) => {
            state.posts = state.posts.map((post) => {
                if (post.id === action.payload) {
                    return {
                        ...post,
                        like: !post.like
                    };
                }
                return post;
            });
            localStorage.setItem("posts", JSON.stringify(state.posts));
        }
    }
});

export const { savePost, deletePost, react } = postSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export default postSlice.reducer;
