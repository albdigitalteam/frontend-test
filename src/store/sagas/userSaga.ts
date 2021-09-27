import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../services/api';

import {
  SET_USERS,
  SET_USERS_SUCCESS,
  SET_USERS_FAILURE,
  User
} from '../slices/usersSlice';

interface Response {
  data: User[];
}

function* getUsers() {
  try {
    const response: AxiosResponse<Response> = yield call(api.get, '/users');
    yield put(SET_USERS_SUCCESS({ users: response.data }));
  } catch (e) {
    yield put(SET_USERS_FAILURE('erro'));
  }
}

export default function* watcher() {
  yield takeLatest(SET_USERS, getUsers);
}
