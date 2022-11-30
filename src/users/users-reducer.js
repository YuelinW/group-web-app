import {createSlice} from "@reduxjs/toolkit";
import {
  findAllUsersThunk,
  findUserByIDThunk,
  loginThunk,
  logoutThunk,
  profileThunk,
  registerThunk,
  updateCurrentUserProfileByIDThunk,
  updateCurrentUserProfileByUserNameThunk
} from "./users-thunks";
// import currentUser from "../profile/test-only-profile/chu-admin.json";
import currentUser from "../profile/test-only-profile/dan-profile.json";

const usersReducer = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    users: [],
    currentUser: null,
    fakeCurrentUser: currentUser, // TODO: for testing only; delete later
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
      state.fakeCurrentUser = { // TODO: remove
        ...state.fakeCurrentUser,
        ...payload
      }
    }
  }
})

export default usersReducer.reducer