import axios from "axios";

// Add temporary access to cors anywhere server: https://cors-anywhere.herokuapp.com/corsdemo
const API_BASE= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=WA?&term=";
const AUTH = "Bearer xFy8A_Q4TV1AU_eFIvAp2M36xLFgIRTvwQgi2HZE2wF9iZxV1548dIgZ2IER6HqqJptx8iqbQuhcU7xvxFGew7fMMMbY8J3WqMEK79sAvxQgc-bU-EZiKvAQTRZ4Y3Yx"

export const findYelpRestaurantsByRestaurantName =async (rName) => {
  const response = await axios.get(`${API_BASE}${rName}`, {headers: {'Authorization': AUTH}});
  console.log(response.data)
  return response.data;
}

// Add temporary access to cors anywhere server: https://cors-anywhere.herokuapp.com/corsdemo
const API_BASE_2= "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/";
export const findYelpRestaurantsByRestaurantId =async (rId) => {
  const response = await axios.get(`${API_BASE_2}${rId}`, {headers: {'Authorization': AUTH}});
  console.log(response.data)
  return response.data;
}