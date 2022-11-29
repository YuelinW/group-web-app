import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from './review-service';
import {deleteReviewByID} from "./review-service";

export const findAllReviewsThunk = createAsyncThunk(
    'reviews/findAllReviews', async () => await service.findAllReviews()
);

export const deleteReviewByIDThunk = createAsyncThunk(
    'reviews/deleteReviewByID', async (review) => await service.deleteReviewByID(review)
);