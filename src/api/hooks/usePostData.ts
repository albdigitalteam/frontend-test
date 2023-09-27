import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const postData = <T, U>(url: string, data: T): Promise<U> =>
    axios.post(url, data).then((response) => response.data);

type PostParam<U> = {
    url: string;
    setToStore?: (arg: U) => void;
};

// Remove the keys here since the API is fake and do not make sense invalidate the cache
export const usePostData = <T, U>({ url, setToStore }: PostParam<U>) => {
    return useMutation({
        mutationFn: (data: T) => postData<T, U>(url, data),
        onError: (err: AxiosError) => console.log(err.message),
        onSuccess: (data: U) => !!setToStore && setToStore(data),
    });
};
