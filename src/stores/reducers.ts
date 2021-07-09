import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from './post/post.store';
import userReducer from './user/user.store';
import commentReducer from './comment/comment.store';
import saga from './saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
    comments: commentReducer,
  },
  middleware,
});

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
