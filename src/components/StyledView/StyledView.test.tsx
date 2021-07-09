import React from 'react';
import { render } from '@testing-library/react-native';
import StyledView from './StyledView';

describe('snapshopt test styledview component', () => {
  it('render styledview', () => {
    const tree = render(
      <StyledView>
        <></>
      </StyledView>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
