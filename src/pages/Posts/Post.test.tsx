import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import Post from './Post';

describe('test post component', () => {
    const component = (
        <Provider store={store}>
            <Post
                id={1}
                title='sunt aut facere repellat'
                author='http://test.com'
                body='quia et suscipit nsuscipit recusandae consequuntur ex'
                comments={[]}
            />
        </Provider>
    );

    render(component);

    test('test post exist', () => {
        expect(screen.getByAltText('...')).toBeInTheDocument();
    });
});