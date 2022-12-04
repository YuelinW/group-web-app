import {createSlice} from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  findUserByIDThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
  updateCurrentUserProfileByUserNameThunk
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
    [findAllUsersThunk.pending]: (state, action) => {
      state.loading = true;
      state.users = action.payload
    },
    [findAllUsersThunk.fulfilled]: (state, action) => {
      state.loading = false;
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
    [logoutThunk.fulfilled]: (state) => {
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
    },
    [updateCurrentUserProfileByUserNameThunk.fulfilled]: (state, {payload}) => {
      state.currentUser = {
        ...state.currentUser,
        ...payload
      }
    }
  }
})

export default usersReducer.reducer