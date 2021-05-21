import { all } from 'redux-saga/effects';
import sagaPosts from './posts.saga';
import sagaComments from './comments.saga';

export default function* rootSaga() {
  yield all([
    ...sagaPosts,
    ...sagaComments
  ])
}
