import React from 'react';
import {getUserById} from '@modules/user/api/user';
import {useSelector, useDispatch} from 'react-redux';
import {IComment} from '@modules/comments/store/interfaces';
import {CommentContainer} from './comment-container';

interface Props {
  comment: IComment;
}

const Comment = (props: Props) => {
  return <CommentContainer {...props} />;
};

export default Comment;
