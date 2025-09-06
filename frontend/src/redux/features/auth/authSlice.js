import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignin } from "./authActions";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth/signin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      (state.loading = true), (state.error = false);
    });

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      (state.loading = false),
        (state.user = payload.user),
        (state.token = payload.token);
    });

    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(userSignin.pending, (state) => {
      (state.loading = true), (state.error = false);
    });

    builder.addCase(userSignin.fulfilled, (state, { payload }) => {
      (state.loading = false), (state.user = payload.result);
    });

    builder.addCase(userSignin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
