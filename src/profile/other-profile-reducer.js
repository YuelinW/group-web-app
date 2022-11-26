import {createSlice} from "@reduxjs/toolkit";
import otherProfile from "./profile.json";

const initialState = {
  loading: false,
  otherProfile: otherProfile // later need to update this to be from MongoDB
}

const otherProfileSlice = createSlice({
  name: "otherProfile",
  initialState,
  extraReducers: {

  }
});
export default otherProfileSlice.reducer;