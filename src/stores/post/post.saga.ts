import { put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '@services/instance';
import { setIsLoading, setPosts, setDeletePost } from './post.store';
import { ActionDeletePostType } from './post.types';

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
    console.log(data);

    if (data.status === 200) {
      yield put(setDeletePost({ postId }));
    }

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}
