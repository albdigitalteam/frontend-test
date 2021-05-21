/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import ThemeProvider from '@/components/ThemeProvider';

export const matchSnapshotWithTheme = component => {
  const tree = renderer
    .create(<ThemeProvider>{component}</ThemeProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
};

export const renderWithTheme = (component, options) => {
  return render(<ThemeProvider>{component}</ThemeProvider>, options);
};
