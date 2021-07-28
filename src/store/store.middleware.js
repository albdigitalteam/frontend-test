import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers'
import actions from './actions'


const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(actions)
  return store
}

export default configureStore
