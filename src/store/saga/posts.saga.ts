import { call, put, takeEvery } from 'redux-saga/effects';
import { postsConstants ,usersConstants} from 'store/redux/constants';
import { IPosts, IPost,IUsers } from 'types';
import { getPosts, getUsers,deletePost } from 'services';

function* getPostsSaga() {
  const posts: IPosts = yield call(getPosts);
  const users: IUsers = yield call(getUsers);
  if (posts && users) {
    yield put({ type: postsConstants.SET_POSTS, posts });
    yield put({ type: usersConstants.SET_USERS, users });
  }
}

interface deleteAction  {
  type: 'DELETE_POST';
  payload: string;
  id:number;
}

function* deletePostSaga(action: deleteAction) {
console.log("id ",action.id)
const {id} =action;
  const post: IPost = yield call(deletePost,id);
  console.log("post reotrno delete ",post)
  // if (post) {
  //   yield put({ type: postsConstants.SET_DELETED_POST, id }); 
  // }
}

const sagaPosts = [
  takeEvery(postsConstants.DELETE_POST, deletePostSaga)  ,
  takeEvery(postsConstants.GET_POSTS, getPostsSaga),
]

export default sagaPosts;
