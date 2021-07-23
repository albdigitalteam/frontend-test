import { all, takeLatest } from 'redux-saga/effects';

import { PostTypes } from './posts/types';
import { UserTypes } from './users/types';
import { CommentTypes } from './comments/types';
import { loadPosts } from './posts/sagas';
import { loadUsers } from './users/sagas';
import { loadComments } from './comments/sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(PostTypes.LOAD_REQUEST, loadPosts),
    takeLatest(UserTypes.LOAD_REQUEST, loadUsers),
    takeLatest(CommentTypes.LOAD_REQUEST, loadComments),
  ]);
}
