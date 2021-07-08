import { put, call } from 'redux-saga/effects';
import { setIsLoading, setPosts } from './post.store';
import api from '@services/instance';
import { AxiosResponse } from 'axios';

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
