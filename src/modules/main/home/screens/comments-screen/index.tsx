import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Operations, Selectors, Interfaces} from '../../store';
import {CommentsContainer} from './comments-container';

const CommentsScreen = () => {
  const dispatch = useDispatch();

  const getComments = (postId: number) =>
    dispatch(Operations.COMMENT.getCommentsOperation(postId));

  const comments = useSelector(state => Selectors.comments(state).data);

  const commentsStatus = () => {
    const {failure, isDoing, isDone} = useSelector(state =>
      Selectors.comments(state),
    );
    return {
      failure,
      isDoing,
      isDone,
    };
  };

  return (
    <CommentsContainer
      getComments={getComments}
      comments={comments}
      commentsStatus={commentsStatus()}
    />
  );
};

export {CommentsScreen};
