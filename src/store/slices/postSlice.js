/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsData: [],
  isLoading: false,
  errorMessage: null,
  status: null,
  hasError: false
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    LOADING_POSTS: state => ({ ...state, isLoading: true }),
    LOADING_POSTS_SUCCESS: (state, { payload: { postsData } }) => ({
      ...state,
      postsData,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      status: null
    }),
    LOADING_POSTS_FAILURE: (state, { payload: { errorMessage, status } }) => ({
      ...state,
      errorMessage,
      status,
      hasError: true,
      isLoading: false
    })
  }
});

const { actions, reducer } = postSlice;

export const postState = initialState;

export const { LOADING_POSTS, LOADING_POSTS_SUCCESS, LOADING_POSTS_FAILURE } =
  actions;
export default reducer;
