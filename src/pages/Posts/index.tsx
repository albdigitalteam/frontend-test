import React, { useEffect, useState } from 'react';
import { FlatList, Alert, View } from 'react-native';

import { api } from '../../services/api';

import {
  Container, ItemContainer, Title, Description, Author,
} from './styles';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ItemProps {
  index: number;
  item: PostProps;
}

export function Posts() {
  const [posts, setPosts] = useState<[PostProps]>([{} as PostProps]);

  async function getPosts() {
    await api.get('/posts').then((res) => {
      console.log('POSTS', res);
      if (res.status === 200) {
        setPosts(res.data);
      } else {
        Alert.alert(
          'Erro',
          'Não foi possível obter os posts',
        );
      }
    });
  }

  const renderItems = (elem: ItemProps) => {
    const { title, body, userId } = elem.item;
    return (
      <ItemContainer>
        <Title>{title}</Title>
        <Description>{body}</Description>
        <Author>{userId}</Author>
      </ItemContainer>
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <FlatList
        ListEmptyComponent={(<View />)}
        data={posts}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
