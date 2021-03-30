import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
const PersistReducers = (reducers: Reducer) => {
	const persistedReducer = persistReducer(
		{
			key: '@BlogApp',
			storage: AsyncStorage,
		},
		reducers
	);

	return persistedReducer;
};

export default PersistReducers;
