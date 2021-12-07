import {persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import {ReduxState} from '../../../../../interfaces';
import {IPost} from '../interfaces';
import {CREATE_POST, GET_POSTS, DELETE_POST} from '../types';

const initialState: ReduxState<IPost[]> = {
  isDoing: false,
  isDone: false,
  failure: null,
  data: null,
};

export const createPostReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case CREATE_POST.REQUEST:
      return {
        ...initialState,
        isDoing: true,
      };
    case CREATE_POST.SUCCESS:
      return {
        ...initialState,
        isDone: true,
        data: action.data,
      };
    case CREATE_POST.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    default:
      return state;
  }
};

export const postsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_POSTS.REQUEST:
      return {
        ...initialState,
        isDoing: true,
      };
    case GET_POSTS.SUCCESS:
      return {
        ...initialState,
        isDone: true,
        data: action.data as IPost[],
      };
    case GET_POSTS.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    case GET_POSTS.ADD:
      return {
        ...state,
        data: state.data ? [action.post, ...state.data] : state.data,
      };
    case GET_POSTS.REMOVE:
      return {
        ...initialState,
        data: state.data
          ? state.data.filter(post => post.id != action.id)
          : state.data,
      };
    default:
      return state;
  }
};

export const deletePostReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case DELETE_POST.REQUEST:
      return {
        ...initialState,
        isDoing: true,
      };
    case DELETE_POST.SUCCESS:
      return {
        ...initialState,
        isDone: true,
      };
    case DELETE_POST.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    case DELETE_POST.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    default:
      return state;
  }
};
