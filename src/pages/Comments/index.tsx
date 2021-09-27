import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { FAB } from '../../components/FAB';

import { LoadingData } from '../../components/LoadingData';

import { api } from '../../services/api';
import { capitalizeFirstLetter } from '../../Util/utils';

import {
  Container, Content, UserEmail, Description, ItemContainer,
} from './styles';

interface PostProps {
  body: string;
  email: string;
  // name: string;
}
interface ItemProps {
  index: number;
  item: PostProps;
}

export function Comments({ route }: any) {
  const { id } = route.params;

  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    await api.get(`/comments?postId=${id}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log('ERROR COMMENTS', error);
      });
  };

  const renderItems = (elem: ItemProps) => {
    const { body, email } = elem.item;
    return (
      <ItemContainer>
        <UserEmail>{email}</UserEmail>
        <Description>{capitalizeFirstLetter(body)}</Description>
      </ItemContainer>
    );
  };

  useEffect(() => {
    getPost();
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
        <FAB navigationURL="NewComment" />
      </Content>
    </Container>
  );
}
