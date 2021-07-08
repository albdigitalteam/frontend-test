export interface IUser {
  id: number;
  name: string;
  username: string;
}

export interface IUserState {
  users: IUser[];
  isLoading: boolean;
}

export interface ISetUsers {
  users: IUser[];
}

export const userSagaActions = {
  GET_USERS: 'GET_USERS',
};

export type ActionGetUserType = {
  type: string;
};

export function getUserAction(): ActionGetUserType {
  return {
    type: userSagaActions.GET_USERS,
  };
}
