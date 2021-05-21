import React, { useEffect, useCallback } from 'react';

import styled from 'styled-components/native';

import { useDispatch, useSelector } from 'react-redux';

import Label from '@/components/Label';
import colors from '@/theme/colors';

import { LOADING_USERS } from '@/store/slices/userSlice';

import ListUser from './ListUser';

const UserScreen = () => {
  const dispatch = useDispatch();
  const { usersData, isLoading, errorMessage } = useSelector(
    ({ users }) => users
  );

  const loadingData = useCallback(() => {
    dispatch(LOADING_USERS());
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
        <ListUser
          users={usersData}
          isLoading={isLoading}
          onRefresh={loadingData}
        />
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 10px;
`;

export default UserScreen;
