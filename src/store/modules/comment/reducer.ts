import { Reducer } from 'redux';
import { CommentState, CommentTypes } from './types';

const INITIAL_STATE: CommentState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<CommentState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentTypes.LOAD_COMMENT_REQUEST:
      return { ...state, loading: true };

    case CommentTypes.LOAD_COMMENT_SUCCESS: {
      return { ...state, loading: false, error: false, data: action.payload };
    }

    case CommentTypes.LOAD_COMMENT_FAILURE:
      return { ...state, error: true, loading: false, data: [] };

    case CommentTypes.ADD_COMMENT_REQUEST: {
      const { payload } = action;

      const posts = state.data;

      const data = [
        ...posts,
        { ...payload, id: posts[posts.length - 1].id + 1 },
      ];

      return {
        error: false,
        loading: false,
        data,
      };
    }

    case CommentTypes.DELETE_COMMENT_STORE: {
      return { error: false, loading: false, data: [] };
    }

    default:
      return state;
  }
};

export default reducer;
