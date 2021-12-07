import {ReduxState} from '../../../../interfaces';
import {IPost} from '../interfaces';

export const posts = (state: any): ReduxState<IPost[]> => {
  return state.postsReducer;
};

export const createPostStatus = (state: any): ReduxState<IPost> => {
  const reducer: ReduxState<IPost> = state.createPostReducer;
  return {
    isDoing: reducer.isDoing,
    isDone: reducer.isDone,
    failure: reducer.failure,
  };
};
