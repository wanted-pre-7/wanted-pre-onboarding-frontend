import axios from 'axios';
import { ACCESS_TOKEN } from '../constant/authConstant';

const axiosConfig = {
  timeout: 3000,
  baseURL: process.env.REACT_APP_API_URL,
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers) config.headers = {};
    config.headers['Content-Type'] = 'application/json';
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      ACCESS_TOKEN,
    )}`;
    config.headers.Accept = 'application/json';
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response.status === 401) return Promise.reject(error);
    if (response) alert(response.data.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
