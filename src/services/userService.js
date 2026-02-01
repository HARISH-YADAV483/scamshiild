import api from "./api";
import { getToken } from "../utils/auth";

// All endpoints are now relative to the baseURL set in api.js
const endpoints = {
  me: "/users/me",
  leaderboard: "/users/leaderboard",
  profilePic: "/users/profile-pic",
};

export const getMyProfile = () =>
  api.get(endpoints.me);

export const getLeaderboard = () => api.get(endpoints.leaderboard);

export const updateProfilePic = (profilePic) =>
  api.put(
    endpoints.profilePic,
    { profilePic }
  );
