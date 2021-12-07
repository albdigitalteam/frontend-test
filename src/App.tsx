import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Navigator, store, persistor} from './config';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['EventEmitter.removeListener']);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
