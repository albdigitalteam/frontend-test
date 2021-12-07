import React, {useEffect, useState} from 'react';
import {IComment} from '@modules/comments/store/interfaces';
import {CommentContent} from './comment-content';

interface Props {
  comment: IComment;
}

const CommentContainer = (props: Props) => {
  return <CommentContent {...props} />;
};

export {CommentContainer};
