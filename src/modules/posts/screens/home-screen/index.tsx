import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Operations, Selectors} from '../../store';
import {HomeContainer} from './home-container';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getPosts = () => dispatch(Operations.POST.getPostsOperation());
  const posts = useSelector(state => Selectors.posts(state).data);

  const postsStatus = () => {
    const {failure, isDoing, isDone} = useSelector(state =>
      Selectors.posts(state),
    );
    return {
      failure,
      isDoing,
      isDone,
    };
  };

  return (
    <HomeContainer
      getPosts={getPosts}
      posts={posts}
      postsStatus={postsStatus()}
    />
  );
};

export {HomeScreen};
