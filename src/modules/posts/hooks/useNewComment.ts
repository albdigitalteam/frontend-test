import React from 'react';
import { useAppDispatch } from '@hooks/redux';
import { addCommentAction } from 'stores/comment/comment.types';
import { Alert } from 'react-native';

interface INewPostHook {
  sendComment(): void;
  name: string;
  body: string;
  setName(text: string): void;
  setBody(text: string): void;
}

export default function useNewComment(postId: number): INewPostHook {
  const dispatch = useAppDispatch();
  const [name, setName] = React.useState('');
  const [body, setBody] = React.useState('');

  const sendComment = React.useCallback(() => {
    if (body.trim().length && name.trim().length) {
      dispatch(
        addCommentAction({
          postId,
          name,
          body,
        }),
      );
      setName('');
      setBody('');
    } else {
      Alert.alert('Atenção', 'Verifique se o nome e o texto estão preenchidos');
    }
  }, [dispatch, name, body, postId]);

  return {
    sendComment,
    name,
    body,
    setName,
    setBody,
  };
}
