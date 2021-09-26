import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { LoadingData } from '../../components/LoadingData';

import {
  Container, Content, ItemContainer, Title, Description,
} from './styles';
import { capitalizeFirstLetter } from '../../Util/utils';

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
  const [posts, setPosts] = useState<PostProps[]>([]);

  const navigation = useNavigation();

  async function getPosts() {
    await api.get('/posts').then((res) => {
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

  const handlePostDetail = (post: PostProps) => {
    navigation.navigate('PostDetail', post);
  };

  const renderItems = (elem: ItemProps) => {
    const { title, body } = elem.item;
    return (
      <ItemContainer onPress={() => { handlePostDetail(elem.item); }}>
        <Title numberOfLines={1}>{capitalizeFirstLetter(title)}</Title>
        <Description numberOfLines={2}>{capitalizeFirstLetter(body)}</Description>
      </ItemContainer>
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (Object.keys(posts).length <= 0) {
    return <LoadingData />;
  }

  return (
    <Container>
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  );
}
