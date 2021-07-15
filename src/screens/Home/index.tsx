import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { AplicationState } from '~/store';
import { deleteStore, loadPostRequest } from '~/store/modules/post/actions';
import { loadUserRequest } from '~/store/modules/user/actions';
import { loadCommentRequest } from '~/store/modules/comment/actions';
import { Post } from '~/store/modules/post/types';

import {
  ButtonAddPost,
  Container,
  CardPost,
  TextAddPost,
  TextBody,
  TextNameUser,
  TextTitle,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const statePost = useSelector((state: AplicationState) => state.post);

  const load = useCallback(() => {
    dispatch(loadPostRequest());
    dispatch(loadUserRequest());
    dispatch(loadCommentRequest());
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  const handleAddPost = useCallback(() => {
    navigate('AddPost');
  }, [navigate]);

  const handleDeleteStore = useCallback(() => {
    AsyncStorage.clear();
    dispatch(deleteStore());
  }, [dispatch]);

  const handleDetailsPost = useCallback(
    (post: Post) => {
      navigate('DetailPost', {
        post,
      });
    },
    [navigate],
  );

  if (statePost.loading) {
    return <ActivityIndicator animating size={36} color="#9E4BFB" />;
  }

  return (
    <Container>
      <ButtonAddPost onPress={handleAddPost}>
        <TextAddPost>Novo post</TextAddPost>
        <Icon name="add-circle-outline" size={30} color="#9e4bfb" />
      </ButtonAddPost>

      <TouchableOpacity onPress={handleDeleteStore}>
        <TextNameUser>DELETE STORE</TextNameUser>
      </TouchableOpacity>

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

export { Home };
