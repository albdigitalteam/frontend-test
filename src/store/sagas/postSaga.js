import { call, put, takeEvery } from 'redux-saga/effects';
import api from '@/services/api';
import {
  LOADING_POSTS,
  LOADING_POSTS_SUCCESS,
  LOADING_POSTS_FAILURE
} from '@/store/slices/postSlice';

export function* loadingPosts() {
  try {
    const response = yield call(api.get, `users`);
    const users = response.data;

    const { data } = yield call(api.get, `posts`);
    const posts = data;

    const postsData = posts.map(item => {
      return {
        id: item.id,
        name: users.find(user => user.id === item.userId).name,
        nameName: users.find(user => user.id === item.userId).username,
        title: item.title,
        body: item.body
      };
    });

    yield put(
      LOADING_POSTS_SUCCESS({
        postsData
      })
    );
  } catch (error) {
    yield put(
      LOADING_POSTS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os dados dos posts',
        status: error.response ? error.response.status : 400
      })
    );
  }
}

export default function* watcher() {
  yield takeEvery(LOADING_POSTS, loadingPosts);
}
