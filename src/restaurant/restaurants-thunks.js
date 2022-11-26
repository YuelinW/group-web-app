import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './restaurants-service';

export const findAllRestaurantsThunk = createAsyncThunk(
    'restaurants/findAllRestaurantsThunk', async () => await service.findAllRestaurants()
);

export const findRestaurantByRestaurantID = createAsyncThunk(
    'restaurants/findRestaurantByRestaurantID', async (rid) => await service.findRestaurantByRestaurantID(rid)
);

export const findRestaurantsByOwnerID = createAsyncThunk(
    'restaurants/findRestaurantsByOwnerID', async (oid) => await service.findRestaurantsByOwnerID(oid)
);