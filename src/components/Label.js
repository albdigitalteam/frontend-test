import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import fontSizes from '@/theme/fonts';
import themeColors from '@/theme/colors';

import { handlePixels } from '@/helpers/functions/utils';

import useFontFamily from '@/hooks/useFontFamily';

const Label = ({
  numberOfLines,
  width,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  color,
  fontWeight,
  fontSize,
  textAlign,
  textDecoration,
  children,
  textTransform,
  lineHeight,
  onPress,
  hidden,
  fontStyle
}) => (
  <StyledContainer hidden={hidden}>
    <StyledLabel
      onPress={onPress}
      textTransform={textTransform}
      numberOfLines={numberOfLines}
      width={width}
      hidden={hidden}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}
      textDecoration={textDecoration}
      lineHeight={lineHeight}
      fontStyle={fontStyle}
    >
      {children}
    </StyledLabel>
  </StyledContainer>
);

export const StyledLabel = styled.Text`
  width: ${({ width }) => handlePixels(width)};
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight)};
  color: ${({ color, hidden, theme: { colors } }) =>
    hidden ? colors.LABEL_HIDDEN : color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-transform: ${({ textTransform }) => textTransform};
  font-size: ${({ fontSize }) => handlePixels(fontSize)};
  font-family: ${({ fontWeight }) => useFontFamily(fontWeight)};
  line-height: ${({ lineHeight }) => handlePixels(lineHeight)};
  font-style: ${({ fontStyle }) => fontStyle};
`;

export const StyledContainer = styled.View`
  border-radius: ${({ hidden }) => (hidden ? 30 : 0)}px;
  background-color: ${({ hidden, theme: { colors } }) =>
    hidden ? colors.LABEL_HIDDEN : 'transparent'};
`;

Label.defaultProps = {
  numberOfLines: null,
  width: 'auto',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  color: themeColors.DEFAULT_TEXT,
  fontWeight: 'normal',
  fontSize: fontSizes.REGULAR,
  textAlign: 'left',
  textDecoration: 'none',
  children: null,
  textTransform: 'none',
  lineHeight: 28,
  onPress: undefined,
  hidden: false,
  fontStyle: 'normal'
};

Label.propTypes = {
  numberOfLines: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
  textDecoration: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.node,
    PropTypes.element
  ]),
  lineHeight: PropTypes.number,
  onPress: PropTypes.func,
  hidden: PropTypes.bool,
  fontStyle: PropTypes.string
};

export default memo(Label);
