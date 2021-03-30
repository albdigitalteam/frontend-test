export interface ResponseListItem<T> {
	items: Array<T>;
	error?: boolean;
	errorMsg?: string;
}

export interface ResponseItem<T> {
	item: T;
	error?: boolean;
	errorMsg?: string;
}
