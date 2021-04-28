import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { Header, Loader, Skeleton } from 'components';
import Post from '../Posts';
import { IPosts, IPost, IComments, IComment, IUsers, IUser } from 'types';
import { getPosts } from 'store/redux/actions';
import PerfectScrollbar from 'perfect-scrollbar';
import './styles.css';

var ps: any;

interface DetailsProps {
    users: IUsers;
    posts: IPosts;
    comments: IComments;   
}

interface ParamTypes {
    postId: string;
}

function Details(props: DetailsProps) {
    const { postId } = useParams<ParamTypes>();

    const { posts, users, comments } = props;
    const [post, setPost] = useState<IPost>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (postId !== '') {
            const post = posts.find((post: IPost) => post.id === Number(postId));
            if (post)
                setPost(post);
        }
    }, [postId, posts]);

    const getPostAuthor = (userId: number) => {
        const user = users.find((user: IUser) => user.id === userId);
        return user?.name;
    }

    const getCommentsPost = (postId: number) => {
        const commentsFiltered = comments.filter((comment: IComment) => comment.postId === postId);
        return commentsFiltered;
    }

    return (
        <div className='details-container' data-testid="details-element">
            <Header />
            <div id='details'>
                {post && <Post
                    key={post.id}
                    id={1}
                    title={post.title}
                    author={getPostAuthor(post.userId)}
                    body={post?.body}
                    comments={getCommentsPost(post.id)}
                />
                }
            </div>
        </div >
    );
};

const mapStateToProps = ({ posts, comments, users }: { posts: IPosts, comments: IComments, users: IUsers }) => ({
    posts,
    comments,
    users
});

export default connect(mapStateToProps)(Details);