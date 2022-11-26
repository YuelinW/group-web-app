import {
  findAllRestaurantsThunk,
  findRestaurantByRestaurantID,
  findRestaurantsByOwnerID
} from './restaurants-thunks';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  singleRestaurant: null,
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
    [findRestaurantByRestaurantID.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantByRestaurantID.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.singleRestaurant = payload;
        },
    [findRestaurantByRestaurantID.rejected]:
        (state) => {
          state.loading = false;
          state.singleRestaurant = null;
        },
    [findRestaurantsByOwnerID.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantsByOwnerID.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findRestaurantsByOwnerID.rejected]:
        (state) => {
          state.loading = false;
        },
  }
});
export default restaurantSlice.reducer;