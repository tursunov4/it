import axios from "axios";
const api = axios.create({
  baseURL: "https://uslovie-true.ru/api/",
});
api.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Token 7441cc2aca24c70e883c26766fb48a5e321a32c5`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
