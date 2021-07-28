import { call, put, takeEvery } from 'redux-saga/effects';
import { action } from 'typesafe-actions'

import { api } from '../../../service'

export const initial_types = {
  request_user: 'REQUEST_ACTIVE_USER',
  set_active_user: 'SET_ACTIVE_USER',
}

export const actionGetActiveUser = payload => action(initial_types.request_user, payload)
const actionSetActiveUser = payload => action(initial_types.set_active_user, payload)

function* actionRequestActiveUser(payload) {
  try {
    const response = yield call(api.get, `/users?email=${payload.email}`)
    if (response?.status === 200) {
      payload.callback()
      yield put(actionSetActiveUser(response.data[0]));
    }
  } catch (error) {
    console.log(error)
  }
}

function* sagaListener() {
  yield takeEvery(initial_types.request_user, actionRequestActiveUser);
}

export default sagaListener
