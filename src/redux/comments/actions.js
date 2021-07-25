import {
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  NEW_COMMENTS_REQUEST,
  NEW_COMMENTS_SUCCESS,
} from "./types";
import { action } from "typesafe-actions";

export const getCommentsRequest = () => action(GET_COMMENTS_REQUEST);
export const getCommentsSuccess = (comments) =>
  action(GET_COMMENTS_SUCCESS, { comments });
export const getCommentsFailure = () => action(GET_COMMENTS_FAILURE);

export const newCommentsRequest = (comment) =>
  action(NEW_COMMENTS_REQUEST, { comment });
export const newCommentsSuccess = (comments) =>
  action(NEW_COMMENTS_SUCCESS, { comments });
export const newCommentsFailure = () => action(GET_COMMENTS_FAILURE);
