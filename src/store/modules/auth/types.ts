export enum AuthTypes {
  LOGGED_REQUEST = '@auth/LOGGED_REQUEST',
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
}

export interface Auth {
  logged: boolean;
}

export type AuthState = Auth;
