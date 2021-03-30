import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

import AsyncStorage from '@react-native-async-storage/async-storage';

let tronLogger = Reactotron;

if (__DEV__) {
	if (Reactotron.setAsyncStorageHandler) {
		tronLogger = Reactotron.setAsyncStorageHandler(AsyncStorage)
			.useReactNative()
			.use(reactotronRedux())
			.use(reactotronSaga({}))
			.connect();
	}
}

export default tronLogger;
