import React from 'react';
import { ThemeProvider as DefaultThemeProvider } from 'styled-components/native';
import PropTypes from 'prop-types';

import theme from '@/theme';

const ThemeProvider = ({ children }) => (
  <DefaultThemeProvider theme={theme}>{children}</DefaultThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeProvider;
