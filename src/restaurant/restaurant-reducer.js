import {
  disConnectOwnerAndRestaurantThunk,
  findAllRestaurantsThunk,
  findRestaurantsByOwnerIDThunk,
  findRestaurantsByCategory
} from './restaurants-thunks';
import {createSlice} from "@reduxjs/toolkit";
import {
  findYelpRestaurantsByRestaurantId,
  findYelpRestaurantsByRestaurantName,
} from './yelp-api-restaurant-thunk';
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
        },
    [findRestaurantsByCategory.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantsByCategory.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findRestaurantsByCategory.rejected]:
        (state) => {
          state.loading = false;
        },
    [findYelpRestaurantsByRestaurantName.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findYelpRestaurantsByRestaurantName.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findYelpRestaurantsByRestaurantName.rejected]:
        (state) => {
          state.loading = false;
        },
    [findYelpRestaurantsByRestaurantId.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findYelpRestaurantsByRestaurantId.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findYelpRestaurantsByRestaurantId.rejected]:
        (state) => {
          state.loading = false;
        },
  }
});
export default restaurantSlice.reducer;