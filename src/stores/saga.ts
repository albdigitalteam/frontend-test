import { takeEvery, all } from 'redux-saga/effects';
import { getComments, addComment } from './comment/comment.saga';
import { getPosts, deletePost, addPost } from './post/post.saga';
import { getUsers } from './user/user.saga';
import { commentSagaActions } from './comment/comment.types';
import { postSagaActions } from './post/post.types';
import { userSagaActions } from './user/user.types';

function* watchGetComments() {
  yield takeEvery(commentSagaActions.GET_COMMENTS, getComments);
}

function* watchAddComment() {
  yield takeEvery(commentSagaActions.ADD_COMMENT, addComment);
}

function* watchGetPosts() {
  yield takeEvery(postSagaActions.GET_POSTS, getPosts);
}

function* watchDeletePost() {
  yield takeEvery(postSagaActions.DELETE_POST, deletePost);
}

function* watchAddPost() {
  yield takeEvery(postSagaActions.ADD_POST, addPost);
}

function* watchGetUsers() {
  yield takeEvery(userSagaActions.GET_USERS, getUsers);
}

export default function* rootSaga() {
  yield all([
    watchGetComments(),
    watchGetUsers(),
    watchGetPosts(),
    watchDeletePost(),
    watchAddPost(),
    watchAddComment(),
  ]);
}
