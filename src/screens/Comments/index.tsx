import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons as Icon } from '@expo/vector-icons';

import { AplicationState } from '~/store';
import { deletePostRequest } from '~/store/modules/post/actions';
import { Post } from '~/store/modules/post/types';

import {
  ButtonAddComment,
  Container,
  ContainerPost,
  ContainerComment,
  HeaderPost,
  TextAddComment,
  TextNameUser,
  TextNameUserComment,
  TextEmailUser,
  TextTitle,
  TextBody,
} from './styles';

type RouteParams = {
  params: {
    post: Post;
  };
};

const Comments: React.FC = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const { post } = route.params;

  const stateComment = useSelector((state: AplicationState) => state.comment);

  const handleDeletePost = useCallback(() => {
    dispatch(deletePostRequest(post.id));
    navigate('Publications');
  }, [dispatch, post, navigate]);

  const handleAddComment = useCallback(() => {
    navigate('Publish', {
      type: 'comment',
      postId: post.id,
    });
  }, [navigate, post]);

  return (
    <Container>
      <ContainerPost>
        <HeaderPost>
          <TextNameUser>{post.userName}</TextNameUser>
          <TouchableOpacity onPress={handleDeletePost}>
            <Icon name="md-trash-outline" size={22} color="#9e4bfb" />
          </TouchableOpacity>
        </HeaderPost>

        <TextTitle style={{ fontSize: 18 }}>{post.title}</TextTitle>
        <TextBody style={{ fontSize: 16 }}>{post.body}</TextBody>

        <ButtonAddComment onPress={handleAddComment}>
          <TextAddComment>Comentar</TextAddComment>
          <Icon
            name="md-chatbubble-ellipses-outline"
            size={22}
            color="#9e4bfb"
          />
        </ButtonAddComment>
      </ContainerPost>

      {stateComment.data.map(
        (comment) =>
          comment.postId === post.id && (
            <ContainerComment key={String(comment.id)}>
              <TextNameUserComment>
                {comment.id} {comment.name}
              </TextNameUserComment>
              <TextEmailUser>{comment.email}</TextEmailUser>
              <TextBody style={{ fontSize: 12 }}>{comment.body}</TextBody>
            </ContainerComment>
          ),
      )}
    </Container>
  );
};

export { Comments };
