import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './restaurants-service';

export const findAllRestaurantsThunk = createAsyncThunk(
    'restaurants/findAllRestaurantsThunk', async () => await service.findAllRestaurants()
);

export const findRestaurantsByOwnerIDThunk = createAsyncThunk(
    'restaurants/findRestaurantsByOwnerID', async (oid) => await service.findRestaurantsByOwnerID(oid)
);

export const findRestaurantByRestaurantID = createAsyncThunk(
    'restaurants/findRestaurantByRestaurantID', async (rid) => await service.findRestaurantByRestaurantID(rid)
);

export const findRestaurantsByRestaurantName = createAsyncThunk(
    'restaurants/findRestaurantsByRestaurantName', async (rName) => await service.findRestaurantsByRestaurantName(rName)
)

export const findRestaurantsByCategory = createAsyncThunk(
    'restaurants/findRestaurantsByCategory', async(c) => await service.findRestaurantsByCategory(c)
)

export const disConnectOwnerAndRestaurantThunk = createAsyncThunk(
    'restaurants/disConnectOwnerAndRestaurantThunk',
    async (compoundObject) => await service.disConnectOwnerAndRestaurant(compoundObject)
);

export const findRestaurantByYelpId = createAsyncThunk(
    'restaurants/findRestaurantByYelpId', async (yid) => await service.findRestaurantByYelpId(yid)
);

export const createRestaurant = createAsyncThunk(
    'restaurants/createRestaurant', async (restaurant) => await service.createRestaurant(restaurant)
);