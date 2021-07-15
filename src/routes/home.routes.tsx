import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/screens/Home';

const HomeStack = createStackNavigator();

const HomeRoutes: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export { HomeRoutes };
