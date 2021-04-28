import { render, screen } from '@testing-library/react';
import Skeleton from './index';

test('render Skeleton', () => {
  render(<Skeleton />)
  expect(screen.getByTestId('skeleton')).toBeInTheDocument();
});


