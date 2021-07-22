import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsPost from '../../store/ducks/posts/actions';
import { IPost } from '../../store/ducks/posts/types';
import { IApplicationState } from '../../store';
import { Container, PostContent } from './styles';
import PostAction from '../PostAction';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: IApplicationState) => state.posts);

  useEffect(() => {
    dispatch(ActionsPost.loadRequest());
  }, [dispatch]);

  const renderPost = () =>
    data.map((p: IPost) => (
      <PostContent>
        <strong>{p.title}</strong>
        <p>{p.body}</p>
        <PostAction />
      </PostContent>
    ));

  return <Container>{renderPost()}</Container>;
};

export default Posts;
