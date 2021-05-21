import React, { memo } from 'react';
import { Platform, ViewPropTypes } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Label from '@/components/Label';

import colors from '@/theme/colors';
import spacings from '@/theme/spacings';

const Tooltip = ({
  message,
  style,
  fontSize,
  fontWeight,
  arrowPosition,
  borderRadius,
  elevation,
  backgroundColor,
  color
}) => (
  <StyledContainer style={style}>
    <StyledArrow
      backgroundColor={backgroundColor}
      arrowPosition={arrowPosition}
      elevation={elevation}
    />
    <StyledCover
      backgroundColor={backgroundColor}
      elevation={elevation}
      borderRadius={borderRadius}
    >
      <Label fontWeight={fontWeight} color={color} fontSize={fontSize}>
        {message}
      </Label>
    </StyledCover>
  </StyledContainer>
);

const StyledContainer = styled(Animated.View)`
  position: absolute;
  right: 0px;
  top: ${Platform.OS === 'ios' ? -47 : -50}px;
  z-index: 10;
`;

const StyledCover = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  elevation: ${({ elevation }) => elevation};
  position: relative;
`;

const StyledArrow = styled.View`
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  background-color: ${({ backgroundColor }) => backgroundColor};
  elevation: ${({ elevation }) => elevation};
  position: absolute;
  right: ${({ arrowPosition }) => arrowPosition}px;
  bottom: -5px;
  z-index: ${Platform.OS === 'ios' ? 2 : 0};
`;

Tooltip.defaultProps = {
  style: {},
  fontSize: 14,
  fontWeight: 400,
  arrowPosition: spacings.MEDIUM,
  borderRadius: 30,
  elevation: 5,
  backgroundColor: colors.COLOR_WHITE,
  color: colors.DARK_TEXT
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  arrowPosition: PropTypes.number,
  borderRadius: PropTypes.number,
  elevation: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

export default memo(Tooltip);
