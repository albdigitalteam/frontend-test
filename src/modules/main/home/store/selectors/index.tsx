import {ReduxState} from '../../../../../interfaces';
import {IPost, IComment} from '../interfaces';

export const posts = (state: any): ReduxState<IPost[]> => {
  return state.postsReducer;
};

export const comments = (state: any): ReduxState<IComment[]> => {
  return state.commentsReducer;
};
