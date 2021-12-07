import React, {useEffect} from 'react';

import {Comment} from '../../store/interfaces';
import {ReduxState} from '../../../../../interfaces';
import {CommentsContent} from './comments-content';

interface Props {
  commentsStatus: ReduxState<Comment[]>;
  comments: Comment[] | null | undefined;
  getComments: (postId: number) => any;
}

const CommentsContainer = (props: Props) => {
  const postId = 1;
  useEffect(() => {
    props.getComments(postId);
  }, []);

  return <CommentsContent {...props} />;
};

export {CommentsContainer};
