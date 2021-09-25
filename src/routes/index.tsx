import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Posts } from '../pages/Posts';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF' } }}>
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
}

export default Routes;
