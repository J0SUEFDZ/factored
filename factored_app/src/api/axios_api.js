import axios from "axios";

const axios_api = axios.create({
  baseURL: "http://localhost:8000/",
});

// Add an interceptor to include the token in requests
axios_api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios_api;
