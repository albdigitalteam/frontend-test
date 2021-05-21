import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagas from '@/store/sagas';
import reducers from '@/store/slices';

import Reactotron from '@/services/reactotron';

const sagaMonitor = Reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
  enhancers: [Reactotron.createEnhancer()]
});

sagaMiddleware.run(sagas);

export default store;
