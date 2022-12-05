import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/follows`;

export const findFollowsByFollowerID = async (fid) => {
  const response = await axios.get(`${YEALP_API}/followers/${fid}`);
  return response.data;
};

export const findFollowsByLeaderID = async (lid) => {
  const response = await axios.get(`${YEALP_API}/leaders/${lid}`);
  return response.data;
};

export const findFriendsByProfileID = async (profileID) => {
  const response = await axios.get(`${YEALP_API}/friends/${profileID}`);
  return response.data;
};

export const createFollowRelationship = async (followInfo) => {
  const response = await axios.post(`${API_BASE}`, followInfo)
  return response.data
};