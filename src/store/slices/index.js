import { combineReducers } from '@reduxjs/toolkit';

import posts, { postState } from './postSlice';
import users, { userState } from './userSlice';
import comments, { commentState } from './commentSlice';

export const globalState = {
  posts: postState,
  users: userState,
  comments: commentState
};

export default combineReducers({ posts, users, comments });
