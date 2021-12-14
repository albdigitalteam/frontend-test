import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes/index.route';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
};

export default App;
