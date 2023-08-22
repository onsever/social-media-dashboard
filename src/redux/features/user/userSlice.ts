import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: string | number;
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  id: "",
  fullName: "",
  username: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createOrUpdateUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;

      localStorage.setItem("user", JSON.stringify(state));
    },
    getUser: (state) => {
      const user: string | null = localStorage.getItem("user");

      if (user) {
        const userParse = JSON.parse(user);
        state.id = userParse.id;
        state.fullName = userParse.fullName;
        state.username = userParse.username;
        state.email = userParse.email;
        state.password = userParse.password;
      }
    },
  },
});

export const { createOrUpdateUser, getUser } = userSlice.actions;

export default userSlice.reducer;
