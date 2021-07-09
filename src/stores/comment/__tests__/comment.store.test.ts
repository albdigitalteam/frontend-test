import {
  addedComment,
  comments,
  newComment,
} from '../../../../__mocks__/comments';
import { commentSlice } from '../comment.store';

describe('comments store', () => {
  const { actions, reducer } = commentSlice;
  const initialState = {
    comments: [],
    isLoading: false,
  };

  it('should set comments list', () => {
    expect(reducer(initialState, actions.setComments({ comments }))).toEqual({
      ...initialState,
      comments: comments,
    });
  });

  it('should add new comment', () => {
    let store = reducer(initialState, actions.setComments({ comments }));

    expect(store).toEqual({
      ...initialState,
      comments: comments,
    });

    store = reducer(store, actions.setAddComment({ comment: newComment }));

    expect(store).toEqual({
      ...initialState,
      comments: addedComment,
    });
  });
});
