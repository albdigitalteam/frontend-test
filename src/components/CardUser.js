import React, { memo } from 'react';
import { ViewPropTypes } from 'react-native';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';

import colors from '@/theme/colors';
import Label from '@/components/Label';

const imageUsers = {
  1: require('@/assets/images/1.png'),
  2: require('@/assets/images/2.png'),
  3: require('@/assets/images/3.png'),
  4: require('@/assets/images/4.png'),
  5: require('@/assets/images/5.png'),
  6: require('@/assets/images/6.png'),
  7: require('@/assets/images/7.png'),
  8: require('@/assets/images/8.png'),
  9: require('@/assets/images/9.png'),
  10: require('@/assets/images/10.png')
};

const CardUser = ({ id, name, onPress, style }) => {
  return (
    <StyledContainer style={style} onPress={onPress}>
      <StyledContent>
        <StyledImage source={imageUsers[id]} />
        <Label
          width='100%'
          fontSize={12}
          textAlign='left'
          marginLeft={10}
          lineHeight={24}
          color={colors.PRIMARY}
        >
          {name}
        </Label>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding: 8px;
  border-radius: 10px;
  elevation: 24;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
`;

const StyledContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-left: 8px;
`;

CardUser.defaultProps = {
  style: {},
  onPress: () => {}
};

CardUser.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  onPress: PropTypes.func
};

export default memo(CardUser);
