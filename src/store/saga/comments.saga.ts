import { call, put, takeEvery } from 'redux-saga/effects';
import { commentsConstants } from 'store/redux/constants';
import { IComment, IComments } from 'types';
import { getComments, addComment } from 'services';

interface ICommentAction {
  type: 'ADD_COMMENT';
  payload: string;
  id: number;
  comment: IComment;
}

function* getCommentsSaga() {
  const comments: IComments = yield call(getComments);
  if (comments)
    yield put({ type: commentsConstants.SET_COMMENTS, comments });
}

function* addCommentSaga(action: ICommentAction) {
  const newComment = action.comment;
  const comment: IComment = yield call(addComment, newComment);
  if (comment)
    yield put({ type: commentsConstants.SET_COMMENT, comment });
}

const sagaComments = [
  takeEvery(commentsConstants.GET_COMMENTS, getCommentsSaga),
  takeEvery(commentsConstants.ADD_COMMENT, addCommentSaga),
]

export default sagaComments;
