import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import Label from '@/components/Label';

import colors from '@/theme/colors';

import { handlePixels } from '@/helpers/functions/utils';

const renderButton = (
  testID,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  backgroundColor,
  color,
  borderWidth,
  modal,
  gradient,
  icon,
  leftIcon,
  onPress,
  isLoading,
  loadingColor,
  disabled,
  children
) => (
  <StyledTouchableOpacity
    testID={testID}
    width={width}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    backgroundColor={backgroundColor}
    color={color}
    borderWidth={borderWidth}
    modal={modal}
    gradient={gradient}
    icon={icon}
    leftIcon={leftIcon}
    onPress={onPress}
    disabled={disabled}
  >
    {isLoading ? (
      <ActivityIndicator size='small' color={loadingColor} />
    ) : (
      <StyledButtonContainer>
        {icon && <StyledRightIcon source={icon} />}
        <Label
          color={color || '#fff'}
          fontWeight={700}
          textTransform='uppercase'
        >
          {children}
        </Label>
        {leftIcon && <StyledLeftIcon source={leftIcon} />}
      </StyledButtonContainer>
    )}
  </StyledTouchableOpacity>
);

const Button = ({
  testID,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  backgroundColor,
  color,
  borderWidth,
  modal,
  isLoading,
  loadingColor,
  gradient,
  icon,
  leftIcon,
  onPress,
  children,
  disabled
}) => (
  <>
    <StyledLinearGradient
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      color={color}
      onPress={onPress}
      colors={disabled ? colors.GRADIENT_GRAY : colors.GRADIENT_BADGE}
      useAngle
      angle={276}
    >
      {renderButton(
        testID,
        width,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        backgroundColor,
        color,
        borderWidth,
        modal,
        gradient,
        icon,
        leftIcon,
        onPress,
        isLoading,
        loadingColor,
        disabled,
        children
      )}
    </StyledLinearGradient>
  </>
);

Button.defaultProps = {
  testID: null,
  width: '100%',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 14,
  paddingBottom: 14,
  paddingLeft: 0,
  paddingRight: 0,
  backgroundColor: '#fff',
  color: '#fff',
  borderWidth: '0px',
  loadingColor: '#fff',
  gradient: false,
  icon: null,
  leftIcon: null,
  disabled: false,
  onPress: () => {},
  isLoading: false,
  modal: false,
  children: null
};

Button.propTypes = {
  testID: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loadingColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gradient: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  leftIcon: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  isLoading: PropTypes.bool,
  modal: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.element
  ])
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  padding-top: ${({ paddingTop }) => handlePixels(paddingTop)};
  padding-bottom: ${({ paddingBottom }) => handlePixels(paddingBottom)};
  padding-right: ${({ paddingRight }) => handlePixels(paddingRight)};
  padding-left: ${({ paddingLeft }) => handlePixels(paddingLeft)};
  background-color: transparent;
`;

const StyledRightIcon = styled.Image`
  margin-right: 12px;
`;

const StyledLeftIcon = styled.Image`
  margin-left: 12px;
`;

const StyledButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLinearGradient = styled(LinearGradient)`
  min-width: 100px;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  border-radius: 8px;
`;

export default memo(Button);
