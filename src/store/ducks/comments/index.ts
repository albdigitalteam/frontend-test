import { Reducer } from 'redux';
import { ICommentState, CommentTypes, IComment } from './types';

const INITIAL_STATE: ICommentState = {
  data: [],
};

const reducer: Reducer<ICommentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentTypes.LOAD_REQUEST: {
      return { ...state };
    }
    case CommentTypes.LOAD_SUCCESS: {
      return { ...state, data: state.data.concat(action.payload.data) };
    }
    default:
      return state;
  }
};

export default reducer;
