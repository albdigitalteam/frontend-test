import Config from 'react-native-config';
import {ICreatePostDto} from '../store/interfaces';

const BASE_URL_POSTS = `${Config.API_BASE_URL}/posts`;

export const getPosts = async () => {
  return await fetch(`${BASE_URL_POSTS}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const createPost = async (postDto: ICreatePostDto) => {
  return await fetch(`${BASE_URL_POSTS}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postDto),
  });
};

export const deletePost = async (postId: number) => {
  return await fetch(`${BASE_URL_POSTS}/${postId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
