import api from "./api";
import { getToken } from "../utils/auth";

// All endpoints are now relative to the baseURL set in api.js
const endpoints = {
  blogs: "/blogs",
  myBlogs: "/blogs/my/list",
};

export const getVerifiedBlogs = () => api.get(endpoints.blogs);

export const getBlogById = (id) => api.get(`${endpoints.blogs}/${id}`);

export const createBlog = (data) =>
  api.post(endpoints.blogs, data);

export const getMyBlogs = () =>
  api.get(endpoints.myBlogs);
