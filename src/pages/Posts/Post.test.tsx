import { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Post from './Post';

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should render post data', () => {
    act(() => {
        render(
            <Post
                userId={1}
                id={1}
                title='sunt aut facere repellat'
                author='http://test.com'
                body='quia et suscipit\nsuscipit recusandae consequuntur ex'
                image_url='https://random.imagecdn.app/510/200'
            />,
            container
        );
    });
    expect(container.querySelector("[data-testid='post-title']").con).toEqual('sunt aut facere repellat');
});

