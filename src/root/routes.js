import React from 'react'
import { Easing } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Initial from '../containers/initial/initial.controller'
import Home from '../containers/home/home.controller'

const { Navigator, Screen } = createStackNavigator()

const optionsDefault = {
	options: { headerShown: false, gestureEnabled: false },
}

const transitionConfigs = {
	animation: 'timing',
	config: {
		duration: 250,
		easing: Easing.linear
	}
}

const RoutesStack = () => {
	return (
		<Navigator
			gestureEnabled={false}
			screenOptions={{
				animationEnabled: true,
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
				transitionSpec: {
					open: transitionConfigs,
					close: transitionConfigs
				}
			}}
			keyboardHandlingEnabled={false}>
			<Screen name="Initial" component={Initial} {...optionsDefault} />
			<Screen name="Home" component={Home} {...optionsDefault} />
		</Navigator>
	)
}

export default RoutesStack
