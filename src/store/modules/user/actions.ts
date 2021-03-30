import { USERS_TYPES } from './types';
import { User } from '#interfaces/User';

export function fetchingUsers() {
	return {
		type: USERS_TYPES.FETCHING_USERS
	};
}

export function fetchedUsers(users: Array<User>) {
	return {
		type: USERS_TYPES.FETCHED_USERS,
		payload: users
	};
}

export function fetchedUsersError(message: string) {
	return {
		type: USERS_TYPES.FETCHED_USERS_ERRROR,
		payload: message
	};
}
