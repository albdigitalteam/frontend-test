import { createAction, props } from '@ngrx/store';
import { PostsEntity } from './posts.models';

export const init = createAction('[Posts Page] Init');

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: PostsEntity[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);

export const deletePost = createAction(
  '[Posts Page] Delete Post',
  props<{ post: PostsEntity }>()
);

export const deletePostSuccess = createAction(
  '[Posts/API] Delete Post Success',
  props<{ post: any }>()
);

export const deletePostFailure = createAction(
  '[Posts/API] Delete Post Failure',
  props<{ error: any }>()
);

export const createPost = createAction(
  '[Posts Page] Create Post',
  props<{ post: PostsEntity }>()
);

export const createPostSuccess = createAction(
  '[Posts/API] Create Post Success',
  props<{ post: any }>()
);

export const createPostFailure = createAction(
  '[Posts/API] Create Post Failure',
  props<{ error: any }>()
);
