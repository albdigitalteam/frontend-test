import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface UserState {
  users: User[];
  userLogged?: User;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null
};

interface setUserLogged {
  user: User;
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    SET_USERS: (state) => {
      state.isLoading = true;
    },
    SET_USERS_SUCCESS: (state, { payload }) => {
      state.users = payload.users;
      state.userLogged = payload.users[0];
      state.isLoading = false;
    },
    SET_USERS_FAILURE: (state, { payload }) => {
      (state.error = payload.error), (state.isLoading = false);
    },
    SET_USER_LOGGED: (state, { payload }: PayloadAction<setUserLogged>) => {
      state.userLogged = payload.user;
    }
  }
});

const { actions, reducer } = userSlice;

export const {
  SET_USERS,
  SET_USERS_SUCCESS,
  SET_USERS_FAILURE,
  SET_USER_LOGGED
} = actions;

export default reducer;
