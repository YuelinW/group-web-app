import {createSlice} from "@reduxjs/toolkit";
import {
  findAllUsersThunk, findUserByIDThunk,
  loginThunk,
  logoutThunk, profileThunk,
  registerThunk
} from "./users-thunks";

const usersReducer = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    currentUser: null,
    otherUser: null,
    error: null
  },
  reducers: {
  },
  extraReducers: {
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [loginThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [registerThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
    [profileThunk.rejected]: (state, action) => {
      state.error = action.payload
      state.currentUser = null
    },
    [findUserByIDThunk.fulfilled]: (state, {payload}) => {
      state.otherUser = payload;
    },
    [findUserByIDThunk.rejected]: (state) => {
      state.otherUser = null;
    }
  }
})

export default usersReducer.reducer