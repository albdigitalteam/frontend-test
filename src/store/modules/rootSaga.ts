import { all } from 'redux-saga/effects';

import post from './post/sagas';
import user from './user/sagas';
import comment from './comment/sagas';

export default function* rootSaga(): any {
  return yield all([post, user, comment]);
}
