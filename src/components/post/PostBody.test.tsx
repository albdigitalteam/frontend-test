import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import PostBody from './PostBody';

describe('test post component', () => {
    const component = (
        <Provider store={store}>
            <PostBody
                id={1}
                body='quia et suscipit nsuscipit recusandae consequuntur ex'
            />
        </Provider>
    );

    beforeEach(() => {
        render(component);
    });

    test('post body', () => {
        expect(screen.getByTestId('post-body')).toHaveTextContent('quia et suscipit nsuscipit recusandae consequuntur ex')
    });
});