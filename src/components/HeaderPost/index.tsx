import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IUser} from '@modules/user/store/interfaces';
import {ReduxState} from '@interfaces/';
import {createPostOperation} from '@modules/posts/store/operations/post';
import {ICreatePostDto, IPost} from '@modules/posts/store/interfaces';
import {createPostStatus} from '@modules/posts/store/selectors/index';
import {user} from '@modules/user/store/selectors/index';
import {HeaderPostContainer} from './header-post-container';

const HeaderPost = () => {
  const dispatch = useDispatch();
  const createPostStatusState: ReduxState<IPost> = useSelector(state =>
    createPostStatus(state),
  );
  const createPost = (postDto: ICreatePostDto) =>
    dispatch(createPostOperation(postDto));

  const userState: IUser = useSelector(state => user(state));
  return (
    <HeaderPostContainer
      createPost={createPost}
      createPostStatus={createPostStatusState}
      user={userState}
    />
  );
};

export default HeaderPost;
