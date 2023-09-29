import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ProvidersWrapper from '../../ProvidersWrapper';
import Post from '../Post';

const POST_PROPS = {
    userId: 1,
    id: 1,
    title: 'TEST_TITLE',
    body: 'TEST_BODY',
    image: null,
};

it('expect that a simple post have all the elements', () => {
    const { queryAllByText } = render(<Post {...POST_PROPS} />, {
        wrapper: ProvidersWrapper,
    });

    expect(queryAllByText(/TEST_TITLE/i)).toBeTruthy();

    expect(queryAllByText(/TEST_BODY/i)).toBeTruthy();
});
