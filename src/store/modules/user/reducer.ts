import produce from 'immer';

import { USERS_TYPES } from './types';
import { ActionUser, User, StateUser } from '#interfaces/User';

const INITIAL_STATE: StateUser = {
	users: [],
	loading: false,
};

export default function user(state = INITIAL_STATE, action: ActionUser) {
	return produce(state, (draft) => {
		switch (action.type) {
			case USERS_TYPES.FETCHING_USERS:
				draft.loading = true;
				break;

			case USERS_TYPES.FETCHED_USERS:
				draft.users = action.payload as Array<User>;
				draft.loading = false;
				break;

			default:
		}
	});
}
