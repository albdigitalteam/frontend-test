import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { AplicationState } from '~/store';
import { logoutRequest } from '~/store/modules/auth/actions';
import { Post } from '~/store/modules/post/types';

import {
  ButtonAddPost,
  Container,
  ContainerLoading,
  CardPost,
  TextAddPost,
  TextBody,
  TextNameUser,
  TextTitle,
} from './styles';

const Publications: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const stateAuth = useSelector((state: AplicationState) => state.auth);

  console.log('stateAuth', stateAuth);

  const statePost = useSelector((state: AplicationState) => state.post);

  const handleAddPost = useCallback(() => {
    navigate('Publish', {
      type: 'post',
      postId: null,
    });
  }, [navigate]);

  const handleDeleteStore = useCallback(() => {
    dispatch(logoutRequest());
  }, [dispatch]);

  const handleDetailsPost = useCallback(
    (post: Post) => {
      navigate('Comments', {
        post,
      });
    },
    [navigate],
  );

  if (statePost.loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator animating size={36} color="#9E4BFB" />
      </ContainerLoading>
    );
  }

  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={handleDeleteStore}>
          <Text>DELETE STORE</Text>
        </TouchableOpacity>

        <ButtonAddPost onPress={handleAddPost}>
          <TextAddPost>Novo post</TextAddPost>
          <Icon name="add-circle-outline" size={30} color="#9e4bfb" />
        </ButtonAddPost>
      </View>

      <ScrollView>
        {statePost.data.map((post) => (
          <CardPost
            key={String(post.id)}
            onPress={() => handleDetailsPost(post)}
          >
            <TextNameUser>
              {post.id} {post.userName}
            </TextNameUser>
            <TextTitle numberOfLines={1}>{post.title}</TextTitle>
            <TextBody numberOfLines={3}>{post.body}</TextBody>
          </CardPost>
        ))}
      </ScrollView>
    </Container>
  );
};

export { Publications };
