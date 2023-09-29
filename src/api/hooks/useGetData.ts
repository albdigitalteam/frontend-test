import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const fetchData = <T>(url: string): Promise<T> =>
    axios.get(url).then((response) => response.data);

type DataParams<T> = {
    url: string;
    keys: string[];
    setToStore?: (arg: T) => void;
};

export const useGetData = <T>({ url, keys, setToStore }: DataParams<T>) => {
    const { isLoading, data } = useQuery({
        queryKey: [keys],
        queryFn: () => fetchData<T>(url),
        onSuccess: (data) => {
            if (setToStore) setToStore(data);
        },
        onError: (err: AxiosError) => {
            console.error(err.message);
        },
    });

    return { isLoading, data };
};
