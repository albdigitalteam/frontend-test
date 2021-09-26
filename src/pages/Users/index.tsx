import React, { useState, useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
// import { api } from '../../services/api';

import { Card } from '../../components/Card';

import {
  Container, UserImage, ListContainer, CardContent, CardDescriptionContent, UserName, UserEmail,
} from './styles';

interface UsersProps {
    // id: number;
    name: {title: string; first: string; last: string};
    email: string;
    picture: {thumbnail: string}
}

interface ItemProps {
    index: number;
    item: UsersProps;
  }

export function Users() {
  const [users, setUsers] = useState<UsersProps[]>([]);

  const navigation = useNavigation();

  const getUsers = async () => {
    // await api.get('/users')
    //   .then((res) => {
    //     console.log('Users: ', res.data);
    //     setUsers(res.data);
    //   })
    //   .catch((error) => {
    //     console.log('Error users', error);
    //     Alert.alert(
    //       'Error!',
    //       'Not possible fetch users data',
    //     );
    //   });

    await axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => {
        console.log('Error users', error);
        Alert.alert(
          'Error!',
          'Not possible fetch users data',
        );
      });
  };

  const handleMove = () => {
    navigation.navigate('Posts');
  };

  const renderItems = (elem: ItemProps) => {
    const { name, email, picture } = elem.item;
    return (
      <Card>
        <CardContent onPress={handleMove}>
          <UserImage source={{ uri: `${picture.thumbnail}` }} />
          <CardDescriptionContent>
            <UserName>{`${name.first} ${name.last}`}</UserName>
            <UserEmail>{email}</UserEmail>
          </CardDescriptionContent>
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <UserName>Users Screen</UserName>

      <ListContainer>
        <FlatList
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
