import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "./types";
import { action } from "typesafe-actions";

export const getUsersRequest = () => action(GET_USERS_REQUEST);
export const getUsersSuccess = (users) => action(GET_USERS_SUCCESS, { users });
export const getUsersFailure = () => action(GET_USERS_FAILURE);
