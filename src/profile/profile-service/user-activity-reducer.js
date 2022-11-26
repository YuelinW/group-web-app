import {createSlice} from "@reduxjs/toolkit";
import {findActivityByCustomerIDThunk} from "./activity-thunk";

const initialState = {
  userActivity: [],
  loading: false
}

const userActivitySlice = createSlice({
  name: "userActivity",
  initialState,
  extraReducers: {
    [findActivityByCustomerIDThunk.pending]:
        (state) => {
          state.loading = true;
          state.userActivity = []
        },
    [findActivityByCustomerIDThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false;
          state.userActivity = payload;
        }
  }
});
export default userActivitySlice.reducer;