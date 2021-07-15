import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AplicationState } from '~/store';
import { Post } from '~/store/modules/post/types';

import {
  Container,
  ContainerPost,
  ContainerComment,
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

const DetailPost: React.FC = () => {
  const route = useRoute<RouteProp<RouteParams, 'params'>>();

  const { post } = route.params;

  const stateComment = useSelector((state: AplicationState) => state.comment);

  return (
    <Container>
      <ContainerPost>
        <TextNameUser>{post.userName}</TextNameUser>
        <TextTitle style={{ fontSize: 18 }}>{post.title}</TextTitle>
        <TextBody style={{ fontSize: 16 }}>{post.body}</TextBody>
      </ContainerPost>

      {stateComment.data.map(
        (comment) =>
          comment.postId === post.id && (
            <ContainerComment key={String(comment.id)}>
              <TextNameUserComment>{comment.name}</TextNameUserComment>
              <TextEmailUser>{comment.email}</TextEmailUser>
              <TextBody style={{ fontSize: 12 }}>{comment.body}</TextBody>
            </ContainerComment>
          ),
      )}
    </Container>
  );
};

export { DetailPost };
