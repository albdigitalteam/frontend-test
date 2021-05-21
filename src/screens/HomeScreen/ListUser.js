import React, { memo } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';

import Label from '@/components/Label';
import colors from '@/theme/colors';

const ListUser = ({ users, isLoading }) => {
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
  const renderItem = ({ item: { id, name } }) => {
    return (
      <>
        <StyledViewImage>
          <StyledImage source={imageUsers[id]} />
          <Label
            width={85}
            numberOfLines={1}
            fontSize={12}
            marginLeft={10}
            textAlign='center'
            lineHeight={24}
          >
            {name}
          </Label>
        </StyledViewImage>
      </>
    );
  };

  return (
    <StyledContentUsers>
      <FlatList
        data={users}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        isLoading={isLoading}
      />
    </StyledContentUsers>
  );
};

const StyledContentUsers = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${colors.COLOR_WHITE};
`;

const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-left: 8px;
`;

const StyledViewImage = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

ListUser.defaultProps = {
  users: [],
  isLoading: false
};

ListUser.propTypes = {
  isLoading: PropTypes.bool,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string
    })
  )
};

export default memo(ListUser);
