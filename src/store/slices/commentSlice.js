/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentsData: [],
  isLoading: false,
  errorMessage: null,
  status: null,
  hasError: false
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    FILTER_COMMENTS: state => ({ ...state, isLoading: true }),
    FILTER_COMMENTS_SUCCESS: (state, { payload: { commentsData } }) => ({
      ...state,
      commentsData,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      status: null
    }),
    FILTER_COMMENTS_FAILURE: (
      state,
      { payload: { errorMessage, status } }
    ) => ({
      ...state,
      errorMessage,
      status,
      hasError: true,
      isLoading: false
    }),
    SEND_COMMENTS: state => ({ ...state, isLoading: true }),
    SEND_COMMENTS_SUCCESS: (state, { payload: { status } }) => ({
      ...state,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      status
    }),
    SEND_COMMENTS_FAILURE: (state, { payload: { errorMessage, status } }) => ({
      ...state,
      errorMessage,
      status,
      hasError: true,
      isLoading: false
    })
  }
});

const { actions, reducer } = commentSlice;

export const commentState = initialState;

export const {
  FILTER_COMMENTS,
  FILTER_COMMENTS_SUCCESS,
  FILTER_COMMENTS_FAILURE,
  SEND_COMMENTS,
  SEND_COMMENTS_SUCCESS,
  SEND_COMMENTS_FAILURE
} = actions;
export default reducer;
