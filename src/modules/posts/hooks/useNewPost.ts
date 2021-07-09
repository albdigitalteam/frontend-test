import React from 'react';
import { useAppDispatch } from '@hooks/redux';
import { addPostAction } from 'stores/post/post.types';
import { Alert } from 'react-native';

interface INewPostHook {
  sendPost(): void;
  postText: string;
  postTitle: string;
  setPostText(text: string): void;
  setPostTitle(text: string): void;
}

export default function useNewPost(): INewPostHook {
  const dispatch = useAppDispatch();
  const [postText, setPostText] = React.useState('');
  const [postTitle, setPostTitle] = React.useState('');

  const sendPost = React.useCallback(() => {
    if (postTitle.trim().length && postText.trim().length) {
      dispatch(
        addPostAction({
          userId: 1,
          title: postTitle,
          body: postText,
        }),
      );
      setPostText('');
      setPostTitle('');
    } else {
      Alert.alert(
        'Atenção',
        'Verifique se o título e o texto estão preenchidos',
      );
    }
  }, [dispatch, postText, postTitle]);

  return {
    sendPost,
    postText,
    postTitle,
    setPostText,
    setPostTitle,
  };
}
