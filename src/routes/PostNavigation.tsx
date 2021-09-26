import React, { useEffect, useState } from 'react';
import {
  Alert, TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { PostDetail } from '../pages/PostDetail';
import { Comments } from '../pages/Comments';

import { api } from '../services/api';

const Tab = createBottomTabNavigator();

interface UserProps {
  id: number;
  name: string;
}

export default function PostNavigation({ route }) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const { params } = route;

  const navigation = useNavigation();

  const deletePost = async () => {
    await api.delete(`/users/${params.id}`)
      .then((res) => {
        Alert.alert('Success!', 'Post deleted', [
          { text: 'OK', onPress: () => { navigation.goBack(); } },
        ]);
      })
      .catch((error) => {
        console.log('Error delete post', error);
      });
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'This will delete post', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: deletePost },
    ]);
  };

  const getUser = async () => {
    await api.get(`/users/${params.userId}`)
      .then((res) => { setUser(res.data); })
      .catch((error) => {
        console.log('Error fetch user data', error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#FFF' }}
      screenOptions={{
        headerStyle: {
          shadowOffset: {
            height: 0,
            width: 0,
          },
        },
      }}
    >
      <Tab.Screen
        name="Detail"
        component={PostDetail}
        initialParams={params}
        options={{
          title: user.name,
          headerRight: () => (
            <TouchableOpacity onPress={confirmDelete} style={{ padding: 10 }}>
              <FontAwesome5 name="trash-alt" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Comments" component={Comments} initialParams={params} />
    </Tab.Navigator>
  );
}
