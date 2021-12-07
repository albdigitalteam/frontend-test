import {ReduxState} from '@interfaces/';
import {IComment} from '../interfaces';
import {CREATE_COMMENT, GET_COMMENTS_FROM_POST} from '../types';

const initialState: ReduxState<IComment> = {
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

const initialStateComments: ReduxState<IComment[]> = {
  isDoing: false,
  isDone: false,
  failure: null,
  data: null,
};

export const commentsReducer = (
  state = initialStateComments,
  action: any,
): any => {
  switch (action.type) {
    case GET_COMMENTS_FROM_POST.REQUEST:
      return {
        ...initialStateComments,
        isDoing: true,
      };
    case GET_COMMENTS_FROM_POST.SUCCESS:
      return {
        ...initialStateComments,
        isDone: true,
        data: action.data as IComment[],
      };
    case GET_COMMENTS_FROM_POST.FAILURE:
      return {
        ...initialStateComments,
        failure: action.failure,
      };
    case GET_COMMENTS_FROM_POST.ADD:
      return {
        ...state,
        data: state.data ? [action.comment, ...state.data] : state.data,
      };
    default:
      return state;
  }
};
