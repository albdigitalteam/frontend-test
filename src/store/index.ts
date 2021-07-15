import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import {
  createStore,
  Store,
  applyMiddleware,
  compose,
  StoreEnhancer,
} from 'redux';

import { PostState } from './modules/post/types';
import { UserState } from './modules/user/types';
import { CommentState } from './modules/comment/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const enhancer: StoreEnhancer<{}, PostState> = __DEV__
  ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

export interface AplicationState {
  post: PostState;
  user: UserState;
  comment: CommentState;
}

const persistConfig = {
  key: 'airLiquide',
  storage: AsyncStorage,
  whitelist: ['post', 'user', 'comment'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<AplicationState> = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
