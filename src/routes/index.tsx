import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PostBlog } from '../pages/PostBlog';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF' } }}>
      <Stack.Screen name="Blog" component={PostBlog} />
    </Stack.Navigator>
  );
}

export default Routes;
