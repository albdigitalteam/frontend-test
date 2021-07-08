import React from 'react';
import { FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAppSelector } from '@hooks/redux';
import { StyledView } from '@components/components';
import CommentItem from '../components/CommentItem';
import { selectGetCommentsById } from 'stores/comment/comment.store';

type ICommentsScreenRouteProps = {
  CommentsScreen: {
    postId: number;
  };
};

type CommentsScreenProps = RouteProp<
  ICommentsScreenRouteProps,
  'CommentsScreen'
>;

export default function CommentsScreen(): JSX.Element {
  const route = useRoute<CommentsScreenProps>();

  const comments = useAppSelector(state =>
    selectGetCommentsById(state, route.params?.postId),
  );

  return (
    <StyledView flex={1}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem item={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </StyledView>
  );
}
