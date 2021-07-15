export enum UserTypes {
  LOAD_USER_REQUEST = '@user/LOAD_USER_REQUEST',
  LOAD_USER_SUCCESS = '@user/LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE = '@user/LOAD_USER_FAILURE',
  DELETE_USER_STORE = '@user/DELETE_USER_STORE',
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
