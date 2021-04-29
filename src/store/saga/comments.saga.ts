import { call, put, takeEvery } from 'redux-saga/effects';
import { commentsConstants } from 'store/redux/constants';
import { IPosts, IPost, IUsers, IComments } from 'types';
import { getComments, addComment } from 'services';

interface ICommentAction {
  type: 'ADD_COMMENT';
  payload: string;
  id: number;
  post: IPost;
}

function* getCommentsSaga() {
  const comments: IComments = yield call(getComments);
  if (comments)
    yield put({ type: commentsConstants.SET_COMMENTS, comments });
}

function* addCommentSaga(action: ICommentAction) {
  const newComment = action.post;
  const post: IPost = yield call(addComment, newComment);
  if (post)
    yield put({ type: commentsConstants.SET_COMMENT, post });
}


const sagaComments = [
  takeEvery(commentsConstants.GET_COMMENTS, getCommentsSaga),
  takeEvery(commentsConstants.ADD_COMMENT, addCommentSaga),
  // takeEvery(postsConstants.GET_POSTS, getPostsSaga),
]

export default sagaComments;
