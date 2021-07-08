import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '@modules/posts/screens/PostsScreen';
import CommentsScreen from '@modules/posts/screens/CommentsScreen';

const Stack = createStackNavigator();

export default function RootStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: 'Posts',
        }}
      />
      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: 'Comentários',
        }}
      />
    </Stack.Navigator>
  );
}
