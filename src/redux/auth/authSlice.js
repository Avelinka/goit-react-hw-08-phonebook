import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  handlePending,
  handleRejected,
  handleRefreshUserPending,
  handleRefreshUserRejected,
  handleRegisterFulfilled,
  handleLogInFulfilled,
  handleLogOutFulfilled,
  handleRefreshUserFulfilled,
} from '../handlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, handleRegisterFulfilled)

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleLogInFulfilled)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)

      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.rejected, handleRefreshUserRejected)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled),
});

export const authReducer = authSlice.reducer;
