import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerCustomContent } from './DrawerCustomContent';
import AppNavigation from './AppNavigation';
import { NewPostComment } from '../components/NewPostComment';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

const Drawer = createDrawerNavigator();

export default function DrawerMenuNavigation({ route }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustomContent {...props} />}
      screenOptions={{ headerShown: false, drawerContentStyle: { backgroundColor: '#FFF' } }}
    >
      <Drawer.Screen name="AppNavigation" component={AppNavigation} options={{ title: 'Posts' }} />
      <Drawer.Screen
        name="NewPost"
        component={NewPostComment}
        options={{
          title: 'New post',
          headerShown: true,
          headerTitleStyle: { color: colors.heading, fontFamily: fonts.heading },
          sceneContainerStyle: { backgroundColor: '#fff' },
          headerLeft: () => (null),
        }}
        initialParams={{ url: 'posts', post: true }}
      />
    </Drawer.Navigator>
  );
}
