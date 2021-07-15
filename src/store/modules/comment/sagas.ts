import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { CommentTypes, Comment } from './types';
import { loadCommentSuccess, loadCommentFailure } from './actions';

interface IResponse {
  data: Comment[];
}

function* loadRequest() {
  try {
    const response: IResponse = yield call(api.get, '/comments');

    yield put(loadCommentSuccess(response.data));
  } catch (error) {
    yield put(loadCommentFailure());
  }
}

export default all([
  takeLatest(CommentTypes.LOAD_COMMENT_REQUEST, loadRequest),
]);
