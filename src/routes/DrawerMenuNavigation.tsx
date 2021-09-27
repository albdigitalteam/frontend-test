import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerCustomContent } from './DrawerCustomContent';
import AppNavigation from './AppNavigation';
import { NewPost } from '../pages/NewPost';

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
        component={NewPost}
        options={{
          title: 'New post',
          headerShown: true,
          sceneContainerStyle: { backgroundColor: '#fff' },
          headerLeft: () => (null),
        }}
      />
    </Drawer.Navigator>
  );
}
