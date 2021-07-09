import React from 'react';
import { FlatList, TextInput, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useAppSelector } from '@hooks/redux';
import { StyledView, Text, Button } from '@components/components';
import CommentItem from '../components/CommentItem';
import { selectGetCommentsById } from 'stores/comment/comment.store';
import useNewComment from '../hooks/useNewComment';
import theme from '@theme/theme';

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
  const { sendComment, name, body, setName, setBody } = useNewComment(
    route.params?.postId,
  );

  const comments = useAppSelector(state =>
    selectGetCommentsById(state, route.params?.postId),
  );

  function renderHeader() {
    return (
      <StyledView m="m">
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Insira um nome"
          style={styles.titleInput}
        />
        <TextInput
          value={body}
          onChangeText={text => setBody(text)}
          placeholder="O que você deseja comentar?"
          style={styles.textInput}
          multiline
        />
        <Button label="Comentar" mt="s" onPress={sendComment} />
      </StyledView>
    );
  }

  if (!comments.length) {
    return (
      <StyledView flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={18}>Sem comentários...</Text>
      </StyledView>
    );
  }

  return (
    <StyledView flex={1}>
      {renderHeader()}
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem item={item} />}
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
