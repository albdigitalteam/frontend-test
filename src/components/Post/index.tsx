import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsPost from '../../store/ducks/posts/actions';
import * as ActionUser from '../../store/ducks/users/actions';
import * as ActionComment from '../../store/ducks/comments/actions';
import { IPost } from '../../store/ducks/posts/types';
import { IUser } from '../../store/ducks/users/types';
import { IComment } from '../../store/ducks/comments/types';
import { IApplicationState } from '../../store';
import { Container, PostContent, TitleExcludeButtonContent } from './styles';
import PostAction from '../PostAction';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state: IApplicationState) => state.posts);
  const userState = useSelector((state: IApplicationState) => state.users);
  const commentState = useSelector((state: IApplicationState) => {
    const { data } = state.comments;
    return data;
  });

  useEffect(() => {
    dispatch(ActionsPost.loadRequest());
    dispatch(ActionUser.loadRequest());
  }, [dispatch]);

  const getComments = (postId: number) => {
    if (!commentState.find((comment: IComment) => comment.postId === postId)) {
      dispatch(ActionComment.loadRequest(postId));
    }
  };

  const handleDeletePost = (postId: number) => {
    dispatch(ActionsPost.deleteRequest(postId));
  };

  const renderPost = () =>
    postState.data.map((p: IPost) => {
      const user = userState.data.find((u: IUser) => u.id === p.userId);
      return (
        <PostContent>
          <TitleExcludeButtonContent>
            <strong>{user?.name}</strong>
            <span
              tabIndex={0}
              onKeyPress={() => {
                handleDeletePost(p.id);
              }}
              onClick={() => {
                handleDeletePost(p.id);
              }}
              role="button"
            >
              Excluir
            </span>
          </TitleExcludeButtonContent>

          <strong>{p.title}</strong>
          <p>{p.body}</p>
          <PostAction
            postOwner={user?.name}
            onClick={() => getComments(p.id)}
            comments={commentState.filter(
              (comment: IComment) => comment.postId === p.id,
            )}
          />
        </PostContent>
      );
    });

  return <Container>{renderPost()}</Container>;
};

export default Posts;
