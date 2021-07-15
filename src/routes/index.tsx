import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppRoutes } from './app.routes';
import { HomeRoutes } from './home.routes';
import { AplicationState } from '~/store';

const Routes: React.FC = () => {
  const logged = useSelector((state: AplicationState) => state.auth.logged);

  return (
    <NavigationContainer>
      {logged ? <AppRoutes /> : <HomeRoutes />}
    </NavigationContainer>
  );
};

export { Routes };
