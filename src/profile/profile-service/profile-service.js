import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE; //http://localhost:4000/api

export const findProfileByProfileID = async (profileID) => {
  const response = await axios.get(`${API_BASE}/users/${profileID}`);
  return response.data
};