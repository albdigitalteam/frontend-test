import { put, all, takeLatest, call } from 'redux-saga/effects';

import { loggedError, loggedSuccess } from './actions';

import { AuthTypes } from './types';
// import { PostTypes } from '~/store/modules/post/types';
// import { UserTypes } from '~/store/modules/user/types';
// import { CommentTypes } from '~/store/modules/comment/types';
// import { loadUserRequest } from '../user/actions';
import { loadRequest } from '../user/sagas';
import { loadRequest as loadPostRequest } from '../post/sagas';
import { loadRequest as loadCommentRequest } from '../comment/sagas';

function* fetchData() {
  try {
    // yield put({ type: PostTypes.LOAD_POST_REQUEST });
    // yield put({ type: UserTypes.LOAD_USER_REQUEST });
    // yield put({ type: CommentTypes.LOAD_COMMENT_REQUEST });
    yield call(loadRequest);
    yield call(loadPostRequest);
    yield call(loadCommentRequest);

    // throw new Error('Error');

    yield put(loggedSuccess());
  } catch (error) {
    console.tron.log('error');
    yield put(loggedError());
  }
}

export default all([takeLatest(AuthTypes.LOGGED_REQUEST, fetchData)]);
