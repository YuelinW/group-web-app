import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:4000/api';
const YEALP_API = `${API_BASE}/restaurants`;


export const findAllRestaurants = async () => {
  const response = await axios.get(`${YEALP_API}`);
  return response.data;
};

export const findRestaurantByRestaurantID = async (rid) => {
  const response = await axios.get(`${YEALP_API}/${rid}`);
  return response.data;
};

export const findRestaurantsByOwnerID = async (oid) => {
  const response = await axios.get(`${YEALP_API}/owners/${oid}`);
  return response.data;
};

export const findRestaurantsByRestaurantName =async (rName) => {
  const response = await axios.get(`${YEALP_API}/${rName}`);
  return response.data;
}

export const findRestaurantsByCategory = async (c) => {
  const response = await axios.get(`${YEALP_API}/category/${c}`);
  return response.data;
}

export const disConnectOwnerAndRestaurant = async (ownersAndRestaurant) => {
  await axios.put(`${YEALP_API}/disconnect/${ownersAndRestaurant.rid}`, ownersAndRestaurant.owners);
  return ownersAndRestaurant.rid;
}

