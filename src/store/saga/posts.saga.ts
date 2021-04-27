import { call, put, takeEvery } from 'redux-saga/effects';
import { postsConstants ,usersConstants} from 'store/redux/constants';
import { IPosts, IUsers } from 'types';
import { getPosts, getUsers } from 'services';

function* getPostsSaga() {
  const posts: IPosts = yield call(getPosts);
  const users: IUsers = yield call(getUsers);
  if (posts && users) {
    yield put({ type: postsConstants.SET_POSTS, posts });
    yield put({ type: usersConstants.SET_USERS, users });
  }
}

const sagaPosts = [
  takeEvery(postsConstants.GET_POSTS, getPostsSaga)
]
export default sagaPosts;
