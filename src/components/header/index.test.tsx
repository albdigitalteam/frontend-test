import { render, screen } from '@testing-library/react';
import Header from './index';

describe('tests header component', () => {
    const component = (
        <Header />
    );

    render(component);

    test('render header', () => {
        expect(screen.getByText('Air Liquide Blog')).toBeInTheDocument();
    });
});

