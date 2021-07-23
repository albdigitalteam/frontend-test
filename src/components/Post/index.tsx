import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsPost from '../../store/ducks/posts/actions';
import * as ACtionUser from '../../store/ducks/users/actions';
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
    dispatch(ACtionUser.loadRequest());
  }, [dispatch]);

  const getComments = useCallback((postId: number, index: number) => {
    const comments = commentState.data.filter(
      (c: IComment) => c.postId === postId,
    );
    return comments;
  }, []);

  const renderPost = () =>
    postState.data.map((p: IPost) => {
      const user = userState.data.find((u: IUser) => u.id === p.userId);

      return (
        <PostContent>
          <strong>{user?.name}</strong>
          <strong>{p.title}</strong>
          <p>{p.body}</p>
          <PostAction />
        </PostContent>
      );
    });

  return <Container>{renderPost()}</Container>;
};

export default Posts;
