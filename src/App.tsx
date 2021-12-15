import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import dark from './styles/themes/dark';

import AppProvider from './hooks';

import Routes from './routes/index.route';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
