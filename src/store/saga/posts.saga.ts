import { call, put, takeEvery } from 'redux-saga/effects';
import { postsConstants, usersConstants, commentsConstants } from 'store/redux/constants';
import { IPosts, IPost, IUsers, IComments } from 'types';
import { getPosts, getPost, addPost, getUsers, getComments, deletePost } from 'services';

interface IPostAction {
  type: 'GET_POST' | 'DELETE_POST' | 'ADD_POST';
  payload: string;
  id: number;
  post: IPost;
}

const order = (response: any) => {
  response.sort((a: any, b: any) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }
    return 0;
  });
  return response;
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

function* getPostSaga(action: IPostAction) {
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

function* addPostSaga(action: IPostAction) {
  const newPost = action.post;
  const post: IPost = yield call(addPost, newPost);
  if (post)
    yield put({ type: postsConstants.SET_POST, post });
}

function* deletePostSaga(action: IPostAction) {
  const { id } = action;
  const post: IPost = yield call(deletePost, id);
  if (post)
    yield put({ type: postsConstants.SET_DELETED_POST, id });
}

const sagaPosts = [
  takeEvery(postsConstants.GET_POSTS, getPostsSaga),
  takeEvery(postsConstants.GET_POST, getPostSaga),
  takeEvery(postsConstants.ADD_POST, addPostSaga),
  takeEvery(postsConstants.DELETE_POST, deletePostSaga),

]

export default sagaPosts;
