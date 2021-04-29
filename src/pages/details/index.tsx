import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Header, Post, CommentsList } from 'components';
import { IPosts, IPost, IComments, IComment, IUsers, IUser } from 'types';
import { getPost } from 'store/redux/actions';
import './styles.css';

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
        if (postId !== '' && posts && posts.length) {
            const post = posts.find((post: IPost) => post.id === Number(postId));
            if (post)
                setPost(post);
        }
        else
            dispatch(getPost(Number(postId)));

    }, [postId, posts, dispatch]);

    const getPostAuthor = (userId: number) => {
        const user = users.find((user: IUser) => user.id === userId);
        return user?.name;
    }

    const getCommentsPost = (postId: number) => {
        const commentsFiltered: IComments = comments.filter((comment: IComment) => comment.postId === postId);
        return commentsFiltered;
    }

    return (
        <div className='details-container' data-testid='details-element'>
            <Header left />
            <div id='details'>
                {post &&
                    <>
                        <Post
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            author={getPostAuthor(post.userId)}
                            body={post?.body}
                            comments={getCommentsPost(post.id)}
                        />
                        <CommentsList
                            comments={getCommentsPost(post.id)}
                        />
                    </>
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