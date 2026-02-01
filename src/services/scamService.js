import api from "./api";

export const reportScam = (data) => api.post("/scams/report", data);
export const getLatestScams = () => api.get("/scams/latest");
export const searchScams = (query) => api.get(`/scams/search?q=${query}`);

export const analyzeWithAI = (text) => api.post("/scams/analyze-ai", { text });
