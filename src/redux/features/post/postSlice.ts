import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../user/userSlice.ts";

export interface PostState {
  id: string | number;
  content: string;
  user: UserState | null;
  likes: number;
  comments: number;
  shares: number;
  stats: number;
}

const initialState: PostState[] = [];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createOrUpdatePost: (state, action: PayloadAction<PostState>) => {
      const existingPostIndex = state.findIndex(
        (post) => post.id === action.payload.id
      );

      if (existingPostIndex !== -1) {
        // Update existing post
        state[existingPostIndex] = action.payload;
      } else {
        // Create a new post
        state.push(action.payload);
      }

      localStorage.setItem("posts", JSON.stringify(state));
    },
    getPosts: (state) => {
      const postsJSON: string | null = localStorage.getItem("posts");

      if (postsJSON) {
        const posts = JSON.parse(postsJSON);
        state.pop();
        state.push(...posts);
      }
    },
    deletePost: (state, action: PayloadAction<string | number>) => {
      const existingPostIndex = state.findIndex(
        (post) => post.id === action.payload
      );

      if (existingPostIndex !== -1) {
        state.splice(existingPostIndex, 1);
      }

      localStorage.setItem("posts", JSON.stringify(state));
    },
  },
});

export const { createOrUpdatePost, getPosts, deletePost } = postSlice.actions;

export default postSlice.reducer;
