import {getPosts} from 'store/redux/actions';
import { postsConstants } from 'store/redux/constants';

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut"
    }
];

describe('test post actions', () => {
    

    test('should set posts', () => {
        const setPostsAction = {
            type: postsConstants.GET_POSTS
        }
        expect(getPosts()).toEqual(setPostsAction)
    });

    // test('should create an action to delete book', () => {
    //     const deleteAction = {
    //         type: booksContants.DELETE_BOOK, bookId
    //     }
    //     expect(actions.setDeletedBook(bookId)).toEqual(deleteAction)
    // });

    // test('should create an action to edit book', () => {
    //     const editAction = {
    //         type: booksContants.EDIT_BOOK_BY_ID, bookId, book
    //     }
    //     expect(actions.setEditedBook(bookId, book)).toEqual(editAction)
    // });

    // test('should create an action to set all books', () => {
    //     const setBookAction = {
    //         type: booksContants.SET_ALL_BOOKS, books
    //     }
    //     expect(actions.setAllBooks(books)).toEqual(setBookAction)
    // });
});
