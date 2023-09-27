import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const postData = <T>(url: string, data: T): Promise<T> =>
    axios.post(url, data).then((response) => response.data);

type DataParams<T> = {
    url: string;
    keys: string[];
    data: T;
    setToStore?: (arg: T) => void;
};

export const usePostData = <T>({
    url,
    data,
    keys,
    setToStore,
}: DataParams<T>) => {
    const { isLoading, data: postResponse } = useQuery({
        queryKey: [keys],
        queryFn: () => postData<T>(url, data),
        onSuccess: (data) => {
            if (setToStore) setToStore(data);
        },
        onError: (err: AxiosError) => {
            console.error(err.message);
        },
    });

    return { isLoading, data: postResponse };
};
