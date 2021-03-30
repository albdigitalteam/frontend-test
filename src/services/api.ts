import axios, { AxiosError } from 'axios';

export const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export const handleApiError = (error: AxiosError) => {
	return error.response?.data.message || error.message;
};
