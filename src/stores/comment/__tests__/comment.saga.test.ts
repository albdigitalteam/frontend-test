import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { comments } from '../../../../__mocks__/comments';
import api from '../../../services/instance';

import { getComments } from '../comment.saga';

describe('comments flow', () => {
  const generator = cloneableGenerator(getComments)();

  it('fetch comments success', async () => {
    const clone = generator.clone();

    expect(clone.next().value).toEqual(
      put({
        type: 'comments/setIsLoading',
        payload: true,
      }),
    );

    expect(clone.next(true).value).toEqual(call(api.get, '/comments'));

    const response = { data: { data: comments } };

    expect(clone.next(response).value).toEqual(
      put({
        type: 'comments/setComments',
        payload: {
          comments: {
            data: comments,
          },
        },
      }),
    );

    expect(clone.next().value).toEqual(
      put({
        type: 'comments/setIsLoading',
        payload: false,
      }),
    );

    expect(clone.next().done).toEqual(true);
  });
});
