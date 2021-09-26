import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import Routes from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
