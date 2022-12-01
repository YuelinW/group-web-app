import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './yelp-api-restaurant-service';

export const findYelpRestaurantsByRestaurantName = createAsyncThunk(
    'restaurants/findRestaurantsByRestaurantName', async (rName) => await service.findYelpRestaurantsByRestaurantName(rName)
)

export const findYelpRestaurantsByRestaurantId =createAsyncThunk(
    'restaurants/findYelpRestaurantsByRestaurantId', async (rId) => await service.findYelpRestaurantsByRestaurantId(rId)
)

export const findYelpRestaurantByRestaurantNameAndLocationThunk = createAsyncThunk(
    'restaurants/findYelpRestaurantByRestaurantNameAndLocation', async ({rname, rlocation}) => await service.findYelpRestaurantByRestaurantNameAndLocation({rname, rlocation})
)