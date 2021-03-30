export interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface Coordinates {
	lat: string;
	lng: string;
}

export interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Coordinates;
}

export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

export interface StateUser {
	users: Array<User>;
	loading: boolean;
}

export type ActionPayloadUser = boolean | Array<User> | User;

export interface ActionUser {
	type: string;
	payload?: ActionPayloadUser;
}
