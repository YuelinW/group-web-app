import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  createFollowRelationship,
  findFollowsByFollowerID
} from "./follow-service";

export const createFollowThunk = createAsyncThunk(
    'follow/createFollow',
    async (followInfo) => await createFollowRelationship(followInfo)
)

export const findFollowsByFollowerIDThunk = createAsyncThunk(
    'follow/findFollowsByFollowerIDThunk',
    async (followerID) => await findFollowsByFollowerID(followerID)
)