import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('test button component', () => {
  it('render and verify text content', () => {
    const testLabel = 'Criar post';
    const { getByText } = render(
      <Button label={testLabel} onPress={jest.fn} />,
    );

    expect(getByText(testLabel)).toBeTruthy();
  });
});

describe('test click button component', () => {
  it('render and verify onPress content', () => {
    const onPress = jest.fn();
    const testLabel = 'Criar post';
    const { getByText } = render(
      <Button label={testLabel} onPress={onPress} />,
    );

    fireEvent.press(getByText(testLabel));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});

describe('snapshopt test button component', () => {
  it('render button', () => {
    const testLabel = 'Criar post';
    const tree = render(
      <Button label={testLabel} onPress={jest.fn} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
