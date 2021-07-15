import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/screens/Home';
import { DetailPost } from '~/screens/DetailPost';
import { AddPost } from '~/screens/AddPost';

const HomeStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: 'Publicações', headerTitleAlign: 'center' }}
        />
        <HomeStack.Screen
          name="DetailPost"
          component={DetailPost}
          options={{ headerTitle: 'Comentários' }}
        />
        <HomeStack.Screen
          name="AddPost"
          component={AddPost}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
