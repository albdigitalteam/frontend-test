export enum AuthTypes {
  LOGGED_REQUEST = '@auth/LOGGED_REQUEST',
  LOGGED_SUCCESS = '@auth/LOGGED_SUCCESS',
  LOGGED_ERROR = '@auth/LOGGED_ERROR',

  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
}

export interface Auth {
  logged: boolean;
  error: boolean;
}

export type AuthState = Auth;
