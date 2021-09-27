import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { Posts } from '../pages/Posts';
import PostNavigation from './PostNavigation';
import { NewPost } from '../pages/NewPost';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Stack = createNativeStackNavigator();

export default function AppNavigation({ route }) {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFF' } }}>
      <Stack.Screen
        name="Posts"
        component={Posts}
        options={{
          headerShown: true,
          headerTitle: 'Posts',
          headerTitleStyle: { color: colors.heading, fontFamily: fonts.heading },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.toggleDrawer(); }}
              style={{ padding: 10 }}
            >
              <Entypo name="menu" size={24} color={colors.blue} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="PostDetail" component={PostNavigation} />
      <Stack.Screen name="NewPost" component={NewPost} options={{ headerShown: true, title: 'New post' }} />
    </Stack.Navigator>
  );
}
