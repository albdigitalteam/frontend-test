import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProvidersWrapper from '../../ProvidersWrapper';
import Feed from '../Feed';
import * as useStoreMock from '../../stores/hooks/useStore';

it('expect a empty feed', () => {
    jest.spyOn(useStoreMock, 'useStore').mockReturnValue({});

    const { getByText } = render(<Feed />, {
        wrapper: ProvidersWrapper,
    });

    expect(getByText(/no posts yet/i)).toBeTruthy();
});
