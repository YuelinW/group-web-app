import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

const initialState = {
  loading: false,
  profile: profile
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: {

  }
});
export default profileSlice.reducer;