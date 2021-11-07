import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, ISignIn } from "core/interface/auth";
import type { RootState } from "../store";

const initialState: IAuth = {
  isAuthenticated: false,
  token: null,
  userProfile: null,
}

export const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    SignIn: (state, action: PayloadAction<ISignIn>) => {
      return {
        ...state,
        isAuthenticated: true,

      }
    }, 
  }
});

export const { SignIn } = authSlice.actions;
// export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;