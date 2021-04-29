import { postsConstants } from 'store/redux/constants';
import { IPost } from 'types';

export const getPosts = () => ({
  type: postsConstants.GET_POSTS,
})

export const addPost = (post: IPost) => ({
  type: postsConstants.ADD_POST,
  post,
})

export const getPost = (id: number) => ({
  type: postsConstants.GET_POST,
  id,
})

export const deletePost = (id: number) => ({
  type: postsConstants.DELETE_POST,
  id,
})

