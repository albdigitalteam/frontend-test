import { action } from 'typesafe-actions';
import { CommentTypes, IComment } from './types';

export const loadRequest = () => action(CommentTypes.LOAD_REQUEST);

export const loadSuccess = (data: IComment[]) =>
  action(CommentTypes.LOAD_SUCCESS, data);
