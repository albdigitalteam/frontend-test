import { all } from 'redux-saga/effects';

import user from './userSaga';
import post from './postsSaga';

function* rootSaga() {
  yield all([user(), post()]);
}

export default rootSaga;
