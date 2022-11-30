import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/reviews`;

export const findAllReviewsByUserID = async (oid) => {
  const response = await axios.get(`${YEALP_API}/owners/${oid}`);
  return response.data;
}

export const findReviewByRestaurantID = async (rid) => {
  const response = await axios.get(`${YEALP_API}/restaurant/${rid}`);
  return response.data;
}

export const createReview = async (review) => {
  const response = await axios.post(YEALP_API, review)
  return response.data;
}

export const deleteReviewByID = async (review) => {
  await axios.delete(`${YEALP_API}/${review._id}`);
  return review;
}

export const findAllReviews = async () => {
  const response = await axios.get(`${YEALP_API}`);
  return response.data;
}