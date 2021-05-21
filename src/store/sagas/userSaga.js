import { call, put, takeEvery } from 'redux-saga/effects';
import api from '@/services/api';
import {
  LOADING_USERS,
  LOADING_USERS_SUCCESS,
  LOADING_USERS_FAILURE
} from '@/store/slices/userSlice';

export function* loadingUsers() {
  try {
    const { data } = yield call(api.get, `users`);

    const usersData = data;

    yield put(
      LOADING_USERS_SUCCESS({
        usersData
      })
    );
  } catch (error) {
    yield put(
      LOADING_USERS_FAILURE({
        hasError: true,
        errorMessage: error.response
          ? error.response.data.message
          : 'Não conseguimos carregar os dados',
        status: error.response ? error.response.status : 400
      })
    );
  }
}

export default function* watcher() {
  yield takeEvery(LOADING_USERS, loadingUsers);
}
