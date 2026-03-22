import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Projects
export const projectAPI = {
  getAll: () => api.get("/projects"),
  getFeatured: () => api.get("/projects/featured"),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post("/projects", data),
  update: (id, data) => api.patch(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// Skills
export const skillAPI = {
  getAll: () => api.get("/skills"),
  getByCategory: (category) => api.get(`/skills/category/${category}`),
  create: (data) => api.post("/skills", data),
  update: (id, data) => api.patch(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`),
};

// Contact
export const contactAPI = {
  getAll: () => api.get("/contact"),
  create: (data) => api.post("/contact", data),
  markAsRead: (id) => api.patch(`/contact/${id}/read`),
  delete: (id) => api.delete(`/contact/${id}`),
};

export default api;
