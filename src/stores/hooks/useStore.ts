import { useContext } from 'react';
import { RootStoreContext } from '../Root';

export function useStore() {
    return useContext(RootStoreContext);
}
