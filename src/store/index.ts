import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IPostState } from './ducks/posts/types';
import { IUserState } from './ducks/users/types';
import { ICommentState } from './ducks/comments/types';
import rootSaga from './ducks/rootSagas';
import rootReducer from './ducks/rootReducer';

export interface IApplicationState {
  posts: IPostState;
  users: IUserState;
  comments: ICommentState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
