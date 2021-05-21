import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import NoInternetScreen from '@/screens/NoInternetScreen';

describe('tests in NoInternetScreen Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<NoInternetScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<NoInternetScreen />);
  });
});
