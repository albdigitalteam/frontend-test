import { call, put } from '@redux-saga/core/effects';
import api from '../../../services/api';
import { IComment } from './types';
import { loadSuccess } from './actions';

export function* loadComments() {
  const response: IComment[] = yield call(api.get, 'comments');
  yield put(loadSuccess(response));
}
