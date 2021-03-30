import { all, AllEffect } from 'redux-saga/effects';

import post from './post/sagas';
import user from './user/sagas';

function* rootSaga() {
	const allEffects: AllEffect<unknown> = yield all([post, user]);
	return allEffects;
}

export default rootSaga;
