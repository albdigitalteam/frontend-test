import {
  GET_POST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
} from "./types";
import { action } from "typesafe-actions";

export const getPostsRequest = () => action(GET_POST_REQUEST);
export const getPostsSuccess = (posts) => action(GET_POST_SUCCESS, { posts });
export const getPostsFailure = () => action(GET_POST_FAILURE);

export const deletePostRequest = (postId) =>
  action(DELETE_POST_REQUEST, { postId });
export const deletePostSuccess = (posts) =>
  action(DELETE_POST_SUCCESS, { posts });
export const deletePostFailure = () => action(GET_POST_FAILURE);

export const newPostRequest = (post) => action(NEW_POST_REQUEST, { post });
export const newPostSuccess = (posts) => action(NEW_POST_SUCCESS, { posts });
export const newPostFailure = () => action(GET_POST_FAILURE);
