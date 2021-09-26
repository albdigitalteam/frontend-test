import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';

import axios from 'axios';
import { api } from '../../services/api';
import { capitalizeFirstLetter } from '../../Util/utils';

import { UserDetail } from '../../components/UserDetail';

import {
  Container, Content, Title, Description,
} from './styles';
import { LoadingData } from '../../components/LoadingData';

interface UserProps {
  name: {first: string; last: string;};
  email: string;
  picture: {thumbnail: string;};
}

export function PostDetail({ route }: any) {
  const { title, body } = route.params;

  const [user, setUser] = useState<UserProps[]>([]);

  const getUser = async () => {
    await axios.get('https://randomuser.me/api/?results=1')
      .then((res) => {
        setUser(res.data.results[0]);
      })
      .catch((error) => {
        Alert.alert(
          'Error!',
          'Not possible fetch users data',
        );
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (Object.keys(user).length <= 0) {
    return <LoadingData />;
  }

  return (
    <Container>
      <Content>
        <Title>{capitalizeFirstLetter(title)}</Title>
        <Description>{capitalizeFirstLetter(body)}</Description>
        <UserDetail picture={user.picture.thumbnail} name={user.name} email={user.email} />
      </Content>
    </Container>
  );
}
