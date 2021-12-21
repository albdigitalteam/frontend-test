import { createAction, props } from '@ngrx/store';
import { CommentsEntity } from './comments.models';

export const loadComments = createAction('[Comments Page] Load Comments');

export const loadCommentsSuccess = createAction(
  '[Comments/API] Load Comments Success',
  props<{ comments: CommentsEntity[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments/API] Load Comments Failure',
  props<{ error: any }>()
);
