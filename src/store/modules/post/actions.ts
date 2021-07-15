import { action } from 'typesafe-actions';
import { PostTypes, Post, AddPost } from './types';

export const loadPostRequest = () => action(PostTypes.LOAD_POST_REQUEST);

export const loadPostSuccess = (data: Post[]) =>
  action(PostTypes.LOAD_POST_SUCCESS, data);

export const loadPostFailure = () => action(PostTypes.LOAD_POST_FAILURE);

export const addPostRequest = (data: AddPost) =>
  action(PostTypes.ADD_POST_REQUEST, data);

export const addPostSuccess = (data: Post[]) =>
  action(PostTypes.ADD_POST_SUCCESS, data);

export const deletePostRequest = (id: number) =>
  action(PostTypes.DELETE_POST_REQUEST, id);

export const deletePostSuccess = (data: Post[]) =>
  action(PostTypes.DELETE_POST_SUCCESS, data);
