import { put, call } from 'redux-saga/effects';
import { setIsLoading, setComments, setAddComment } from './comment.store';
import api from '@services/instance';
import { AxiosResponse } from 'axios';
import { ActionAddCommentType } from './comment.types';

export function* getComments() {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.get, '/comments');

    yield put(setComments({ comments: data.data }));

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}

export function* addComment({ comment }: ActionAddCommentType) {
  try {
    yield put(setIsLoading(true));

    const data: AxiosResponse = yield call(api.post, '/comments', {
      ...comment,
    });

    if (data.status === 201) {
      yield put(setAddComment({ comment }));
    }

    yield put(setIsLoading(false));
  } catch (e) {
    yield put(setIsLoading(false));
  }
}
