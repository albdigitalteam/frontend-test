import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export type Props = {
  name: string;
  email: string;
  body: string;
  isLoggedUser: boolean;
};

interface ContainerProps {
  isLoggedUser: boolean;
}

const Comment: React.FC<Props> = ({
  name,
  email,
  body,
  isLoggedUser = false,
}) => {
  return (
    <StyledContainer isLoggedUser={isLoggedUser}>
      <Text>
        <StyledAuthor>
          {name} ({email.toLocaleLowerCase()}):{' '}
        </StyledAuthor>
        <StyledText>{body}</StyledText>
      </Text>
    </StyledContainer>
  );
};

const StyledContainer = styled.View<ContainerProps>`
  /* padding: 5px; */
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ isLoggedUser, theme: { colors } }) =>
    isLoggedUser ? 'rgba(0, 0, 0, 0.05)' : colors.primary};
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

const StyledAuthor = styled(StyledText)`
  font-weight: bold;
`;

export default Comment;
