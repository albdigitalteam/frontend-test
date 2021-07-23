import { call, put, take } from '@redux-saga/core/effects';
import api from '../../../services/api';
import { IUser, UserTypes } from './types';
import { loadSuccess } from './actions';
import { IPost, PostTypes } from '../posts/types';

export function* loadUsers() {
  const response: IUser[] = yield call(api.get, 'users');
  yield put(loadSuccess(response));
}
