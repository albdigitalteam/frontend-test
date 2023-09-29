import { queryClient } from './setup';
import { QueryClientProvider } from '@tanstack/react-query';
import RootStore from './stores';
import { ReactNode } from 'react';

function ProvidersWrapper({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <RootStore.StoreProvider value={RootStore.initialInstance}>
                {children}
            </RootStore.StoreProvider>
        </QueryClientProvider>
    );
}

export default ProvidersWrapper;
