import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './advertisements-service';

export const findAllAdvertisementsThunk = createAsyncThunk(
    'advertisements/findAllAdvertisements', async () => await service.findAllAdvertisements()
);

export const findAllAdvertisementsByOwnerIDThunk = createAsyncThunk(
    'advertisements/findAllAdvertisementsByOwnerID', async (oid) => await service.findAllAdvertisementsByOwnerID(oid)
);

export const findAdvertisementByIDThunk = createAsyncThunk(
    'advertisements/findAdvertisementByID', async (aid) => await service.findAdvertisementByID(aid)
);

export const createAdvertisementThunk = createAsyncThunk(
    'advertisements/createAdvertisement', async (ad) => await service.createAdvertisement(ad)
);

export const updateAdvertisementThunk = createAsyncThunk(
    'advertisements/updateAdvertisementByID', async (ad) => await service.updateAdvertisement(ad)
);

export const deleteAdvertisementByIDThunk = createAsyncThunk(
    'advertisements/deleteAdvertisementByID', async (aid) => {
      await service.deleteAdvertisementByID(aid);
      return aid;
    }
);