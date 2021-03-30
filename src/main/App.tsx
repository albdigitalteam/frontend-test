import 'react-native-gesture-handler';
import '../config/reactotron';

import React, { FC } from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { Theme } from '#theme';
import { store, persistor } from '#store/index';

import Routes from './Routes';

const App: FC = () => {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Theme>
						<Routes />
					</Theme>
				</PersistGate>
			</Provider>
			<FlashMessage position='top' />
		</NavigationContainer>
	);
};

export default App;
