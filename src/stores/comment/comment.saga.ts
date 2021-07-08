import { put, call } from 'redux-saga/effects';
import { setIsLoading, setComments } from './comment.store';
import api from '@services/instance';
import { AxiosResponse } from 'axios';

export function* getComments() {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.get, '/comments');

    yield put(setComments({ comments: data.data }));

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}
