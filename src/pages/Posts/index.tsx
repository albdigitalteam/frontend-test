import React, { useEffect, useState } from 'react';
import { FlatList, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { FAB } from '../../components/FAB';
import { LoadingData } from '../../components/LoadingData';

import { api } from '../../services/api';
import { capitalizeFirstLetter } from '../../Util/utils';
import { AuthContext } from '../../Contexts/AuthContext';

import {
  Container, Content, ItemContainer, Title, Description, ItemContent, TitleScreen,
} from './styles';
import colors from '../../styles/colors';

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
      <ItemContainer>
        <ItemContent onPress={() => { handlePostDetail(elem.item); }}>
          <Title numberOfLines={1}>{capitalizeFirstLetter(title)}</Title>
          <Description numberOfLines={2}>{capitalizeFirstLetter(body)}</Description>
        </ItemContent>
        <FontAwesome5 name="chevron-right" size={18} color={colors.blue} />
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
          // ListHeaderComponent={(<TitleScreen>Posts</TitleScreen>)}
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={renderItems}
          keyExtractor={(item, index) => index.toString()}
        />
        <FAB navigationURL="NewPost" />
      </Content>
    </Container>
  );
}
