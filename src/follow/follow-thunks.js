import {createAsyncThunk} from "@reduxjs/toolkit";
import {createFollowRelationship} from "./follow-service";

export const createFollowThunk = createAsyncThunk(
    'follow',
    async (followInfo) => await createFollowRelationship(followInfo)
)