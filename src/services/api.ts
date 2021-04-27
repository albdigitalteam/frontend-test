import axios from 'axios';
import * as apiServices from 'services';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getPosts = async () => {
  return api.get(apiServices.postsPath).then(res => res.data)
}

export const getUsers = async () => {
  return api.get(apiServices.userPath).then(res => res.data)
}
