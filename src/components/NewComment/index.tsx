import React from 'react';
import {createCommentOperation} from '@modules/comments/store/operations/comment';
import {ICreateCommentDto, IComment} from '@modules/comments/store/interfaces';
import {createCommentState} from '@modules/comments/store/selectors/index';
import {useSelector, useDispatch} from 'react-redux';
import {ReduxState} from '@interfaces/';
import {NewCommentContainer} from './new-comment-container';

const NewComment = () => {
  const dispatch = useDispatch();

  const createCommentStatus: ReduxState<IComment> = useSelector(state => {
    const {isDoing, isDone, failure} = createCommentState(state);
    return {isDoing, isDone, failure};
  });

  const createComment = (commentDto: ICreateCommentDto) =>
    dispatch(createCommentOperation(commentDto));

  return (
    <NewCommentContainer
      createComment={createComment}
      createCommentStatus={createCommentStatus}
    />
  );
};

export default NewComment;
