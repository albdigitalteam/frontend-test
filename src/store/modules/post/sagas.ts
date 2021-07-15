import { call, put, select, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { AplicationState } from '~/store';

import {
  loadPostSuccess,
  loadPostFailure,
  addPostRequest,
  addPostSuccess,
} from './actions';

import { PostTypes, Post } from './types';
import { User } from '../user/types';

interface IResponse {
  data: Post[];
}

interface ISelectUser {
  data: User[];
}

interface ISelectPost {
  data: Post[];
}

function* loadRequest() {
  try {
    const response: IResponse = yield call(api.get, '/posts');

    const stateUser: ISelectUser = yield select(
      (state: AplicationState) => state.user,
    );

    const data = response.data
      .map((post) => {
        const user = stateUser.data.find((user) => user.id === post.userId);

        return {
          ...post,
          userName: user?.name || '',
        };
      })
      .sort((a, b) => (a.id < b.id ? 1 : -1));

    yield put(loadPostSuccess(data));
  } catch (error) {
    yield put(loadPostFailure());
  }
}

function* addRequest({ payload }: ReturnType<typeof addPostRequest>) {
  const statePost: ISelectPost = yield select(
    (state: AplicationState) => state.post,
  );

  const stateUser: ISelectUser = yield select(
    (state: AplicationState) => state.user,
  );

  const posts = [
    ...statePost.data,
    { ...payload, id: statePost.data[0].id + 1 },
  ];

  const data = posts
    .map((post) => {
      const user = stateUser.data.find((user) => user.id === post.userId);

      return {
        ...post,
        userName: user?.name || '',
      };
    })
    .sort((a, b) => (a.id < b.id ? 1 : -1));

  yield put(addPostSuccess(data));
}

export default all([
  takeLatest(PostTypes.LOAD_POST_REQUEST, loadRequest),
  takeLatest(PostTypes.ADD_POST_REQUEST, addRequest),
]);
