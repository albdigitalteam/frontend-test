import { action } from 'typesafe-actions';
import { CommentTypes, IComment } from './types';

export const loadRequest = (postId: number) => ({
  type: CommentTypes.LOAD_REQUEST,
  postId,
});

export const loadSuccess = (data: IComment[]) =>
  action(CommentTypes.LOAD_SUCCESS, data);

export const saveRequest = (data: IComment) =>
  action(CommentTypes.SAVE_REQUEST, data);
