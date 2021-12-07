import {IUser} from '../interfaces';

export const user = (state: any) => {
  return state.userReducerPersisted as IUser;
};
