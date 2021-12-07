import React from 'react';
import {getUserById} from '@modules/user/api/user';
import {deletePostOperation} from '@modules/posts/store/operations/post';
import {useSelector, useDispatch} from 'react-redux';
import {IPost} from '@modules/posts/store/interfaces';
import {PostContainer} from './post-container';

interface Props {
  post: IPost;
}

const Post = (props: Props) => {
  const dispatch = useDispatch();
  const getUser = () => {
    return getUserById(props.post.userId);
  };

  const deletePost = (postId: number) => dispatch(deletePostOperation(postId));

  return (
    <PostContainer
      deletePost={deletePost}
      getUserById={getUser}
      post={props.post}
    />
  );
};

export default Post;
