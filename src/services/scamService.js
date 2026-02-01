import api from "./api";

export const reportScam = (data) => api.post("/api/scams/report", data);
export const getLatestScams = () => api.get("/api/scams/latest");
export const searchScams = (query) => api.get(`/api/scams/search?q=${query}`);

export const analyzeWithAI = (text) => api.post("/api/scams/analyze-ai", { text });
