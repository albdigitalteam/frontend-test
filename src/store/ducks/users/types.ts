export enum UserTypes {
  LOAD_REQUEST = 'user/LOAD_REQUEST',
  LOAD_SUCCESS = 'user/LOAD_SUCCESS',
}

export interface IUser {
  id: number;
  name: string;
}

export interface IUserState {
  readonly data: IUser[];
}
