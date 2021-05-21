import 'react-native';
import React from 'react';
import {
  matchSnapshotWithTheme,
  renderWithTheme
} from '@/helpers/functions/testing';

import Posts from '@/screens/HomeScreen/Posts';

describe('tests in Posts Screen', () => {
  test('matches snapshot', () => {
    matchSnapshotWithTheme(<Posts />);
  });

  test('renders correctly', () => {
    renderWithTheme(<Posts />);
  });

  test('Posts renders correctly', () => {
    const onPressMock = jest.fn();
    <Posts posts={[]} isLoading={false} onRefresh={onPressMock} />;
  });
});
