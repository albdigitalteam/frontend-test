import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from '../App';

describe('tests routes using memory router', () => {
  const history = createMemoryHistory()

  const component = (
    <Router history={history}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Provider>
    </Router>
  );

  beforeEach(() => {
    render(component);
  });

  //Testar outras rotas
  test('landing on a posts page', () => {
    history.push('/posts')
    expect(screen.getByTestId('posts-element')).toBeInTheDocument();
  });
});

