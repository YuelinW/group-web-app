import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE; //http://localhost:4000/api
const YEALP_API = `${API_BASE}/user-activity`;

export const updateProfile = async (profile) => { //TODO
  // await axios.put(`${YEALP_API}/${profile._id}`);
  // return profile;
};

export const findActivityByCustomerID = async (customerID) => {
  const response = await axios.get(`${YEALP_API}/${customerID}`);
  return response.data;
};

export const findProfileByProfileID = async (profileID) => {
  const response = await axios.get(`${API_BASE}/users/${profileID}`);
  return response.data
};