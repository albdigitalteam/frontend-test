import React from 'react';
import {
  Container, Content, UserImage, UserName, UserEmail,
} from './styles';

interface UserDetailProps {
    picture: string;
    name: {first: string; last: string;};
    email: string;
}

export function UserDetail({ picture, name, email }: UserDetailProps) {
  console.log('aaaa', picture, name, email);
  return (
    <Container>
      <UserImage source={{ uri: `${picture}` }} />
      <Content>
        <UserName>{`${name.first} ${name.last}`}</UserName>
        <UserEmail>{email}</UserEmail>
      </Content>
    </Container>
  );
}
