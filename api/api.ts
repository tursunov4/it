import axios from "axios";
const api = axios.create({
  baseURL: `https://uslovie-true.ru/api/`,
});
api.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Token fe548b78d11c03b75a46a427dde0b49de862195e`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
