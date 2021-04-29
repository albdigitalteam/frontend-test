import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from 'store';
import PostBottom from './PostBottom';

describe('test post bottom component', () => {
    const component = (
        <Provider store={store}>           
                <SnackbarProvider maxSnack={3}>
                    <PostBottom
                        id={1}
                        commentsCount={5}
                    />
                </SnackbarProvider>            
        </Provider>
    );

    beforeEach(() => {
        render(component);
    });

    test('post bottom', () => {
        expect(screen.getByTestId('post-bottom')).toBeInTheDocument()
    });
});