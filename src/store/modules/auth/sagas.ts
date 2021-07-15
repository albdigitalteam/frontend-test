import { put, all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './types';
import { PostTypes } from '~/store/modules/post/types';
import { UserTypes } from '~/store/modules/user/types';
import { CommentTypes } from '~/store/modules/comment/types';

function* fetchData() {
  yield put({ type: PostTypes.LOAD_POST_REQUEST });
  yield put({ type: UserTypes.LOAD_USER_REQUEST });
  yield put({ type: CommentTypes.LOAD_COMMENT_REQUEST });
}

export default all([takeLatest(AuthTypes.LOGGED_REQUEST, fetchData)]);
