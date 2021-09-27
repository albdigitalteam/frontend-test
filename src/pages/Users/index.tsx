import React, { useState, useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { Card } from '../../components/Card';
import { UserDetail } from '../../components/UserDetail';
import { LoadingData } from '../../components/LoadingData';

import { api } from '../../services/api';

import {
  Container, Title, ListContainer, CardContent,
} from './styles';
import { AuthContext } from '../../Contexts/AuthContext';

interface UsersProps {
    id: number;
    name: string;
    email: string;
    picture: string;
}
interface ItemProps {
    index: number;
    item: UsersProps;
}

export function Users() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  const navigation = useNavigation();
  const { signIn } = React.useContext(AuthContext);

  const getUserPhotos = async (userList) => {
    await axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
        const usersListPhoto = userList.map(
          (item, index) => ({ ...item, picture: res.data.results[index]?.picture.thumbnail }),
        );
        setTimeout(() => {
          setUsers(usersListPhoto);
        }, 700);
      })
      .catch((error) => {
        Alert.alert(
          'Error!',
          'Not possible fetch users photos',
        );
      });
  };

  const getUsers = async () => {
    await api.get('/users')
      .then((res) => {
        const userData = res.data;
        setUsers(userData);
        getUserPhotos(userData);
      })
      .catch((error) => {
        console.log('Error users', error);
        Alert.alert(
          'Error!',
          'Not possible fetch users data',
        );
      });
  };

  const handleMove = (user: UsersProps) => {
    signIn(user);
  };

  const renderItems = (elem: ItemProps) => {
    const { name, email, picture } = elem.item;
    return (
      <Card>
        <CardContent onPress={() => handleMove(elem.item)}>
          <UserDetail picture={picture} name={name} email={email} />
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (Object.keys(users).length <= 0) {
    return <LoadingData />;
  }

  return (
    <Container>
      <ListContainer>
        <FlatList
          ListHeaderComponent={(<Title>Select your user</Title>)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={(<View />)}
          data={users}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
      </ListContainer>
    </Container>
  );
}
