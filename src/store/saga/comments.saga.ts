import { call, put, takeEvery } from 'redux-saga/effects';
import { commentsConstants } from 'store/redux/constants';
import { IPosts, IPost, IUsers, IComments } from 'types';
import { getComments } from 'services';

// interface deleteAction {
//   type: 'DELETE_POST';
//   payload: string;
//   id: number;
// }

function* getCommentsSaga() {
  const comments: IComments = yield call(getComments);

  if (comments)
    yield put({ type: commentsConstants.SET_COMMENTS, comments });
}

// function* deletePostSaga(action: deleteAction) {
// console.log("id ",action.id)
// const {id} =action;
//   const post: IPost = yield call(deletePost,id);
//   console.log("post reotrno delete ",post)
//   if (post) {
//     yield put({ type: postsConstants.SET_DELETED_POST, id }); 
//   }
// }

const sagaComments = [
  takeEvery(commentsConstants.GET_COMMENTS, getCommentsSaga),
  // takeEvery(postsConstants.GET_POSTS, getPostsSaga),
]

export default sagaComments;
