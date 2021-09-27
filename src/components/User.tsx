import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import {
  User as UserType,
  UserState,
  SET_USER_LOGGED,
} from '../store/slices/usersSlice';
import { RootState } from '../store';

type Props = {
  data: UserType;
  onPress?: () => void;
};

interface ContainerProps {
  isLogged: boolean;
}

const User: React.FC<Props> = ({ data, onPress = () => { } }) => {
  const dispatch = useDispatch();
  const { userLogged } = useSelector<RootState, UserState>(state => state.user);

  const onUserPressed = () => {
    dispatch(SET_USER_LOGGED({ user: data }));
    setTimeout(() => onPress(), 250);
  };

  return (
    <StyledContainer
      isLogged={userLogged?.id === data.id}
      onPress={onUserPressed}>
      <StyledText>{data.name}</StyledText>
    </StyledContainer>
  );
};

const StyledContainer = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  margin: 4px 0;
  border-radius: 8px;
  background-color: ${({ theme: { colors }, isLogged }) =>
    isLogged ? colors.secondary : 'white'};
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export default User;
