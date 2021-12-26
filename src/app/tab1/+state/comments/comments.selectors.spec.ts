import { CommentsEntity } from './comments.models';
import { commentsAdapter, CommentsPartialState, initialState } from './comments.reducer';
import * as CommentsSelectors from './comments.selectors';

describe('Comments Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCommentsId = (it: CommentsEntity) => it.id;
  const createCommentsEntity = (name = '', postId = 0, id = 0, email = '', body = '') =>
    ({
      name: name || `name-${id}`,
      postId,
      id,
      email,
      body,
    } as CommentsEntity);

  let state: CommentsPartialState;

  beforeEach(() => {
    state = {
      comments: commentsAdapter.setAll(
        [
          createCommentsEntity('PRODUCT-AAA'),
          createCommentsEntity('PRODUCT-BBB'),
          createCommentsEntity('PRODUCT-CCC'),
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

  describe('Comments Selectors', () => {
    // it('getAllComments() should return the list of Comments', () => {
    //   const results = CommentsSelectors.getAllComments(state);
    //   const selId = getCommentsId(results[1]);

    //   expect(results.length).toBe(3);
    //   expect(selId).toBe('PRODUCT-BBB');
    // });

    // it('getSelected() should return the selected Entity', () => {
    //   const result = CommentsSelectors.getSelected(state) as CommentsEntity;
    //   const selId = getCommentsId(result);

    //   expect(selId).toBe('PRODUCT-BBB');
    // });

    it('getCommentsLoaded() should return the current "loaded" status', () => {
      const result = CommentsSelectors.getCommentsLoaded(state);

      expect(result).toBe(true);
    });

    it('getCommentsError() should return the current "error" state', () => {
      const result = CommentsSelectors.getCommentsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
