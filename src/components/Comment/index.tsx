import React from 'react';
import {IComment} from '@modules/comments/store/interfaces';
import {CommentContainer} from './comment-container';

interface Props {
  comment: IComment;
}

const Comment = (props: Props) => {
  return <CommentContainer {...props} />;
};

export default Comment;
