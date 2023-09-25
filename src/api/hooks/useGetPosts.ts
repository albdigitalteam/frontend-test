import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Post } from '../types';

const USERS_KEY = 'USERS';

const fetchPosts = (): Promise<Post[]> =>
    axios.get('/posts').then((response) => response.data);

export const useGetPosts = () => {
    const { isLoading, data } = useQuery({
        queryKey: [USERS_KEY],
        queryFn: fetchPosts,
        onError: (err: AxiosError) => {
            console.error(err.message);
        },
    });

    return { isLoading, data };
};
