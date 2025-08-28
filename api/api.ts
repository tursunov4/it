import axios from "axios";
const api = axios.create({
  baseURL: `http://185.4.65.234/api/`,
});
api.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Token bc6040a552b68c265ae8114a08207a40f753ee6b`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
