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

  it('should delete post', () => {
    let store = reducer(initialState, actions.setPosts({ posts }));

    expect(store).toEqual({
      ...initialState,
      posts: posts,
    });

    store = reducer(store, actions.setDeletePost({ postId: posts[0].id }));

    expect(store).toEqual({
      ...initialState,
      posts: posts.filter(post => post.id !== posts[0].id),
    });
  });
});
