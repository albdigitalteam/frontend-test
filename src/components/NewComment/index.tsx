import React from 'react';
import {createCommentOperation} from '@modules/comments/store/operations/comment';
import {ICreateCommentDto, IComment} from '@modules/comments/store/interfaces';
import {createCommentState} from '@modules/comments/store/selectors/index';
import {IUser} from '@modules/user/store/interfaces';
import {user} from '@modules/user/store/selectors/index';
import {useSelector, useDispatch} from 'react-redux';
import {ReduxState} from '@interfaces/';
import {NewCommentContainer} from './new-comment-container';
import {useLinkProps} from '@react-navigation/native';

interface Props {
  postId: number;
}

const NewComment = (props: Props) => {
  const dispatch = useDispatch();

  const createCommentStatus: ReduxState<IComment> = useSelector(state => {
    const {isDoing, isDone, failure} = createCommentState(state);
    return {isDoing, isDone, failure};
  });

  const createComment = (commentDto: ICreateCommentDto) =>
    dispatch(createCommentOperation(commentDto));

  const userState: IUser = useSelector(state => user(state));

  return (
    <NewCommentContainer
      createComment={createComment}
      createCommentStatus={createCommentStatus}
      user={userState}
      postId={props.postId}
    />
  );
};

export default NewComment;
