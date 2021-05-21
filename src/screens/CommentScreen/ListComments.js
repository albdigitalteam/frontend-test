import React, { memo, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import styled from 'styled-components/native';

import PropTypes from 'prop-types';

import colors from '@/theme/colors';

import CardComments from '@/components/CardComments';

const ListComments = ({ comments, isLoading, onRefresh }) => {
  const renderItem = ({ item: { id, name, email, body } }) => {
    return <Card id={id} name={name} email={email} body={body} />;
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
        data={comments}
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

const Card = styled(CardComments)`
  margin-top: 10px;
`;

ListComments.defaultProps = {
  comments: [],
  isLoading: false,
  onRefresh: () => {}
};

ListComments.propTypes = {
  isLoading: PropTypes.bool,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    })
  ),
  onRefresh: PropTypes.func
};

export default memo(ListComments);
