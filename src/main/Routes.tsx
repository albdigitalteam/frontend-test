import React, { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home as HomeScreen, PostDetail as PostDetailScreen } from '../screens';

const Stack = createStackNavigator();

const Routes: FC = () => {
	// const { colors } = useTheme();
	return (
		<>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					animationEnabled: true,
				}}
				headerMode='none'
			>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='PostDetail' component={PostDetailScreen} />
			</Stack.Navigator>
		</>
	);
};

export default Routes;
