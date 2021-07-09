import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.API_URL,
  timeout: 2 * 60 * 1000,
  validateStatus: function (status) {
    return status < 400;
  },
});

instance.interceptors.request.use(config => {
  config.params = config.params || {};

  return config;
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
