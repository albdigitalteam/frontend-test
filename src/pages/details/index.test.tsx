import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import Details from './index';

describe('render details post', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <SnackbarProvider maxSnack={3}>
                    <MemoryRouter initialEntries={['details/1']}>
                        <Details />
                    </MemoryRouter>
                </SnackbarProvider>

            </Provider>
        )
    });

    test('should display details post', async () => {
        expect(screen.getByTestId('details-element')).toBeInTheDocument();
    });
})
