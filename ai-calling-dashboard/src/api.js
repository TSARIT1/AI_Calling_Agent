import axios from "axios";

// ✅ Create axios instance
const api = axios.create({
  baseURL: "http://localhost:8080/api", // backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ OPTIONAL: Attach token automatically (for future)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;