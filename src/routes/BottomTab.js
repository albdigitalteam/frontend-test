/* eslint-disable react/prop-types */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useIsFocused } from '@react-navigation/native';

import colors from '@/theme/colors';
import Header from '@/components/Header';

import Color from 'color';
import Icon from 'react-native-vector-icons/Feather';

import Home from '@/screens/HomeScreen';
import User from '@/screens/UserScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const options = {
  labelPosition: 'below-icon',
  keyboardHidesTabBar: true,
  activeTintColor: colors.PRIMARY,
  inactiveTintColor: colors.BOTTOM_TAB_INACTIVE_TINT,
  style: {
    elevation: 2,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 4,
    borderWidth: 0,
    borderColor: 'transparent',
    borderTopColor: Color('#fff').rgb().alpha(0.15).toString()
  },
  showLabel: false,
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    lineHeight: 16
  }
};

const BottomTabNavigator = () => {
  const { isFocused } = useIsFocused();
  return (
    <>
      <Header
        leftIcon
        backgroundColor={colors.COLOR_WHITE}
        backButtonColor={colors.PRIMARY}
        isFocused={isFocused}
      />

      <Navigator tabBarOptions={options}>
        <Screen
          name='home'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon color={color} size={size} name='home' />
            )
          }}
        />
        <Screen
          name='users'
          component={User}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon color={color} size={size} name='users' />
            )
          }}
        />
        <Screen
          name='player'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon color={color} size={size} name='youtube' />
            )
          }}
        />
        <Screen
          name='settings'
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon color={color} size={size} name='settings' />
            )
          }}
        />
      </Navigator>
    </>
  );
};

export default BottomTabNavigator;
