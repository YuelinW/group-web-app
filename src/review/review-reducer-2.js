import {
  findReviewByIDThunk, updateReviewOwnerReplyThunk
}
  from './review-thunks';

import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  reviews: [],
  loading: false
};

const reviewSlice3 = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [findReviewByIDThunk.pending]:
        (state) => {
          state.loading = true;
          state.signleReview = null;
        },
    [findReviewByIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.signleReview = payload;
        },
    [findReviewByIDThunk.rejected]:
        (state, {payload}) => {
          state.loading = false;
          state.signleReview = null;
        },

  }

});
export default reviewSlice3.reducer;