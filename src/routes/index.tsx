import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostNavigation from './PostNavigation';

import { Users } from '../pages/Users';
import { Posts } from '../pages/Posts';
import { NewPost } from '../pages/NewPost';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF' } }}
    >
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Posts" component={Posts} />
      <Stack.Screen name="PostDetail" component={PostNavigation} />
      <Stack.Screen name="NewPost" component={NewPost} options={{ headerShown: true, title: 'New post' }} />
    </Stack.Navigator>
  );
}

export default Routes;
