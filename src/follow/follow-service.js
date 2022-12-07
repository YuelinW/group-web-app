import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE; // || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/follows`;

export const findFollowsByFollowerID = async (fid) => {
  const response = await axios.get(`${YEALP_API}/followers/${fid}`);
  return response.data;
};

export const findFollowsByLeaderID = async (lid) => {
  const response = await axios.get(`${YEALP_API}/leaders/${lid}`);
  return response.data;
};

export const createFollowRelationship = async (followInfo) => {
  const response = await axios.post(`${YEALP_API}`, followInfo)
  return response.data
};

export const findFollowByIDs = async (followInfo) => {
  const fid = followInfo.followerID;
  const lid = followInfo.leaderID;
  const response = await axios.get(`${YEALP_API}/follower/${fid}/leader/${lid}`);
  return response.data
}