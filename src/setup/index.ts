import { QueryClient } from '@tanstack/react-query';
import './axios';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
});
