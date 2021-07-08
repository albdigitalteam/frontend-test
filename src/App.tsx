import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CreateGlobalStyle from './styles/globals';
import AppProvider from './contexts';
import Home from './components/pages/Home';

const App: React.FC = () => (
  <AppProvider>
    <Home />
    <CreateGlobalStyle />
  </AppProvider>
);

export default App;
