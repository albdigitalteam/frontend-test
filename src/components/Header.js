import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import StatusBarColor from '@/config/StatusBarColor';

import colors from '@/theme/colors';
import spacings from '@/theme/spacings';

import Label from '@/components/Label';
import IconFather from 'react-native-vector-icons/Feather';
import { CommonActions } from '@react-navigation/routers';

const HeaderWithTitle = ({
  showBackButton,
  onBackPress,
  slim,
  backgroundColor,
  backButtonColor,
  isFocused,
  leftIcon,
  isPrimaryColorDark,
  total
}) => {
  return (
    <>
      <StyledSafeArea backgroundColor={backgroundColor} />
      {isFocused && (
        <StatusBarColor
          backgroundColor={backgroundColor}
          isPrimaryColorDark={isPrimaryColorDark}
        />
      )}
      <StyledContainer backgroundColor={backgroundColor} slim={slim}>
        {showBackButton ? (
          <>
            <TouchableOpacity onPress={onBackPress}>
              <Icon
                name='arrow-back'
                size={26}
                color={backButtonColor || '#000'}
              />
            </TouchableOpacity>
            <Label fontWeight={600} fontSize={spacings.SMALL}>
              comments {total}
            </Label>
          </>
        ) : (
          <Label
            textAlign='center'
            lineHeight={40}
            fontWeight={700}
            color={colors.PRIMARY}
            fontSize={spacings.MEDIUM}
            fontStyle='italic'
          >
            InstaBlog
          </Label>
        )}

        {leftIcon ? (
          <StyledIconContainer>
            <StyledIcon backgroundColor={backButtonColor} testID='left-icon'>
              <IconFather name='plus-square' size={25} />
            </StyledIcon>
            <StyledIcon backgroundColor={backButtonColor} testID='right-icon'>
              <IconFather name='heart' size={25} />
            </StyledIcon>
            <StyledIcon backgroundColor={backButtonColor} testID='right-icon'>
              <IconFather name='send' size={25} />
            </StyledIcon>
          </StyledIconContainer>
        ) : (
          <StyledEmptyIcon />
        )}
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.View`
  width: 100%;
  height: ${({ slim }) => (slim ? 48 : 56)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 0px 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledSafeArea = styled.SafeAreaView`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledIconContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledIcon = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const StyledEmptyIcon = styled.View`
  width: 37px;
  height: 37px;
`;

HeaderWithTitle.defaultProps = {
  onBackPress: () => {},
  slim: false,
  showBackButton: false,
  backgroundColor: colors.PRIMARY,
  backButtonColor: '#fff',
  isFocused: true,
  leftIcon: false,
  isPrimaryColorDark: false,
  total: 0
};

HeaderWithTitle.propTypes = {
  onBackPress: PropTypes.func,
  slim: PropTypes.bool,
  showBackButton: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backButtonColor: PropTypes.string,
  isFocused: PropTypes.bool,
  leftIcon: PropTypes.bool,
  isPrimaryColorDark: PropTypes.bool,
  total: PropTypes.number
};

export default memo(HeaderWithTitle);
