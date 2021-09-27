import React from 'react';
import { ThemeProvider } from 'styled-components';
import store from './src/store';
import { Provider } from 'react-redux';
import theme from './src/theme';

import Routes from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
