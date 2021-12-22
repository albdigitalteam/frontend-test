import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const loadUsers = createAction('[Users Page] Load users');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: UsersEntity[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
