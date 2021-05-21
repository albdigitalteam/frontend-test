import { render, screen } from '@testing-library/react';
import Loader from './index';

test('render Loader', () => {
  render(<Loader />)
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});



