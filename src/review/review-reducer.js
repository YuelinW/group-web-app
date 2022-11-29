import {createSlice} from "@reduxjs/toolkit";
import {deleteReviewByIDThunk, findAllReviewsThunk} from "./review-thunks";

const initialState = {
  loading: false,
  reviews: null
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
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
    [deleteReviewByIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.reviews = state.reviews.filter(r => r._id !== payload._id);
        }
  }
});
export default reviewSlice.reducer;
