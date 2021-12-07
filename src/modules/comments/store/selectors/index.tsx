import {ReduxState} from '@interfaces/';
import {IComment} from '../interfaces';

export const comments = (state: any): ReduxState<IComment[]> => {
  return state.commentsReducer;
};

export const createCommentState = (state: any): ReduxState<IComment> => {
  return state.createCommentReducer;
};
