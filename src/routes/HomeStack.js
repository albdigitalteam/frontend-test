import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from '@/routes/BottomTab';
import Comments from '@/screens/CommentScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Navigator initialRouteName='Home' headerMode>
        <Screen name='Home' component={BottomTab} />
        <Screen name='Comments' component={Comments} />
      </Navigator>
    </>
  );
};

export default HomeStack;
