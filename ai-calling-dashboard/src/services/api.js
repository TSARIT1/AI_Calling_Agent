import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // change to your backend
});

export default api;