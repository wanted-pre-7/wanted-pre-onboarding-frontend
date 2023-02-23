import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken !== null) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// client.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { response } = error;

//     if (response) alert(response.data.message);
//     return Promise.reject(error);
//   },
// );
