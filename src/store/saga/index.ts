import { all } from 'redux-saga/effects';
import sagaPosts from './posts.saga';

export default function* rootSaga() {
  yield all([
    ...sagaPosts,
  ])
}
