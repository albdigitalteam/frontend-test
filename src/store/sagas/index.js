import { all } from 'redux-saga/effects';

import post from './postSaga';
import user from './userSaga';
import comment from './commentSaga';

export default function* rootSaga() {
  yield all([post(), user(), comment()]);
}
