import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { postId: number };
};

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = () => (
  <StyledSafeAreaView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={options}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </StyledSafeAreaView>
);

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.secondary};
`;

export default routes;
