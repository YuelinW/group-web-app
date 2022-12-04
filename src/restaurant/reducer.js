import {
  findRestaurantByYelpIdThunk
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
    [findRestaurantByYelpIdThunk.pending]:
        (state) => {
          state.loading = true;
          state.singleRestaurant = null;
        },
    [findRestaurantByYelpIdThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.singleRestaurant = payload;
        },
    [findRestaurantByYelpIdThunk.rejected]:
        (state) => {
          state.loading = false;
        },
  }
});
export default restaurantSlice1.reducer;