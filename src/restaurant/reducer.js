import {
  findRestaurantByYelpId
} from './restaurants-thunks';
import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  restaurants: [],
  loading: false
};

const restaurantSlice1 = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: {
    [findRestaurantByYelpId.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantByYelpId.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.singleRestaurant = payload;
        },
    [findRestaurantByYelpId.rejected]:
        (state) => {
          state.loading = false;
        },
  }
});
export default restaurantSlice1.reducer;