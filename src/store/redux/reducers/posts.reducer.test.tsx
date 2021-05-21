import { postsConstants } from 'store/redux/constants';
import postsReducer from 'store/redux/reducers/posts.reducers';

const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut"
};

const posts = [
    post
];

describe('test posts reducer', () => {
    test('should set posts', () => {
        const setPostsAction = {
            type: postsConstants.SET_POSTS,
            posts,
        };
        expect(postsReducer([], setPostsAction)).toEqual(posts);
    });

    test('should set one post', () => {
        const setPostAction = {
            type: postsConstants.SET_POST,
            post,
        };
        expect(postsReducer([], setPostAction)).toEqual(posts);
    });
});





