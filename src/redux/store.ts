import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.ts";
import userReducer from "./features/user/userSlice.ts";
import postReducer from "./features/post/postSlice.ts";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
