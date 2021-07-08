import { put, call } from 'redux-saga/effects';
import { setIsLoading, setUsers } from './user.store';
import api from '@services/instance';
import { AxiosResponse } from 'axios';

export function* getUsers() {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.get, '/users');

    yield put(setUsers({ users: data.data }));

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}
