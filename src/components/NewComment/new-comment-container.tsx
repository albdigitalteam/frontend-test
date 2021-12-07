import React from 'react';
import {NewCommentContent} from './new-comment-content';
import {ICreateCommentDto, IComment} from '@modules/comments/store/interfaces';
import {IUser} from '@modules/user/store/interfaces';

import {ReduxState} from '@interfaces/';

interface Props {
  createComment: (commentDto: ICreateCommentDto) => any;
  createCommentStatus: ReduxState<IComment>;
  user: IUser;
  postId: number;
}

const NewCommentContainer = (props: Props) => {
  const createComment = (body: string) => {
    return props.createComment({
      body,
      email: props.user.email,
      name: props.user.name,
      postId: props.postId,
    });
  };

  return (
    <NewCommentContent
      createComment={createComment}
      createCommentStatus={props.createCommentStatus}
    />
  );
};

export {NewCommentContainer};
