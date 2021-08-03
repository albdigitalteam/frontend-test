import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const loggedRequest = () => action(AuthTypes.LOGGED_REQUEST);

export const loggedSuccess = () => action(AuthTypes.LOGGED_SUCCESS);

export const loggedError = () => action(AuthTypes.LOGGED_ERROR);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);
