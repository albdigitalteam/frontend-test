import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import users from '../../mocks/users';

import api from '../../services/api';

import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  DELETE_POST,
  CREATE_NEW_POST,
  GET_COMMENTS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
  CREATE_NEW_COMMENT,
  Post,
  Comment,
} from '../slices/postsSlice';

interface Response {
  data: Post[] | Comment[];
}

function* getPosts() {
  try {
    const response: AxiosResponse<Response> = yield call(api.get, '/posts');
    yield put(GET_POSTS_SUCCESS({ posts: response.data }));
  } catch (e) {
    yield put(GET_POSTS_FAILURE('erro'));
  }
}

function* getComments() {
  try {
    const response: AxiosResponse<Response> = yield call(api.get, '/comments');
    yield put(GET_COMMENTS_SUCCESS({ comments: response.data }));
  } catch (e) {
    yield put(GET_COMMENTS_FAILURE('erro'));
  }
}

export default function* watcher() {
  yield takeLatest(GET_POSTS, getPosts);
  yield takeLatest(GET_COMMENTS, getComments);
}
