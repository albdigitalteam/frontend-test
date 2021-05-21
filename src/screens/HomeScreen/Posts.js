import React, { memo, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';

import PropTypes from 'prop-types';

import colors from '@/theme/colors';
import Card from '@/components/Card';
import { useNavigation } from '@react-navigation/native';

const Posts = ({ posts, isLoading, onRefresh }) => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(
    id => {
      navigate('Comments', { id });
    },
    [navigate]
  );

  const renderItem = ({ item: { id, title, name, nameName } }) => {
    return (
      <Card
        id={id}
        onPress={() => {
          handleNavigate(id);
        }}
        title={title}
        name={name}
        userName={nameName}
      />
    );
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
    <>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        refreshControl={reflashControl()}
        renderItem={renderItem}
        refreshing={isLoading}
      />
    </>
  );
};

Posts.defaultProps = {
  posts: [],
  isLoading: false,
  onRefresh: () => {}
};

Posts.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  onRefresh: PropTypes.func
};

export default memo(Posts);
