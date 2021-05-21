import { call, put, takeEvery } from 'redux-saga/effects';
import api from '@/services/api';
import {
  FILTER_COMMENTS,
  FILTER_COMMENTS_SUCCESS,
  FILTER_COMMENTS_FAILURE,
  SEND_COMMENTS,
  SEND_COMMENTS_SUCCESS,
  SEND_COMMENTS_FAILURE
} from '@/store/slices/commentSlice';

export function* filterComments({ payload: { id } }) {
  try {
    const { data } = yield call(api.get, `comments?postId=${id}`);
    const commentsData = data;

    yield put(
      FILTER_COMMENTS_SUCCESS({
        commentsData
      })
    );
  } catch (error) {
    yield put(
      FILTER_COMMENTS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os dados de comentários',
        status: error.response ? error.response.status : 400
      })
    );
  }
}

export function* sendComments({
  payload: { postId, body, callBackSuccess = () => {} }
}) {
  try {
    const { status } = yield call(api.post, `comments`, {
      postId,
      name: 'Alexandre Marques',
      email: 'Emma@joanny.ca',
      body
    });

    yield put(
      SEND_COMMENTS_SUCCESS({
        status
      })
    );

    callBackSuccess();
  } catch (error) {
    yield put(
      SEND_COMMENTS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os dados de comentários',
        status: error.response ? error.response.status : 400
      })
    );
  }
}

export default function* watcher() {
  yield takeEvery(FILTER_COMMENTS, filterComments);
  yield takeEvery(SEND_COMMENTS, sendComments);
}
