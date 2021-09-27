import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewPostComment } from '../components/NewPostComment';
import { Comments } from '../pages/Comments';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Stack = createNativeStackNavigator();

export function CommentNavigation({ route }) {
  return (
    <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#FFF' } }}>
      <Stack.Screen
        name="CommentsStack"
        component={Comments}
        initialParams={route.params}
        options={{ headerTitleStyle: { color: colors.heading, fontFamily: fonts.heading } }}
      />
      <Stack.Screen
        name="NewComment"
        component={NewPostComment}
        options={{ title: 'New Comment', headerTitleStyle: { color: colors.heading, fontFamily: fonts.heading } }}
        initialParams={{ url: 'comments', post: false }}
      />
    </Stack.Navigator>
  );
}
