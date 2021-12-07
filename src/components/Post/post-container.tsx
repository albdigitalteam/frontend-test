import React, {useEffect, useState} from 'react';
import {IPost} from '@modules/posts/store/interfaces';
import {IUser} from '@modules/user/store/interfaces';
import {useNavigation} from '@react-navigation/native';
import {PostContent} from './post-content';

interface Props {
  getUserById: () => Promise<Response>;
  deletePost: (postId: number) => any;
  post: IPost;
}

const PostContainer = (props: Props) => {
  const navigation = useNavigation();
  const [author, setAuthor] = useState<IUser>();

  const navigate = (routeName: string, {postId}: {postId: number}) => {
    navigation.navigate(routeName, {
      postId,
    });
  };

  useEffect(() => {
    let mounted = true;
    props
      .getUserById()
      .then(res => res.json())
      .then((json: IUser[]) => {
        if (mounted) {
          const user = json[0];
          setAuthor(user);
        }
      });

    return () => (mounted = false) as any;
  }, []);

  return (
    <PostContent
      deletePost={props.deletePost}
      author={author}
      navigate={navigate}
      post={props.post}
    />
  );
};

export {PostContainer};
