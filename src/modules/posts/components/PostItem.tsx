import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyledView, Text } from '@components/components';
import { deletePostAction, IPost } from '@stores/post/post.types';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { selectGetUserById } from '@stores/user/user.store';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PostItem({ item }: { item: IPost }): JSX.Element {
  const { navigate } = useNavigation();
  const dispatch = useAppDispatch();
  const author = useAppSelector(state => selectGetUserById(state, item.userId));

  function renderFooter() {
    return (
      <TouchableOpacity
        onPress={() => navigate('CommentsScreen', { postId: item.id })}>
        <StyledView
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="s"
          borderTopWidth={1}
          borderTopColor="blurEffect">
          <Text ml="n">Ver comentários</Text>
          <Icon name="chevron-right" size={20} />
        </StyledView>
      </TouchableOpacity>
    );
  }

  function confirmDeletePost() {
    Alert.alert('Atenção', 'Você deseja excluir o post?', [
      { text: 'Sim', onPress: () => dispatch(deletePostAction(item.id)) },
      { text: 'Não', onPress: () => false, style: 'cancel' },
    ]);
  }

  return (
    <StyledView
      bg="white"
      m="s"
      shadowColor="black"
      shadowOffset={{
        width: 0,
        height: 2,
      }}
      shadowOpacity={0.25}
      shadowRadius={3.84}
      elevation={5}
      borderRadius={8}>
      <StyledView p="m">
        <StyledView flexDirection="row" justifyContent="space-between">
          <StyledView flex={1}>
            <Text fontSize={16} fontWeight="700">
              {item.title}
            </Text>
          </StyledView>
          <TouchableOpacity onPress={confirmDeletePost}>
            <Icon name="trash" size={16} />
          </TouchableOpacity>
        </StyledView>
        <Text fontSize={12} mt="n">
          Autor: {author?.username}
        </Text>
        <Text mt="s">{item.body}</Text>
      </StyledView>
      {renderFooter()}
    </StyledView>
  );
}
