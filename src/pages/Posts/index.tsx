import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import { Header, Loader, Skeleton, Post, PostCreate } from 'components';
import { IPosts, IPost, IComments, IComment, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import './styles.css';

interface PostsProps {
  posts: IPosts;
  users: IUsers;
  comments: IComments;
}

function Posts(props: PostsProps) {
  const { posts, users, comments } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

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

  const handleOpenCreatePost = () => {
    const existPost = posts?.some((post: IPost) => post.id === 101);
    if (existPost)
      enqueueSnackbar("Você já adicionou 1 post");
    else
      setOpen(true);
  }

  const handleCloseCreatePost = () => {
    setOpen(false);
  }


  console.log("posts ",posts.length)
  return (
    <div className='posts-container' data-testid="posts-element">
      {open && <PostCreate onClose={handleCloseCreatePost} />}
      {!posts.length ? <Skeleton /> :
        <>
          <Header >
            <Button
              onClick={handleOpenCreatePost}
              variant="outlined"
              color="primary"
            >
              Adicionar Post
          </Button>
          </Header>
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