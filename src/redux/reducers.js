import { combineReducers } from "redux";
import * as posts from "./posts/reducer";
import * as comments from "./comments/reducer";
import * as users from "./users/reducer";

const appPosts = posts.default;
const appComments = comments.default;
const appUsers = users.default;

const reducers = combineReducers({
  appPosts,
  appComments,
  appUsers,
});

export default reducers;
