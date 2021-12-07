import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
        component={Screens.CommentsScreen}
        options={({navigation}) => ({
          headerTitle: 'Comentários',
        })}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
