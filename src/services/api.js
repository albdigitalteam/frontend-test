import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { BASE_URL } from '@env';

const api = axios.create({
  baseURL: BASE_URL
});

api.defaults.timeout = 60 * 0.3 * 1000; // 30 sec

export default api;
