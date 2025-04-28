import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from './operations';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.error = null;
        state.user = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;
