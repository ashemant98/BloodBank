import axios from "axios";

const API = axios.create({ baseURL: process.env.BASE_URL });

API.interceptors.use(() => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = localStorage.getItem("token");
  }
  return req;
});

export default API;
