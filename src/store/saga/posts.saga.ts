import { call, put, takeEvery } from 'redux-saga/effects';
import { postsConstants, usersConstants, commentsConstants } from 'store/redux/constants';
import { IPosts, IPost, IUsers,IComments } from 'types';
import { getPosts, getUsers, getComments, deletePost } from 'services';

interface deleteAction {
  type: 'DELETE_POST';
  payload: string;
  id: number;
}

function* getPostsSaga() {
  const posts: IPosts = yield call(getPosts);
  const users: IUsers = yield call(getUsers);
  const comments: IComments = yield call(getComments);
  if (posts && users && comments) {
    yield put({ type: postsConstants.SET_POSTS, posts });
    yield put({ type: usersConstants.SET_USERS, users });
    yield put({ type: commentsConstants.SET_COMMENTS, comments });
  }
}

function* deletePostSaga(action: deleteAction) {
  const { id } = action;
  const post: IPost = yield call(deletePost, id);
  if (post)
    yield put({ type: postsConstants.SET_DELETED_POST, id });
}

const sagaPosts = [
  takeEvery(postsConstants.DELETE_POST, deletePostSaga),
  takeEvery(postsConstants.GET_POSTS, getPostsSaga),
]

export default sagaPosts;
