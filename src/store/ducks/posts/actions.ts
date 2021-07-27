import { action } from 'typesafe-actions';
import { PostTypes, IPost } from './types';

export const loadRequest = () => action(PostTypes.LOAD_REQUEST);
export const loadSuccess = (data: IPost[]) =>
  action(PostTypes.LOAD_SUCCESS, data);
export const loadError = () => action(PostTypes.LOAD_ERROR);
export const saveRequest = (data: IPost) =>
  action(PostTypes.SAVE_REQUEST, data);
export const deleteRequest = (postId: number) =>
  action(PostTypes.DELETE_REQUEST, postId);
export const deleteSuccess = () => action(PostTypes.DELETE_SUCCCESS);
