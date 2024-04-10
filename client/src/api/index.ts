import axios from 'axios';

export const baseURL =
  window.location.hostname === 'localhost' ? 'http://localhost:4000/api' : 'https://js-task-fpix.onrender.com/api';

const instance = axios.create({
  baseURL,
});

export default instance;
