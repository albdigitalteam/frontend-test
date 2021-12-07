import React, {useEffect} from 'react';
import {IComment} from '../../store/interfaces';
import {ReduxState} from '@interfaces/';
import {useRoute} from '@react-navigation/native';
import {CommentsContent} from './comments-content';

interface NavigationProps {
  postId: number;
}

interface Props {
  commentsStatus: ReduxState<IComment[]>;
  comments: IComment[] | null | undefined;
  getComments: (postId: number) => any;
}

const CommentsContainer = (props: Props) => {
  const route = useRoute();
  const params = route.params as NavigationProps;
  const postId = params.postId;

  useEffect(() => {
    props.getComments(postId);
  }, []);

  return <CommentsContent {...props} />;
};

export {CommentsContainer};
