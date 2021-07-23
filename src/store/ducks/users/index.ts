import { Reducer } from 'redux';
import { IUserState, UserTypes } from './types';

const INITIAL_STATE: IUserState = {
  data: [],
};

const reducer: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST: {
      return { ...state };
    }
    case UserTypes.LOAD_SUCCESS: {
      return { ...state, data: action.payload.data };
    }
    default:
      return state;
  }
};

export default reducer;
