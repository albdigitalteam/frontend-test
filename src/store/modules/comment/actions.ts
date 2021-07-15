import { action } from 'typesafe-actions';
import { CommentTypes, Comment, AddComment } from './types';

export const loadCommentRequest = () =>
  action(CommentTypes.LOAD_COMMENT_REQUEST);

export const loadCommentSuccess = (data: Comment[]) =>
  action(CommentTypes.LOAD_COMMENT_SUCCESS, data);

export const loadCommentFailure = () =>
  action(CommentTypes.LOAD_COMMENT_FAILURE);

export const addCommentRequest = (data: AddComment) =>
  action(CommentTypes.ADD_COMMENT_REQUEST, data);

export const deleteStore = () => action(CommentTypes.DELETE_COMMENT_STORE);
