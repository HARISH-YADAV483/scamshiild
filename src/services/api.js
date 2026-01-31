import axios from "axios";

// Use environment variable for production, fallback to proxy for local development
const getBaseURL = () => {
  // For production, use the Render backend URL
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
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
