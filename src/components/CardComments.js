import React, { memo } from 'react';
import styled from 'styled-components/native';
import { ViewPropTypes } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/Feather';
import colors from '@/theme/colors';

import Label from '@/components/Label';
import defaultUserImage from '@/assets/images/6.png';

const CardComments = ({ id, name, email, body, onPress, style }) => {
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

  return (
    <StyledContainer style={style}>
      <StyledContentHeader>
        <StyledHeaderLeft>
          <StyledImageUser source={imageUsers[id] || defaultUserImage} />
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledRow>
            <Label
              marginLeft={10}
              lineHeight={15}
              fontSize={12}
              fontWeight={600}
            >
              {name}
            </Label>
          </StyledRow>
          <StyledRow>
            <Label
              marginLeft={10}
              lineHeight={20}
              fontSize={12}
              fontWeight='bold'
            >
              {email}
            </Label>
          </StyledRow>
        </StyledHeaderRight>
        <StyledHeaderSpred>
          <Icon name='more-vertical' size={25} />
        </StyledHeaderSpred>
      </StyledContentHeader>
      <StyledContent>
        <StyledRow>
          <Label
            textAlign='left'
            fontSize={12}
            lineHeight={24}
            fontWeight='normal'
            color={colors.PRIMARY}
            marginTop={10}
          >
            {body}
          </Label>
        </StyledRow>
      </StyledContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  padding: 10px;
  border-radius: 8px;
  elevation: 10;
  box-shadow: 0px 1px 25px ${colors.CARD_BACKGROUND_SHADOW};
  background-color: ${colors.COLOR_WHITE};
  justify-content: center;
`;

const StyledContent = styled.View`
  width: 100%;
  justify-content: center;
`;

const StyledRow = styled.View`
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ aligItems }) => aligItems || 'center'};
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
`;

const StyledContentHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledHeaderLeft = styled.View`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid palevioletred;
`;

const StyledHeaderRight = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

const StyledHeaderSpred = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

const StyledImageUser = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

CardComments.defaultProps = {
  style: {},
  onPress: () => {}
};

CardComments.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: ViewPropTypes.style
};

export default memo(CardComments);
