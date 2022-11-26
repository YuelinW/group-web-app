import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './profile-service';

export const findActivityByCustomerIDThunk = createAsyncThunk(
    'profile/findUserActivity', async () => await service.findActivityByCustomerID()
);