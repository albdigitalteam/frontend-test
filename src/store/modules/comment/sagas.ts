import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '~/services/api';

import { AplicationState } from '~/store';
import { CommentTypes, Comment } from './types';
import {
  loadCommentSuccess,
  loadCommentFailure,
  addCommentSuccess,
  addCommentRequest,
} from './actions';

interface IResponse {
  data: Comment[];
}

export function* loadRequest() {
  try {
    const response: IResponse = yield call(api.get, '/comments');

    yield put(loadCommentSuccess(response.data));
  } catch (error) {
    yield put(loadCommentFailure());
  }
}

function* addRequest({ payload }: ReturnType<typeof addCommentRequest>) {
  const stateComment: IResponse = yield select(
    (state: AplicationState) => state.comment,
  );

  const dataComments = stateComment.data.filter(
    (comment) => comment.postId === payload.postId,
  );

  const comments = [
    ...stateComment.data,
    {
      ...payload,
      id: dataComments.length
        ? dataComments[dataComments.length - 1].id + 1
        : 1,
    },
  ];

  yield put(addCommentSuccess(comments));
}

export default all([
  takeLatest(CommentTypes.LOAD_COMMENT_REQUEST, loadRequest),
  takeLatest(CommentTypes.ADD_COMMENT_REQUEST, addRequest),
]);
