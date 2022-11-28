import {
  disConnectOwnerAndRestaurantThunk,
  findAllRestaurantsThunk,
  findRestaurantsByOwnerIDThunk
} from './restaurants-thunks';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  loading: false
};

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: {
    [findAllRestaurantsThunk.pending]:
        (state) => {
      state.loading = true;
      state.restaurants = [];
        },
    [findAllRestaurantsThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findAllRestaurantsThunk.rejected]:
        (state) => {
          state.loading = false;
          state.restaurants = [];
        },
    [findRestaurantsByOwnerIDThunk.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantsByOwnerIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findRestaurantsByOwnerIDThunk.rejected]:
        (state) => {
          state.loading = false;
        },
    [disConnectOwnerAndRestaurantThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = state.restaurants.filter(r => r._id !== payload);
        }
  }
});
export default restaurantSlice.reducer;