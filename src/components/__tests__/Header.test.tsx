import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';
import ProvidersWrapper from '../../ProvidersWrapper';

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

it('check if the modal pops up', () => {
    window.ResizeObserver = ResizeObserver;

    const { getByTestId, queryAllByText } = render(<Header />, {
        wrapper: ProvidersWrapper,
    });

    const iconButton = getByTestId('modal_new_message');

    fireEvent.click(iconButton);

    expect(queryAllByText(/Cancel/i)).toBeTruthy();
});