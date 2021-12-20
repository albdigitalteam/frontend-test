import { PostsEntity } from './posts.models';
import { postsAdapter, PostsPartialState, initialState } from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

describe('Posts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPostsId = (it: PostsEntity) => it.id;
  const createPostsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PostsEntity);

  let state: PostsPartialState;

  beforeEach(() => {
    state = {
      posts: postsAdapter.setAll(
        [
          createPostsEntity('PRODUCT-AAA'),
          createPostsEntity('PRODUCT-BBB'),
          createPostsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Posts Selectors', () => {
    it('getAllPosts() should return the list of Posts', () => {
      const results = PostsSelectors.getAllPosts(state);
      const selId = getPostsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PostsSelectors.getSelected(state) as PostsEntity;
      const selId = getPostsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getPostsLoaded() should return the current "loaded" status', () => {
      const result = PostsSelectors.getPostsLoaded(state);

      expect(result).toBe(true);
    });

    it('getPostsError() should return the current "error" state', () => {
      const result = PostsSelectors.getPostsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
