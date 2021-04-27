import { render, screen } from '@testing-library/react';
import Post from './Post';

describe('test post component', () => {
    const component = (
        <Post
            userId={1}
            id={1}
            title='sunt aut facere repellat'
            author='http://test.com'
            body='quia et suscipit nsuscipit recusandae consequuntur ex'
            image_url='https://random.imagecdn.app/510/200'
        />
    );

    beforeEach(() => {
        render(component);
    });    

    test('test post title and author', () => {
        expect(screen.getByTestId('post-title')).toHaveTextContent('sunt aut facere repellathttp://test.com')
    });

    test('test post body', () => {
        expect(screen.getByTestId('post-body')).toHaveTextContent('quia et suscipit nsuscipit recusandae consequuntur ex')
    });

    // test('test post img', () => {
    //     expect(screen.getByTestId('post-image')).toHaveTextContent('https://random.imagecdn.app/510/200')
    // });   
});