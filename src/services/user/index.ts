import { api } from '#services/api';
import { User } from '#interfaces/user';
import { ResponseListItem } from '#interfaces/Service';

export async function getUsers(): Promise<ResponseListItem<User>> {
	try {
		const response = await api.get<Array<User>>('/users');
		return {
			error: false,
			items: response.data,
		};
	} catch (error) {
		return {
			error: true,
			errorMsg: error?.response.data || error.message,
			items: [],
		};
	}
}
