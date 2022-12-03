import {
  disConnectOwnerAndRestaurantThunk,
  findAllRestaurantsThunk,
  findRestaurantsByOwnerIDThunk,
  findRestaurantsByCategoryThunk,
  findRestaurantByYelpIdThunk,
  createRestaurantThunk,
  findRestaurantFromYelpByYelpIDThunk
} from './restaurants-thunks';
import {createSlice} from "@reduxjs/toolkit";
import {
  findYelpRestaurantByRestaurantNameAndLocationThunk,
  findYelpRestaurantsByRestaurantId,
  findYelpRestaurantsByRestaurantName,
} from './yelp-api-restaurant-thunk';

const initialState = {
  restaurants: [],
  loading: false,
  restaurantInDetail: null,
  yelpRestaurant: null, // this is the data retrieved from YelpAPI (not in our DB)
  retrieveLoading: false,
  pendingCreating: false
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
    [findRestaurantsByCategoryThunk.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantsByCategoryThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.restaurants = payload;
        },
    [findRestaurantsByCategoryThunk.rejected]:
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
    [createRestaurantThunk.fulfilled]:
        (state, {payload}) => {
          // state.restaurants.push(payload); // state.restaurants will be updated in other loads
          state.restaurantInDetail = payload;
          state.pendingCreating = false
        },
    [createRestaurantThunk.pending]:
        (state) => {
          state.restaurantInDetail = null;
          state.pendingCreating = true
        },
    [createRestaurantThunk.rejected]:
        (state, {payload}) => {
          state.restaurantInDetail = payload; // write like this on purpose
          state.pendingCreating = false
        },
    [findYelpRestaurantByRestaurantNameAndLocationThunk.pending]:
        (state) => {
          state.restaurantsFromYelp = [];
          state.loading = true
        },
    [findYelpRestaurantByRestaurantNameAndLocationThunk.fulfilled]:
        (state, {payload}) => {
          state.restaurantsFromYelp = payload;
          state.loading = false;
        },
    [findYelpRestaurantByRestaurantNameAndLocationThunk.rejected]:
        (state) => {
          state.restaurantsFromYelp = [];
          state.loading = false
        },
    [findRestaurantFromYelpByYelpIDThunk.pending]: // this is the data retrieved from YelpAPI (not in our DB)
        (state) => {
          state.yelpRestaurant = null;
          state.retrieveLoading = true;
        },
    [findRestaurantFromYelpByYelpIDThunk.fulfilled]: // this is the data retrieved from YelpAPI (not in our DB)
        (state, action) => {
          state.yelpRestaurant = action.payload;
          state.retrieveLoading = false;
        },
    [findRestaurantFromYelpByYelpIDThunk.rejected]: // this is the data retrieved from YelpAPI (not in our DB)
        (state) => {
          state.yelpRestaurant = null;
          state.retrieveLoading = false;
        },
    [findRestaurantByYelpIdThunk.pending]: // from our database
        (state) => {
          state.restaurantInDetail = null;
          state.loading = true;
        },
    [findRestaurantByYelpIdThunk.fulfilled]: // from our database
        (state, {payload}) => {
          state.restaurantInDetail = payload;
          state.loading = false;
        },
    [findRestaurantByYelpIdThunk.rejected]: // from our database
        (state) => {
          state.restaurantInDetail = null;
          state.loading = false;
        },
  }
});
export default restaurantSlice.reducer;