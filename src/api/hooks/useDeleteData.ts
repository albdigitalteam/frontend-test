import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

const deleteData = (url: string): Promise<void> =>
    axios.delete(url).then((response) => response.data);

type PostParam = {
    url: string;
    id: number;
    setToStore?: (id: number) => void;
};

// Remove the keys here since the API is fake and do not make sense invalidate the cache
export const useDeleteData = ({ url, id, setToStore }: PostParam) => {
    return useMutation({
        mutationFn: () => deleteData(`${url}/${id}`),
        onError: (err: AxiosError) => console.error(err.message),
        onSuccess: () => !!setToStore && setToStore(id),
    });
};
