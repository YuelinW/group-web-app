import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './restaurants-service';
import {findRestaurantInDetailByYelpID} from "./restaurants-service";

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

export const findRestaurantsByCategoryThunk = createAsyncThunk(
    'restaurants/findRestaurantsByCategory', async(c) => await service.findRestaurantsByCategory(c)
)

export const disConnectOwnerAndRestaurantThunk = createAsyncThunk(
    'restaurants/disConnectOwnerAndRestaurantThunk',
    async (compoundObject) => await service.disConnectOwnerAndRestaurant(compoundObject)
);

export const findRestaurantByYelpIdThunk = createAsyncThunk(
    'restaurants/findRestaurantByYelpId', async (yid) => await service.findRestaurantByYelpId(yid)
);

export const findRestaurantInDetailByYelpIDThunk = createAsyncThunk(
    'restaurants/findRestaurantInDetailByYelpID', async (yid) => await service.findRestaurantInDetailByYelpID(yid)
);

export const createRestaurantThunk = createAsyncThunk(
    'restaurants/createRestaurant', async (restaurant) => await service.createRestaurant(restaurant)
);