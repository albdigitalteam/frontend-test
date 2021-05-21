import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import ListUser from '@/screens/HomeScreen/ListUser';

describe('tests in ListUser Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<ListUser />);
  });

  test('renders correctly', () => {
    renderWithTheme(<ListUser />);
  });

  test('ListUser renders correctly', () => {
    <ListUser users={[]} isLoading={false} />;
  });
});
