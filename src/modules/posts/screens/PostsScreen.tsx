import React, { useEffect } from 'react';
import {
  FlatList,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { StyledView, Button } from '@components/components';
import { selectGetPosts, selectPostsIsLoading } from '@stores/post/post.store';
import { getPostsAction } from '@stores/post/post.types';
import { getCommentsAction } from '@stores/comment/comment.types';
import { getUserAction } from '@stores/user/user.types';
import PostItem from '../components/PostItem';
import useNewPost from '../hooks/useNewPost';
import theme from 'theme/theme';

export default function PostsScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectGetPosts);
  const isLoading = useAppSelector(selectPostsIsLoading);
  const { sendPost, postText, setPostText, postTitle, setPostTitle } =
    useNewPost();

  useEffect(() => {
    dispatch(getCommentsAction());
    dispatch(getUserAction());
    dispatch(getPostsAction());
  }, [dispatch]);

  function renderHeader() {
    return (
      <StyledView m="m">
        <TextInput
          value={postTitle}
          onChangeText={text => setPostTitle(text)}
          placeholder="Insira um título"
          style={styles.titleInput}
        />
        <TextInput
          value={postText}
          onChangeText={text => setPostText(text)}
          placeholder="O que você deseja publicar?"
          style={styles.textInput}
          multiline
        />
        <Button label="Publicar" mt="s" onPress={sendPost} />
      </StyledView>
    );
  }

  if (isLoading) {
    return (
      <StyledView flex={1} alignItems="center" justifyContent="center">
        <ActivityIndicator size="large" />
      </StyledView>
    );
  }

  return (
    <StyledView flex={1}>
      {renderHeader()}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostItem item={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </StyledView>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    padding: theme.spacing.s,
    borderWidth: 0.5,
    borderColor: '#404040',
    marginBottom: theme.spacing.s,
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
  textInput: {
    height: 90,
    padding: theme.spacing.s,
    borderWidth: 0.5,
    borderColor: '#404040',
    marginBottom: theme.spacing.s,
    textAlignVertical: 'top',
    backgroundColor: theme.colors.white,
    borderRadius: 5,
  },
});
