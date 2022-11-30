import {createSlice} from "@reduxjs/toolkit";
// import profile from "../profile.json";
// import profile from "../test-only-profile/charlie-profile.json";
import profile from "../test-only-profile/chu-admin.json";
// import profile from "../test-only-profile/alie-profile.json";

const initialState = {
  loading: false,
  profile: profile // later need to update this to be from MongoDB
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action) {
      state.profile.firstName = action.payload.firstName;
      state.profile.lastName = action.payload.lastName;
      state.profile.bio = action.payload.bio;
      state.profile.location = action.payload.location;
      state.profile.dateOfBirth = action.payload.dateOfBirth;
    }
  },
  extraReducers: {

  }
});
export const {updateProfile} = profileSlice.actions; // todo: to be deleted
export default profileSlice.reducer;