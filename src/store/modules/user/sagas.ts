import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getUsers } from '#services/user';
import { ResponseListItem } from '#interfaces/Service';
import { User } from '#interfaces/User';

import { fetchedUsers, fetchedUsersError } from './actions';
import { USERS_TYPES } from './types';

export function* fetchUsers() {
	const response: ResponseListItem<User> = yield call(getUsers);
	if (!response.error) {
		yield put(fetchedUsers(response.items));
	} else {
		yield put(fetchedUsersError(response.errorMsg as string));
	}
}

export default all([takeLatest(USERS_TYPES.FETCHING_USERS, fetchUsers)]);
