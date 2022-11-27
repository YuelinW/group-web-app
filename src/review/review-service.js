import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/reviews`;

export const findAllReviewsByUserID = async (oid) => {
  const response = await axios.get(`${YEALP_API}/owners/${oid}`);
  return response.data;
}