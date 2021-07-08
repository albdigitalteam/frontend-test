import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { posts } from '../../../../__mocks__/posts';
import api from '../../../services/instance';

import { getPosts } from '../post.saga';

describe('posts flow', () => {
  const generator = cloneableGenerator(getPosts)();

  it('fetch posts success', async () => {
    const clone = generator.clone();

    expect(clone.next().value).toEqual(
      put({
        type: 'posts/setIsLoading',
        payload: true,
      }),
    );

    expect(clone.next(true).value).toEqual(call(api.get, '/posts'));

    const response = { data: { data: posts } };

    expect(clone.next(response).value).toEqual(
      put({
        type: 'posts/setPosts',
        payload: {
          posts: {
            data: posts,
          },
        },
      }),
    );

    expect(clone.next().value).toEqual(
      put({
        type: 'posts/setIsLoading',
        payload: false,
      }),
    );

    expect(clone.next().done).toEqual(true);
  });
});
