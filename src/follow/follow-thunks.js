import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  createFollowRelationship, findFollowByIDs,
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

export const findFollowByIDsThunk = createAsyncThunk(
    'follow/findFollowByIDs',
    async (followInfo) => await findFollowByIDs(followInfo)
)