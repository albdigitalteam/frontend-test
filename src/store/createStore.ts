import { createStore, compose, applyMiddleware, Reducer, Middleware } from 'redux';

import { tronLogger } from '#config';

export default (reducers: Reducer, middlwares: Array<Middleware>) => {
	const enhancer =
		__DEV__ && tronLogger.createEnhancer
			? compose(tronLogger.createEnhancer(), applyMiddleware(...middlwares))
			: applyMiddleware(...middlwares);

	return createStore(reducers, enhancer);
};
