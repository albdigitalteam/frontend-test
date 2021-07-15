import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loadUserRequest = () => action(UserTypes.LOAD_USER_REQUEST);

export const loadUserSuccess = (data: User[]) =>
  action(UserTypes.LOAD_USER_SUCCESS, data);

export const loadUserFailure = () => action(UserTypes.LOAD_USER_FAILURE);

export const deleteStore = () => action(UserTypes.DELETE_USER_STORE);
