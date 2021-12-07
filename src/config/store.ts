import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import * as Modules from '../modules';

const store = createStore(
  combineReducers({
    ...Modules.CommentsModule.Store.Reducers.COMMENT,
    ...Modules.PostsModule.Store.Reducers.POST,
    ...Modules.UserModule.Store.Reducers.USER,
  }),
  {},
  compose(applyMiddleware(thunk, logger)),
);

let persistor = persistStore(store);

export {store, persistor};
