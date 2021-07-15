import { combineReducers } from 'redux';

import post from './post/reducer';
import user from './user/reducer';
import comment from './comment/reducer';

export default combineReducers({
  post,
  user,
  comment,
});
