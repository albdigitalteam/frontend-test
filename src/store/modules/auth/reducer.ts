import { Reducer } from 'redux';
import { AuthTypes, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  logged: false,
  error: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGGED_REQUEST:
      return { ...state, logged: false, error: false };

    case AuthTypes.LOGGED_SUCCESS:
      return { ...state, logged: true, error: false };

    case AuthTypes.LOGGED_ERROR:
      return { ...state, logged: false, error: true };

    case AuthTypes.LOGOUT_REQUEST:
      return { ...state, logged: false, error: false };

    default:
      return state;
  }
};

export default reducer;
