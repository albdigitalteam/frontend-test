import React, { useEffect, Suspense, lazy } from 'react';
import { LinearProgress } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
//import Post from './Post';
import { IPosts, IPost, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import PerfectScrollbar from 'perfect-scrollbar';
import './styles.css';

var ps: any;

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

  useEffect(() => {
    if (document.getElementById("posts") !== null)
      ps = new PerfectScrollbar("#posts");
    else
      ps.update();
  });

  const getRandomImages = () => {
    return "https://random.imagecdn.app/500/200"
  }

  const getPostAuthor = (userId: number) => {
    const user = users.find((user: IUser) => user.id === userId);
    if (user)
      return user.name;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
    <div className='posts-container' data-testid="posts-element">
      <div className='posts' id='posts'>
       
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
        
      </div>
    </div>
    </Suspense>
  )

}

const mapStateToProps = ({ posts, users }: { posts: IPosts, users: IUsers }) => ({
  posts,
  users
});

export default connect(mapStateToProps)(Posts);