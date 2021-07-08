import { put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '@services/instance';
import {
  setIsLoading,
  setPosts,
  setDeletePost,
  setAddPost,
} from './post.store';
import { ActionAddPostType, ActionDeletePostType } from './post.types';

export function* getPosts() {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.get, '/posts');

    yield put(setPosts({ posts: data.data }));

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}

export function* deletePost({ postId }: ActionDeletePostType) {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.delete, `/posts/${postId}`);

    if (data.status === 200) {
      yield put(setDeletePost({ postId }));
    }

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}

export function* addPost({ post }: ActionAddPostType) {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.post, '/posts', { ...post });

    if (data.status === 200) {
      yield put(setAddPost({ post }));
    }

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}
