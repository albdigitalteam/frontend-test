import { call, put, takeEvery } from 'redux-saga/effects';
import { action } from 'typesafe-actions'

import { api } from '../../../service'

export const initial_types = {
  request_user: 'REQUEST_ACTIVE_USER',
  set_active_user: 'SET_ACTIVE_USER',
  set_loading: 'SET_INITIAL_LOADING',
  set_active_user_error: 'SET_ACTIVE_USER_error',
}

export const actionGetActiveUser = payload => action(initial_types.request_user, payload)
export const actionLoading = payload => action(initial_types.set_loading, payload)
const actionSetActiveUser = payload => action(initial_types.set_active_user, payload)
const actionSetActiveUserError = payload => action(initial_types.set_active_user_error, payload)

function* actionRequestActiveUser(payload) {
  try {
    yield put(actionSetActiveUserError(''))
    yield put(actionLoading(true))
    const response = yield call(api.get, `/users?email=${payload.payload.email}`)
    if (response?.status === 200) {
      if (response.data.length) {
        yield put(actionSetActiveUser(response.data[0]));
        payload.payload.callback()
      } else {
        yield put(actionSetActiveUserError('Ops! Nenhum usuário encontrado com esse email.'))
        yield put(actionLoading(false))
      }
    } else {
      yield put(actionSetActiveUserError('Verifique email informado!'))
      yield put(actionLoading(false))
    }
  } catch (error) {
    yield put(actionSetActiveUserError('Sistema indisponível, tente novamente mais tarde!'))
    yield put(actionLoading(false))
    console.log(error)
  }
}

function* sagaListener() {
  yield takeEvery(initial_types.request_user, actionRequestActiveUser);
}

export default sagaListener
