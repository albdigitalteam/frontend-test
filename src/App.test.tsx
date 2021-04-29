import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import App from './App';

test('renders learn react link', () => {
  const { container } = render(
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  );

  expect(container.firstChild).toHaveClass('App')
});





