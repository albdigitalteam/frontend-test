import { Reducer } from 'redux';
import { PostState, PostTypes } from './types';

const INITIAL_STATE: PostState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<PostState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypes.LOAD_POST_REQUEST:
      return { ...state, loading: true };

    case PostTypes.LOAD_POST_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };

    case PostTypes.LOAD_POST_FAILURE:
      return { ...state, error: true, loading: false, data: [] };

    case PostTypes.ADD_POST_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };

    case PostTypes.DELETE_POST_REQUEST:
      return { ...state, error: true };

    case PostTypes.DELETE_POST_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload };

    default:
      return state;
  }
};

export default reducer;
