import { combineReducers } from 'redux';
import posts from './posts.reducers';
import users from './users.reducers';

export const rootReducer = combineReducers({
  posts,
  users,
})

export default rootReducer
