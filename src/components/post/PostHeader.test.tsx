import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import PostHeader from './PostHeader';

describe('test post component', () => {
    const component = (
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider maxSnack={3}>
                    <PostHeader
                        id={1}
                        title=''
                        author=''
                    />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    );

    beforeEach(() => {
        render(component);
    });

    test('post header', () => {
        expect(screen.getByTestId('post-title')).toBeInTheDocument()
    });
});