import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Header, Loader } from 'components';
import Post from './Post';
import { IPosts, IPost, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import PerfectScrollbar from 'perfect-scrollbar';
import './styles.css';

var ps: any;

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

  const getPostAuthor = (userId: number) => {
    const user = users.find((user: IUser) => user.id === userId);
    return user?.name;
  }

  return (
    <div className='posts-container' data-testid="posts-element">
      <Header />
      <div className='posts' id='posts'>
        {posts && posts.map((post: IPost) => (
          < LazyLoad
            key={post.id}
            height={385}
            offset={[-100, 100]}
            placeholder={<Loader />}
          >
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              author={getPostAuthor(post.userId)}
              body={post.body}
            />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts, users }: { posts: IPosts, users: IUsers }) => ({
  posts,
  users
});

export default connect(mapStateToProps)(Posts);