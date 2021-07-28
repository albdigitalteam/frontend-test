import { all } from 'redux-saga/effects'
import initialActions from '../containers/initial/store/initial.saga'
import homeActions from '../containers/home/store/home.saga'

function* allSaga() {
  yield all([initialActions(), homeActions()]);
}

export default allSaga
