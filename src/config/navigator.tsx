import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {PostsModule} from '../modules';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'PostsNavigator'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="PostsNavigator" component={PostsModule.Navigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
