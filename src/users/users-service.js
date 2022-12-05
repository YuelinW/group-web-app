import axios from "axios";

const api = axios.create({withCredentials: true})
const BASE_URL = 'http://localhost:4000/api'

export const findAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`)
  return response.data
}

export const register = async (user) => {
  const response = await api.post(`${BASE_URL}/register`, user)
  return response.data
}

export const login = async (user) => {
  const response = await api.post(`${BASE_URL}/login`, user)
  return response.data
}

export const profile = async () => {
  const response = await axios.post(`${BASE_URL}/profile`, {}, {withCredentials: true})
  return response.data
}

export const logout = async () => {
  const response = await axios.post(`${BASE_URL}/logout`)
  return response.data
}

export const findUserByID = async (uid) => { // this is called when /profile/uid is loaded
  const response = await axios.get(`${BASE_URL}/users/${uid}`);
  return response.data
}

export const updateCurrentUserProfileByUserName = async (user) => { // this is called in edit-profile
  await axios.put(`${BASE_URL}/users/username/${user.username}`, user);
  return user;
}

export const increaseUserFollowerCountByUserID = async (uid) => {
  await axios.put(`${BASE_URL}/users/followercount/${uid}`)
}

export const increaseUserFollowingCountByUserID = async (uid) => {
  await axios.put(`${BASE_URL}/users/followingcount/${uid}`)
}