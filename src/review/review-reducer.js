import {
  findReviewByRestaurantIDThunk,
  deleteReviewByIDThunk,
  findAllReviewsThunk,
  updateReviewOwnerReply, updateReviewOwnerReplyThunk, findReviewByIDThunk
}
  from './review-thunks';

import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk} from "./review-thunks";
import {updateCurrentUserProfileByUserNameThunk} from "../users/users-thunks";

const initialState = {
  reviews: [],
  loading: false
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [findReviewByRestaurantIDThunk.pending]:
        (state) => {
          state.loading = true;
          state.reviews = [];
        },
    [findReviewByRestaurantIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = payload;
        },
    [findReviewByRestaurantIDThunk.rejected]:
        (state) => {
          state.loading = false;
          state.reviews = [];
        },
    [createReviewThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews.push(payload);
        },
    [deleteReviewByIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = state.reviews.filter(r => r._id !== payload._id);
        },
    [findAllReviewsThunk.pending]:
        (state) => {
          state.loading = true;
          state.reviews = null;
        },
    [findAllReviewsThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = payload;
        },
    [findAllReviewsThunk.rejected]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = null;
        },
    [updateReviewOwnerReplyThunk.fulfilled]: (state, {payload}) => {
      state.reviews = {
        ...state.reviews,
        ...payload
      }
    }
}

});
export default reviewSlice.reducer;
