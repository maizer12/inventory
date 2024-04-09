import axios from 'axios';

export const baseURL =
  window.location.hostname === 'localhost' ? 'http://localhost:4000/api' : 'https://js-task-fpix.onrender.com/api';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
