import {findReviewByRestaurantID, deleteReviewByIDThunk, findAllReviewsThunk}
  from './review-thunks';

import {createSlice} from "@reduxjs/toolkit";
import {createReviewThunk} from "./review-thunks";

const initialState = {
  reviews: [],
  loading: false
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [findReviewByRestaurantID.pending]:
        (state) => {
          state.loading = true;
          state.reviews = [];
        },
    [findReviewByRestaurantID.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = payload;
        },
    [findReviewByRestaurantID.rejected]:
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
        }
  }
});
export default reviewSlice.reducer;