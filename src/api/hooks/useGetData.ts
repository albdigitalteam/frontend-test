import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const fetchData = <T>(url: string): Promise<T> =>
    axios.get(url).then((response) => response.data);

type DataParams = {
    url: string;
    keys: string[];
};

export const useGetData = <T>({ url, keys }: DataParams) => {
    const { isLoading, data } = useQuery({
        queryKey: [keys],
        queryFn: () => fetchData<T>(url),
        onError: (err: AxiosError) => {
            console.error(err.message);
        },
    });

    return { isLoading, data };
};
