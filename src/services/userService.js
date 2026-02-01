import api from "./api";
import { getToken } from "../utils/auth";

// All endpoints are now relative to the baseURL set in api.js
const endpoints = {
  me: "/api/users/me",
  leaderboard: "/api/users/leaderboard",
  profilePic: "/api/users/profile-pic",
};

export const getMyProfile = () =>
  api.get(endpoints.me, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

export const getLeaderboard = () => api.get(endpoints.leaderboard);

export const updateProfilePic = (profilePic) =>
  api.put(
    endpoints.profilePic,
    { profilePic },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
