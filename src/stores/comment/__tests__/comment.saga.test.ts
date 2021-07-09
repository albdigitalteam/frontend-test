import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { comments, newComment } from '../../../../__mocks__/comments';
import api from '../../../services/instance';

import { addComment, getComments } from '../comment.saga';

describe('comments flow', () => {
  it('fetch comments success', async () => {
    const generator = cloneableGenerator(getComments)();

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

  it('add comment success', async () => {
    const generator = cloneableGenerator(addComment)({ comment: newComment });

    const clone = generator.clone();

    expect(clone.next().value).toEqual(
      put({
        type: 'comments/setIsLoading',
        payload: true,
      }),
    );

    expect(clone.next(true).value).toEqual(
      call(api.post, '/comments', { ...newComment }),
    );

    const response = { status: 200, data: { data: newComment } };

    expect(clone.next(response).value).toEqual(
      put({
        type: 'comments/setAddComment',
        payload: {
          comment: newComment,
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
