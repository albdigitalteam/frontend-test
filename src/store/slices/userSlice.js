/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersData: [],
  isLoading: false,
  errorMessage: null,
  status: null,
  hasError: false
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    LOADING_USERS: state => ({ ...state, isLoading: true }),
    LOADING_USERS_SUCCESS: (state, { payload: { usersData } }) => ({
      ...state,
      usersData,
      isLoading: false,
      hasError: false,
      errorMessage: null,
      status: null
    }),
    LOADING_USERS_FAILURE: (state, { payload: { errorMessage, status } }) => ({
      ...state,
      errorMessage,
      status,
      hasError: true,
      isLoading: false
    })
  }
});

const { actions, reducer } = userSlice;

export const userState = initialState;

export const { LOADING_USERS, LOADING_USERS_SUCCESS, LOADING_USERS_FAILURE } =
  actions;
export default reducer;
