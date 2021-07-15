import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Publications } from '~/screens/Publications';
import { Comments } from '~/screens/Comments';
import { Publish } from '~/screens/Publish';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Publications"
        component={Publications}
        options={{ headerTitle: 'Publicações', headerTitleAlign: 'center' }}
      />
      <AppStack.Screen
        name="Comments"
        component={Comments}
        options={{ headerTitle: 'Comentários' }}
      />
      <AppStack.Screen
        name="Publish"
        component={Publish}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export { AppRoutes };
