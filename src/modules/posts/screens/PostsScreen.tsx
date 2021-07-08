import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { StyledView } from '@components/components';
import { selectGetPosts } from '@stores/post/post.store';
import { getPostsAction } from '@stores/post/post.types';
import { getCommentsAction } from '@stores/comment/comment.types';
import { getUserAction } from '@stores/user/user.types';
import PostItem from '../components/PostItem';

export default function PostsScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectGetPosts);

  useEffect(() => {
    dispatch(getCommentsAction());
    dispatch(getUserAction());
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <StyledView flex={1}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem item={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </StyledView>
  );
}
