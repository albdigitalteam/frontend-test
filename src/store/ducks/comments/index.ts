import { Reducer } from 'redux';
import { ICommentState, CommentTypes } from './types';

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
    case CommentTypes.SAVE_REQUEST: {
      return { ...state, data: state.data.concat([action.payload]) };
    }
    default:
      return state;
  }
};

export default reducer;
