import { cloneableGenerator } from '@redux-saga/testing-utils';
import { put, call } from 'redux-saga/effects';
import { newPost, posts } from '../../../../__mocks__/posts';
import api from '../../../services/instance';

import { addPost, getPosts } from '../post.saga';

describe('posts flow', () => {
  it('fetch posts success', async () => {
    const generator = cloneableGenerator(getPosts)();

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

  it('add post success', async () => {
    const generator = cloneableGenerator(addPost)({ post: newPost });

    const clone = generator.clone();

    expect(clone.next().value).toEqual(
      put({
        type: 'posts/setIsLoading',
        payload: true,
      }),
    );

    expect(clone.next(true).value).toEqual(
      call(api.post, '/posts', { ...newPost }),
    );

    const response = { status: 200, data: { data: newPost } };

    expect(clone.next(response).value).toEqual(
      put({
        type: 'posts/setAddPost',
        payload: {
          post: newPost,
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
