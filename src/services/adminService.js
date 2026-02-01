import api from "./api";

export const getPendingReports = () => api.get("/api/admin/pending");
export const verifyReport = (id) => api.put(`/api/admin/verify/${id}`);
export const rejectReport = (id) => api.put(`/api/admin/reject/${id}`);