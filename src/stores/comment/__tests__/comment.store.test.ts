import { comments } from '../../../../__mocks__/comments';
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
});
