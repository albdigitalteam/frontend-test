import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Header, Loader, Skeleton } from 'components';
import Post from './Post';
import { IPosts, IPost, IComments, IComment, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import PerfectScrollbar from 'perfect-scrollbar';
import './styles.css';

var ps: any;

interface PostsProps {
  posts: IPosts;
  users: IUsers;
  comments: IComments;
}

function Posts(props: PostsProps) {
  const { posts, users, comments } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const getPostAuthor = (userId: number) => {
    const user = users.find((user: IUser) => user.id === userId);
    return user?.name;
  }

  const getCommentsPost = (postId: number) => {
    const commentsFiltered = comments.filter((comment: IComment) => comment.postId === postId);
    return commentsFiltered;
  }

  return (
    <div className='posts-container' data-testid="posts-element">
      {!posts.length ? <Skeleton /> :
        <>
          <Header />
          <div id='posts'>
            {posts && posts.map((post: IPost) => (
              < LazyLoad
                key={post.id}
                height={350}
                offset={[-100, 100]}
                placeholder={<Loader />}
              >
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={getPostAuthor(post.userId)}
                  body={post.body}
                  comments={getCommentsPost(post.id)}
                />
              </LazyLoad>
            ))}
          </div>
        </>
      }
    </div>
  );
};

const mapStateToProps = ({ posts, comments, users }: { posts: IPosts, comments: IComments, users: IUsers }) => ({
  posts,
  comments,
  users
});

export default connect(mapStateToProps)(Posts);