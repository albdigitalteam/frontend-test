import { combineReducers } from '@reduxjs/toolkit';

import user from './usersSlice';
import post from './postsSlice';

export default combineReducers({ user, post });
