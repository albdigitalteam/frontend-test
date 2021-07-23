import { action } from 'typesafe-actions';
import { UserTypes, IUser } from './types';

export const loadRequest = () => action(UserTypes.LOAD_REQUEST);

export const loadSuccess = (data: IUser[]) =>
  action(UserTypes.LOAD_SUCCESS, data);
