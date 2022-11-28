import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './restaurants-service';
import {disConnectOwnerAndRestaurant} from "./restaurants-service";

export const findAllRestaurantsThunk = createAsyncThunk(
    'restaurants/findAllRestaurantsThunk', async () => await service.findAllRestaurants()
);

export const disConnectOwnerAndRestaurantThunk = createAsyncThunk(
    'restaurants/disConnectOwnerAndRestaurantThunk',
    async (compoundObject) => await service.disConnectOwnerAndRestaurant(compoundObject)
);

export const findRestaurantsByOwnerIDThunk = createAsyncThunk(
    'restaurants/findRestaurantsByOwnerID', async (oid) => await service.findRestaurantsByOwnerID(oid)
);