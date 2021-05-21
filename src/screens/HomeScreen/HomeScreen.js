import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components/native';

import { useDispatch, useSelector } from 'react-redux';

import Label from '@/components/Label';
import colors from '@/theme/colors';

import { LOADING_USERS } from '@/store/slices/userSlice';
import { LOADING_POSTS } from '@/store/slices/postSlice';

import ListUser from './ListUser';
import Posts from './Posts';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { usersData, isLoading, errorMessage } = useSelector(
    ({ users }) => users
  );

  const { postsData } = useSelector(({ posts }) => posts);

  const loadingData = useCallback(() => {
    dispatch(LOADING_USERS());
    dispatch(LOADING_POSTS());
  }, [dispatch]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  return (
    <StyledContainer>
      {errorMessage ? (
        <Label
          textAlign='center'
          fontWeight={400}
          fontSize={12}
          marginBottom={8}
          color={colors.DANGER}
        >
          {errorMessage}
        </Label>
      ) : (
        <>
          <ListUser users={usersData} isLoading={isLoading} />
          <Posts
            posts={postsData}
            isLoading={isLoading}
            onRefresh={loadingData}
          />
        </>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
`;

export default HomeScreen;
