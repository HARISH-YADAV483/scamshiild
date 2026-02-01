import api from "./api";

export const getQuestions = (level) => api.get(`/api/phishing/questions/${level}`);

export const submitAnswer = (data) => api.post("/api/phishing/submit", data);
export const saveProgress = (data) => api.post("/api/phishing/save-progress", data);