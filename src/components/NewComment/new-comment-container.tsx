import React from 'react';
import {NewCommentContent} from './new-comment-content';
import {ICreateCommentDto, IComment} from '@modules/comments/store/interfaces';
import {ReduxState} from '@interfaces/';

interface Props {
  createComment: (commentDto: ICreateCommentDto) => any;
  createCommentStatus: ReduxState<IComment>;
}

const NewCommentContainer = (props: Props) => {
  const postId = 1;
  const name = 'Teste1';
  const email = 'teste@hotmail.com';
  const createComment = (body: string) => {
    return props.createComment({
      body,
      email,
      name,
      postId,
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
