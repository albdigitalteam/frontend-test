import { getPosts, deletePost, addPost } from 'store/redux/actions';
import { postsConstants } from 'store/redux/constants';

const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut"
};

const id = 1;

describe('test post actions', () => {

    test('should set posts', () => {
        const setPostsAction = {
            type: postsConstants.GET_POSTS
        }
        expect(getPosts()).toEqual(setPostsAction)
    });

    test('should add posts', () => {
        const setPostAction = {
            type: postsConstants.ADD_POST, post
        }
        expect(addPost(post)).toEqual(setPostAction)
    });

    test('should delete post', () => {
        const deleteAction = {
            type: postsConstants.DELETE_POST, id
        }
        expect(deletePost(id)).toEqual(deleteAction)
    });
});
