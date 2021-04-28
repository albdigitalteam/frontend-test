import axios from 'axios';
import * as apiServices from 'services';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const getUsers = () => {
  return api.get(apiServices.userPath).then(res => res.data)
}

export const getPosts = () => {
  return api.get(apiServices.postsPath).then(res => res.data)
}

export const deletePost = (id: number) => {
  return api.delete(`${apiServices.postsPath}/${id}`);
}
