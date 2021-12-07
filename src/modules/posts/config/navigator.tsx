import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CommentsModule} from '@modules/index';

import * as Screens from '../screens';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: true,
        animationTypeForReplace: 'push',
      }}>
      <Stack.Screen
        name="Index"
        component={Screens.HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="CommentsScreen"
        component={CommentsModule.Screens.CommentsScreen}
        options={() => ({
          headerTitle: 'Comentários',
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
