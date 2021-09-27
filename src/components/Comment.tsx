import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { Comment as CommentProps } from '../store/slices/postsSlice';

const Comment: React.FC<CommentProps> = ({ name, email, body }) => {
  return (
    <StyledContainer>
      <Text>
        <StyledAuthor>
          {name} ({email.toLocaleLowerCase()}):{' '}
        </StyledAuthor>
        <StyledText>{body}</StyledText>
      </Text>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

const StyledAuthor = styled(StyledText)`
  font-weight: bold;
`;

export default Comment;
