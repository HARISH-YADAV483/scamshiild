import axios from "axios";

const getBaseURL = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  // For production, use the Render backend URL
  if (apiUrl) {
    // Remove trailing slash if present to normalize
    const cleanUrl = apiUrl.replace(/\/$/, "");

    // Check if it already ends with /api
    if (cleanUrl.endsWith("/api")) {
      return cleanUrl;
    }

    return `${cleanUrl}/api`;
  }

  // For local development, use the proxy
  return "/api";
};

const api = axios.create({
  baseURL: getBaseURL(),
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
