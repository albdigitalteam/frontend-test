import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import PostCreate from './PostCreate';

describe('test create post', () => {     
    const component = (
        <Provider store={store}>           
                <SnackbarProvider maxSnack={3}>
                    <PostCreate
                        onClose={() => { }} 
                    />
                </SnackbarProvider>           
        </Provider>
    );

    beforeEach(() => {
        render(component);
    });

    test('should display required error when value is invalid', async () => {
        fireEvent.input(screen.getByLabelText('Email'), { target: { value: '' } });
        fireEvent.input(screen.getByLabelText('Título'), { target: { value: '' } });
        fireEvent.input(screen.getByLabelText('Descrição'), { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('submit-button'));       
    });
    test("should not display error when value is valid", async () => {
        fireEvent.input(screen.getByLabelText('Email'), { target: { value: 'Sincere@april.biz' } });
        fireEvent.input(screen.getByLabelText('Título'), { target: { value: 'qui est esse' } });
        fireEvent.input(screen.getByLabelText('Descrição'), { target: { value: 'et iusto sed quo iure\nvoluptatem occaecati' } });
        await waitFor(async () => {
            fireEvent.submit(screen.getByTestId('submit-button'));
        });
        expect(screen.queryAllByRole('alert')).toHaveLength(0);
    });
})

