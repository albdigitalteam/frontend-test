import { postsConstants } from 'store/redux/constants';
import postsReducer from 'store/redux/reducers/posts.reducers';

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut"
    }
];

describe('test posts reducer', () => {
    test('should handle SET_POSTS', () => {
        const setAction = {
            type: postsConstants.SET_POSTS,
            posts,
        };
        expect(postsReducer([], setAction)).toEqual(posts);
    });
});


