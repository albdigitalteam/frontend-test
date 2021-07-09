import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserState, ISetUsers } from './user.types';
import type { RootState } from '../reducers';

export const initialState: IUserState = {
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<ISetUsers>) => {
      state.users = action.payload.users;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUsers, setIsLoading } = userSlice.actions;

export const selectGetUsers = (state: RootState): IUser[] => state.users.users;

export const selectGetUserById = (
  state: RootState,
  userId: number,
): IUser | undefined => state.users.users.find(user => user.id === userId);

export const selectPostIsLoading = (state: RootState): boolean =>
  state.posts.isLoading;

export default userSlice.reducer;
