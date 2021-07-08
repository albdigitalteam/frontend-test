import { posts } from '../../../../__mocks__/posts';
import { postSlice } from '../post.store';

describe('posts store', () => {
  const { actions, reducer } = postSlice;
  const initialState = {
    posts: [],
    isLoading: false,
  };

  it('should set posts list', () => {
    expect(reducer(initialState, actions.setPosts({ posts }))).toEqual({
      ...initialState,
      posts: posts,
    });
  });
});
