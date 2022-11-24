import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./profile-service";

export const updateProfileThunk = createAsyncThunk(
    'profile/updateProfile', async (profile) => await service.updateProfile(profile)
);