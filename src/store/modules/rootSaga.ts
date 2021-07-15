import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import comment from './comment/sagas';
import post from './post/sagas';
import user from './user/sagas';

export default function* rootSaga(): Generator {
  return yield all([auth, comment, post, user]);
}
