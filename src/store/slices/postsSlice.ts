import { createSlice } from '@reduxjs/toolkit';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  name: string;
  email: string;
  body: string;
  postId: number;
  id: number;
}

export interface PostsState {
  posts: Post[];
  comments: Comment[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  comments: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    GET_POSTS: state => {
      state.isLoading = true;
    },
    GET_POSTS_SUCCESS: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.posts;
    },
    GET_POSTS_FAILURE: (state, { payload }) => {
      state.error = payload.error;
      state.isLoading = false;
    },
    DELETE_POST: (state, { payload }) => {
      state.posts = state.posts.filter(post => post.id !== payload.id);
      state.comments = state.comments.filter(
        comment => comment.postId !== payload.id,
      );
    },
    CREATE_NEW_POST: (state, { payload }) => {
      const biggerId = Math.max(...state.posts.map(post => post.id));
      state.posts = [{ ...payload.post, id: biggerId + 1 }, ...state.posts];
    },
    GET_COMMENTS: state => {
      state.isLoading = true;
    },
    GET_COMMENTS_SUCCESS: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload.comments;
    },
    GET_COMMENTS_FAILURE: (state, { payload }) => {
      state.error = payload.error;
      state.isLoading = false;
    },
    CREATE_NEW_COMMENT: (state, { payload }) => {
      const biggerId = Math.max(...state.comments.map(comment => comment.id));
      state.comments = [
        ...state.comments,
        { ...payload.comment, id: biggerId + 1 },
      ];
    },
  },
});

const { actions, reducer } = userSlice;

export const {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POST,
  CREATE_NEW_POST,
  GET_COMMENTS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
  CREATE_NEW_COMMENT,
} = actions;

export default reducer;
