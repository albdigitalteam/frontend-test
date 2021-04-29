import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
