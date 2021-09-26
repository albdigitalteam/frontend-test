import React from 'react';

import ContentLoader, { Circle } from 'react-content-loader/native';

import {
  Container, Content, UserImage, UserName, UserEmail,
} from './styles';

interface UserDetailProps {
    picture: string;
    name: string;
    email: string;
}

export function UserDetail({ picture, name, email }: UserDetailProps) {
  const LoaderUserPhoto = () => (
    <ContentLoader viewBox="0 0 60 75" style={{ width: 50 }}>
      <Circle cx="30" cy="30" r="30" />
    </ContentLoader>
  );

  return (
    <Container>
      {picture ? <UserImage source={{ uri: `${picture}` }} /> : <LoaderUserPhoto />}
      <Content>
        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </Content>
    </Container>
  );
}
