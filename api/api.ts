import axios from "axios";
const api = axios.create({
  baseURL: "https://true-team.ru/api/",
});
api.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Token 60ac092b74b21bd99d7de8c3f1e06d25c7bdba80`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
