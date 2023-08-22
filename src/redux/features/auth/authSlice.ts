import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthProps = {
  isAuthenticated: boolean;
};

const initialState: AuthProps = {
  isAuthenticated: JSON.parse(
    localStorage.getItem("isAuthenticated") || "false"
  ),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;

      localStorage.setItem(
        "isAuthenticated",
        JSON.stringify(state.isAuthenticated)
      );
    },
  },
});

export const { setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
