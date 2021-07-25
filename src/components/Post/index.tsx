import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsPost from '../../store/ducks/posts/actions';
import * as ActionUser from '../../store/ducks/users/actions';
import * as ActionComment from '../../store/ducks/comments/actions';
import { IPost } from '../../store/ducks/posts/types';
import { IUser } from '../../store/ducks/users/types';
import { IComment } from '../../store/ducks/comments/types';
import { IApplicationState } from '../../store';
import { Container, PostContent } from './styles';
import PostAction from '../PostAction';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state: IApplicationState) => state.posts);
  const userState = useSelector((state: IApplicationState) => state.users);
  const commentState = useSelector(
    (state: IApplicationState) => state.comments,
  );

  useEffect(() => {
    dispatch(ActionsPost.loadRequest());
    dispatch(ActionUser.loadRequest());
    dispatch(ActionComment.loadRequest());
  }, [dispatch]);

  const getComments = useCallback((postId: number, index: number) => {
    const comments = commentState.data.filter(
      (c: IComment) => c.postId === postId,
    );
    return comments;
  }, []);

  const renderPost = () =>
    postState.data.map((p: IPost) => {
      console.log(p.id, 'edilson');

      const user = userState.data.find((u: IUser) => u.id === p.userId);
      const totalComments = commentState.data.filter(
        (c: IComment) => c.postId === p.id,
      ).length;

      return (
        <PostContent>
          <strong>{user?.name}</strong>
          <strong>{p.title}</strong>
          <p>{p.body}</p>
          <PostAction totalComments={totalComments} />
        </PostContent>
      );
    });

  return <Container>{renderPost()}</Container>;
};

export default Posts;
