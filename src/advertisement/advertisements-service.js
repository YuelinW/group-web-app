import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/advertisements`;

export const findAllAdvertisements = async () => {
  const response = await axios.get(`${YEALP_API}`);
  return response.data;
};

export const findAdvertisementByID = async (aid) => {
  const response = await axios.get(`${YEALP_API}/${aid}`);
  return response.data;
};

export const findAllAdvertisementsByOwnerID = async (oid) => {
  const response = await axios.get(`${YEALP_API}/owners/${oid}`);
  return response.data;
};

export const createAdvertisement = async (ad) => {
  const response = await axios.post(YEALP_API, ad);
  return response.data;
};

export const updateAdvertisement = async (ad) => {
  await axios.put(`${YEALP_API}/${ad._id}`, ad);
  return ad;
};

export const deleteAdvertisementByID = async (aid) => {
  await axios.delete(`${YEALP_API}/${aid}`);
  return aid;
};