import {createSlice} from "@reduxjs/toolkit";
import {
  createAdvertisementThunk,
  deleteAdvertisementByIDThunk,
  findAllAdvertisementsByOwnerIDThunk,
  findAllAdvertisementsThunk, updateAdvertisementThunk
} from "./advertisements-thunks";


const initialState = {
  allAds: [],
  adsOfOwner: [],
  loading: false
};

const advertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  extraReducers: {
    [findAllAdvertisementsThunk.pending]:
        (state) => {
          state.loading = true;
          state.allAds = [];
        },
    [findAllAdvertisementsThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.allAds = payload;
        },
    [findAllAdvertisementsThunk.rejected]:
        (state) => {
          state.loading = false;
        },
    [findAllAdvertisementsByOwnerIDThunk.pending]:
        (state) => {
          state.loading = true;
          state.adsOfOwner = [];
        },
    [findAllAdvertisementsByOwnerIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.adsOfOwner = payload;
        },
    [findAllAdvertisementsByOwnerIDThunk.rejected]:
        (state) => {
          state.loading = false;
        },
    [deleteAdvertisementByIDThunk.fulfilled]: // this can be used for both admin delete or owner delete
        (state, {payload}) => {
          state.loading = false;
          state.allAds = state.allAds.filter(a => a._id !== payload)
          state.adsOfOwner = state.adsOfOwner.filter(a => a._id !== payload) // this can be used for both admin delete or owner delete
        },
    [updateAdvertisementThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          const index = state.adsOfOwner.findIndex(t => t._id === payload._id);
          state.adsOfOwner[index] = {
            ...state.adsOfOwner[index],
            ...payload
          };
        },
  }
});
export default advertisementsSlice.reducer;