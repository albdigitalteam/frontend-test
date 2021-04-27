import React, { useEffect, Suspense, lazy } from 'react';
import { LinearProgress } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
//import Post from './Post';
import { IPosts, IPost, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import './styles.css';

const Post = lazy(() => import('./Post'));

interface PostsProps {
  posts: IPosts;
  users: IUsers;
}

function Posts(props: PostsProps) {
  const { posts, users } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("chama")
    dispatch(getPosts());
  }, [dispatch]);

  const getRandomImages = () => {
    return "https://random.imagecdn.app/510/200"
  }

  const getPostAuthor = (userId: number) => {
    const user = users.find((user: IUser) => user.id === userId);
    if (user)
      return user.name;
  }

  return (
    <div className='posts-container'>
      <Suspense fallback={<LinearProgress />}>
        {posts && posts.map((post: IPost) => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            author={getPostAuthor(post.userId)}
            body={post.body}
            image_url={getRandomImages()}
          />
        ))}
      </Suspense>
    </div>
  )

}

const mapStateToProps = ({ posts, users }: { posts: IPosts, users: IUsers }) => ({
  posts,
  users
});

export default connect(mapStateToProps)(Posts);