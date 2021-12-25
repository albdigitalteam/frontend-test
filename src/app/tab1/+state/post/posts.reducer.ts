import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, props, Store } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';

export interface State extends EntityState<PostsEntity> {
  selectedId?: string | number; // which Posts record has been selected
  loaded: boolean; // has the Posts list been loaded
  error?: string | null; // last known error (if any)
}

export interface PostsPartialState {
  readonly [POSTS_FEATURE_KEY]: State;
}

export const postsAdapter: EntityAdapter<PostsEntity> =
  createEntityAdapter<PostsEntity>();

export const initialState: State = postsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const postsReducer = createReducer(
  initialState,
  on(PostsActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    postsAdapter.setAll(posts, { ...state, loaded: true })
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(PostsActions.deletePost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PostsActions.deletePostSuccess, (state, { post }) =>
    postsAdapter.removeOne(post.id, { ...state, loaded: true })
  ),
  on(PostsActions.deletePostFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(PostsActions.createPost, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PostsActions.createPostSuccess, (state, { post }) =>
    postsAdapter.addOne(post, { ...state, loaded: true })
  ),
  on(PostsActions.createPostFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducer(state: State | undefined, action: Action) {
  return postsReducer(state, action);
}
