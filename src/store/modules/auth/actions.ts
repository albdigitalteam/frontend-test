import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const loggedRequest = () => action(AuthTypes.LOGGED_REQUEST);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);
