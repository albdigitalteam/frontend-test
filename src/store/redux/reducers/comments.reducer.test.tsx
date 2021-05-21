import { commentsConstants } from 'store/redux/constants';
import commentsReducer from 'store/redux/reducers/comments.reducers';

const comment = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quideiciendis et nam sapiente accusantium"
};

const comments = [comment];

describe('test comments reducer', () => {
    test('should set comments', () => {
        const setCommentAction = {
            type: commentsConstants.SET_COMMENTS,
            comments,
        };
        expect(commentsReducer([], setCommentAction)).toEqual(comments);
    });

    test('should set one comment', () => {
        const setCommentAction = {
            type: commentsConstants.SET_COMMENT,
            comment,
        };
        expect(commentsReducer([], setCommentAction)).toEqual(comments);
    });
});





