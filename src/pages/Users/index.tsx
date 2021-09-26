import React, { useState, useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
import { api } from '../../services/api';

import { Card } from '../../components/Card';
import { UserDetail } from '../../components/UserDetail';

import {
  Container, ListContainer, CardContent,
} from './styles';

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

interface UsersPhotosProps {
    picture: {thumbnail: string};
}

export function Users() {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [usersPhotos, setUsersPhotos] = useState<UsersPhotosProps[]>([]);

  const navigation = useNavigation();

  const getUserPhotos = async (userList) => {
    await axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
        const usersListPhoto = userList.map(
          (item, index) => ({ ...item, picture: res.data.results[index]?.picture.thumbnail }),
        );

        setUsersPhotos(res.data.results);
        setUsers(usersListPhoto);
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

  const handleMove = () => {
    navigation.navigate('Posts');
  };

  const renderItems = (elem: ItemProps) => {
    const { name, email, picture } = elem.item;
    return (
      <Card>
        <CardContent onPress={handleMove}>
          <UserDetail picture={picture} name={name} email={email} />
        </CardContent>
      </Card>
    );
  };

  // useEffect(() => {
  //   if (users) {
  //     getUserPhotos();
  //   }
  // }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
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

// import React, { useState, useEffect } from 'react';
// import { Alert, FlatList, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import axios from 'axios';
// // import { api } from '../../services/api';

// import { Card } from '../../components/Card';

// import {
//   Container, ListContainer, CardContent,
// } from './styles';
// import { UserDetail } from '../../components/UserDetail';

// interface UsersProps {
//     // id: number;
//     name: {title: string; first: string; last: string};
//     email: string;
//     picture: {thumbnail: string}
// }

// interface ItemProps {
//     index: number;
//     item: UsersProps;
//   }

// export function Users() {
//   const [users, setUsers] = useState<UsersProps[]>([]);

//   const navigation = useNavigation();

//   const getUsers = async () => {
//     // await api.get('/users')
//     //   .then((res) => {
//     //     console.log('Users: ', res.data);
//     //     setUsers(res.data);
//     //   })
//     //   .catch((error) => {
//     //     console.log('Error users', error);
//     //     Alert.alert(
//     //       'Error!',
//     //       'Not possible fetch users data',
//     //     );
//     //   });

//     await axios.get('https://randomuser.me/api/?results=10')
//       .then((res) => {
//         setUsers(res.data.results);
//       })
//       .catch((error) => {
//         console.log('Error users', error);
//         Alert.alert(
//           'Error!',
//           'Not possible fetch users data',
//         );
//       });
//   };

//   const handleMove = () => {
//     navigation.navigate('Posts');
//   };

//   const renderItems = (elem: ItemProps) => {
//     const { name, email, picture } = elem.item;
//     return (
//       <Card>
//         <CardContent onPress={handleMove}>
//           <UserDetail picture={picture.thumbnail} name={name} email={email} />
//         </CardContent>
//       </Card>
//     );
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <Container>
//       <ListContainer>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={(<View />)}
//           data={users}
//           renderItem={renderItems}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </ListContainer>
//     </Container>
//   );
// }
