import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './slices';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
