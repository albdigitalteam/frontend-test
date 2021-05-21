import React, { memo, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import styled from 'styled-components/native';

import PropTypes from 'prop-types';

import colors from '@/theme/colors';

import CardUser from '@/components/CardUser';

const ListUser = ({ users, isLoading, onRefresh }) => {
  const renderItem = ({ item: { id, name } }) => {
    return <Card id={id} name={name} />;
  };

  const reflashControl = useCallback(
    () => (
      <RefreshControl
        progressViewOffset={32}
        tintColor={colors.PRIMARY}
        colors={[colors.PRIMARY]}
        refreshing={isLoading}
        onRefresh={onRefresh}
      />
    ),
    [isLoading, onRefresh]
  );

  return (
    <StyledContainer>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={reflashControl()}
        renderItem={renderItem}
        refreshing={isLoading}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_GRAY};
`;

const Card = styled(CardUser)`
  margin-top: 10px;
`;
ListUser.defaultProps = {
  users: [],
  isLoading: false,
  onRefresh: () => {}
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
  ),
  onRefresh: PropTypes.func
};

export default memo(ListUser);
