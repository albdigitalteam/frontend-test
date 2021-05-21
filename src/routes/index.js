import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from 'react-native-splash-screen';
import HomeStack from '@/routes/HomeStack';

import NoInternetScreen from '@/screens/NoInternetScreen';

const { Navigator, Screen } = createStackNavigator();

const Route = () => {
  const { isConnected } = useNetInfo();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (!isConnected) {
    return (
      <Navigator headerMode='none'>
        <Screen name='NoInternet' component={NoInternetScreen} />
      </Navigator>
    );
  }

  return <HomeStack />;
};

export default Route;
