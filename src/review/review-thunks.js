import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./review-service";
import {findReviewByID, updateReviewOwnerReply} from "./review-service";

export const findReviewByRestaurantID = createAsyncThunk(
    'reviews/findReviewByRestaurantID', async (rid) => await service.findReviewByRestaurantID(rid)
)
export const createReviewThunk = createAsyncThunk(
    'reviews/createReview', async (review) => await service.createReview(review)
)
export const deleteReviewByIDThunk = createAsyncThunk(
    'reviews/deleteReviewByID', async (review) => await service.deleteReviewByID(review)
)

export const findAllReviewsThunk = createAsyncThunk(
    'reviews/findAllReviews', async () => await service.findAllReviews()
);

export const updateReviewOwnerReplyThunk = createAsyncThunk(
    'reviews/updateReviewOwnerReply', async (review) => await updateReviewOwnerReply(review)
)

export const findReviewByIDThunk = createAsyncThunk(
    'reviews/findReviewByID', async (rid) =>await service.findReviewByID(rid)
)