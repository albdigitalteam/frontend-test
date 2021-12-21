import { Action } from '@ngrx/store';

import * as CommentsActions from './comments.actions';
import { CommentsEntity } from './comments.models';
import { State, initialState, reducer } from './comments.reducer';

describe('Comments Reducer', () => {
  const createCommentsEntity = (name = '', postId = 0, id = 0, email = '', body = ''): CommentsEntity => ({
    name: name || `name-${id}`,
    postId,
    id,
    email,
    body,
  });

  describe('valid Comments actions', () => {
    it('loadCommentsSuccess should return the list of known Posts', () => {
      const comments = [
        createCommentsEntity('PRODUCT-AAA'),
        createCommentsEntity('PRODUCT-zzz'),
      ];
      const action = CommentsActions.loadCommentsSuccess({ comments });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
