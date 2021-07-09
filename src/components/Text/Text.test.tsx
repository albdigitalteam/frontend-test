import React from 'react';
import { render } from '@testing-library/react-native';
import Text from './Text';

describe('test text component', () => {
  it('render and verify text content', () => {
    const testText = 'Testing text';
    const { getByText } = render(<Text>{testText}</Text>);

    expect(getByText(testText)).toBeTruthy();
  });
});

describe('snapshopt test text component', () => {
  it('render text component', () => {
    const testText = 'Testing text';
    const tree = render(<Text>{testText}</Text>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
