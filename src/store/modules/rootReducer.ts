import { combineReducers } from 'redux';

import post from './post/reducer';
import user from './user/reducer';

export default combineReducers({ post, user });
