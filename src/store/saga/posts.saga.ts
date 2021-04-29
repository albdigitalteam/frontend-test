import { call, put, takeEvery } from 'redux-saga/effects';
import { postsConstants, usersConstants, commentsConstants } from 'store/redux/constants';
import { IPosts, IPost, IUsers, IComments } from 'types';
import { getPosts, getPost, getUsers, getComments, deletePost } from 'services';

interface IDdeletePostAction {
  type: 'DELETE_POST';
  payload: string;
  id: number;
}

interface IGetPostAction {
  type: 'GET_POST';
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

function* getPostSaga(action: IGetPostAction) {
  const { id } = action;
  const post: IPost = yield call(getPost, id);
  const users: IUsers = yield call(getUsers);
  const comments: IComments = yield call(getComments);
  if (post && users && comments) { 
    yield put({ type: postsConstants.SET_POST, post });
    yield put({ type: usersConstants.SET_USERS, users });
    yield put({ type: commentsConstants.SET_COMMENTS, comments });
  }
}

function* deletePostSaga(action: IDdeletePostAction) {
  const { id } = action;
  const post: IPost = yield call(deletePost, id);
  if (post)
    yield put({ type: postsConstants.SET_DELETED_POST, id });
}

const sagaPosts = [
  takeEvery(postsConstants.GET_POSTS, getPostsSaga),
  takeEvery(postsConstants.GET_POST, getPostSaga),
  takeEvery(postsConstants.DELETE_POST, deletePostSaga),

]

export default sagaPosts;
