import { addComment } from 'store/redux/actions';
import { commentsConstants } from 'store/redux/constants';

const comment = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quideiciendis et nam sapiente accusantium"
};

const id = 1;

describe('test comments actions', () => { 

    test('should add posts', () => {
        const setCommentAction = {
            type: commentsConstants.ADD_COMMENT, comment
        }
        expect(addComment(comment)).toEqual(setCommentAction)
    });   
});
