import React, { useRef, memo } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/theme/colors';
import { handlePixels } from '@/helpers/functions/utils';

const TextInput = ({
  width,
  testID,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  value,
  onChangeText,
  editable,
  autoCompleteType,
  keyboardType,
  onSubmitEditing,
  hasError,
  autoCapitalize,
  forwardRef,
  returnKeyType,
  autoFocus,
  placeHolder
}) => {
  const inputRef = useRef(null);

  return (
    <Container
      borderColor={hasError ? colors.INPUT_DANGER : colors.DEFAULT_TEXT}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
    >
      <InsideTextInput
        testID={testID}
        value={value}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
        autoCompleteType={autoCompleteType}
        keyboardType={keyboardType || 'default'}
        ref={forwardRef || inputRef}
        editable={editable}
        onChangeText={onChangeText}
        blurOnSubmit
        placeholder={placeHolder}
      />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  border-color: ${({ borderColor }) => borderColor || colors.DEFAULT_TEXT};
  border-radius: 8px;
  border-width: 1px;
  height: 45px;
  justify-content: space-between;
  width: ${({ width }) => handlePixels(width)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight)};
`;
const InsideTextInput = styled.TextInput`
  font-size: 16px;
  color: ${colors.DEFAULT_TEXT};
  width: 90%;
`;

TextInput.defaultProps = {
  value: '',
  onChangeText: () => {},
  width: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 16,
  paddingRight: 16,
  autoCompleteType: 'off',
  keyboardType: 'default',
  editable: true,
  onSubmitEditing: undefined,
  hasError: undefined,
  autoCapitalize: 'none',
  forwardRef: undefined,
  returnKeyType: 'done',
  autoFocus: false,
  testID: undefined
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  editable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  autoCompleteType: PropTypes.string,
  keyboardType: PropTypes.string,
  onSubmitEditing: PropTypes.func,
  hasError: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  forwardRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(NativeTextInput) })
  ]),
  returnKeyType: PropTypes.string,
  autoFocus: PropTypes.bool,
  testID: PropTypes.string,
  placeHolder: PropTypes.string.isRequired
};

export default memo(TextInput);
