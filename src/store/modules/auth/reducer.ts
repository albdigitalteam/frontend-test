import { Reducer } from 'redux';
import { AuthTypes, AuthState } from './types';

const INITIAL_STATE: AuthState = {
  logged: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGGED_REQUEST:
      return { ...state, logged: true };

    case AuthTypes.LOGOUT_REQUEST:
      return { ...state, logged: false };

    default:
      return state;
  }
};

export default reducer;
