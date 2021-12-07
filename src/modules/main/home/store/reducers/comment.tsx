import {persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import {ReduxState} from '../../../../../interfaces';
import {Comment} from '../interfaces';
import {CREATE_COMMENT, GET_COMMENTS_FROM_POST} from '../types';

const initialState: ReduxState<Comment> = {
  isDoing: false,
  isDone: false,
  failure: null,
  data: null,
};

export const createCommentReducer = (
  state = initialState,
  action: any,
): any => {
  switch (action.type) {
    case CREATE_COMMENT.REQUEST:
      return {
        ...initialState,
        isDoing: true,
      };
    case CREATE_COMMENT.SUCCESS:
      return {
        ...initialState,
        isDone: true,
        data: action.data,
      };
    case CREATE_COMMENT.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    default:
      return state;
  }
};

export const commentsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case GET_COMMENTS_FROM_POST.REQUEST:
      return {
        ...initialState,
        isDoing: true,
      };
    case GET_COMMENTS_FROM_POST.SUCCESS:
      return {
        ...initialState,
        isDone: true,
        data: action.data as Comment[],
      };
    case GET_COMMENTS_FROM_POST.FAILURE:
      return {
        ...initialState,
        failure: action.failure,
      };
    default:
      return state;
  }
};
