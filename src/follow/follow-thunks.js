import {createAsyncThunk} from "@reduxjs/toolkit";
import {follow} from "./follow-service";

export const createFollowThunk = createAsyncThunk(
    'follow',
    async (followInfo) => await follow(followInfo)
)