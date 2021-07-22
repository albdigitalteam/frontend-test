import { all, takeLatest } from 'redux-saga/effects';

import { PostTypes, IPost } from './posts/types';
import { load } from './posts/sagas';

export default function* rootSaga() {
  yield all([takeLatest(PostTypes.LOAD_REQUEST, load)]);
}
