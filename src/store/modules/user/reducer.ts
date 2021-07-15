import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_USER_REQUEST: {
      return { ...state, loading: true };
    }

    case UserTypes.LOAD_USER_SUCCESS: {
      return { ...state, loading: false, error: false, data: action.payload };
    }

    case UserTypes.LOAD_USER_FAILURE: {
      return { ...state, error: true, loading: false, data: [] };
    }

    case UserTypes.DELETE_USER_STORE: {
      return { error: false, loading: false, data: [] };
    }

    default:
      return state;
  }
};

export default reducer;
