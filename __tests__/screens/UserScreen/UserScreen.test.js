import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import UserScreen from '@/screens/UserScreen';

describe('tests in UserScreen Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<UserScreen />);
  });

  test('renders correctly', () => {
    renderWithTheme(<UserScreen />);
  });
});
