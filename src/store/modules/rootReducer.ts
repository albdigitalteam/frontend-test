import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, combineReducers, CombinedState } from 'redux';

import { AplicationState } from '..';
import { AuthTypes } from './auth/types';

import auth from './auth/reducer';
import post from './post/reducer';
import user from './user/reducer';
import comment from './comment/reducer';

const appReducer = combineReducers({
  auth,
  post,
  user,
  comment,
});

const rootReducer = (
  state: CombinedState<AplicationState> | undefined,
  action: AnyAction,
) => {
  if (action.type === AuthTypes.LOGOUT_REQUEST) {
    AsyncStorage.removeItem('persist:root');

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export { rootReducer };
