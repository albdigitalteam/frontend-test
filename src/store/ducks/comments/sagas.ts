import { call, put } from '@redux-saga/core/effects';
import api from '../../../services/api';
import { IComment } from './types';
import { loadSuccess } from './actions';

type Params = { postId: number; type: string };
export function* loadComments({ postId }: Params) {
  const response: IComment[] = yield call(api.get, `comments?postId=${postId}`);
  yield put(loadSuccess(response));
}
