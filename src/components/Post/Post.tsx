import Ruler from '../Ruler';
import Card from '../common/Card';
import PostComments from './components/PostComments';
import PostHeader from './components/PostHeader';

type PostProps = {
    id: number;
    userId: number;
    title: string;
    body: string;
    image: string | null;
};

function Post({ userId, id, title, body, image }: PostProps) {
    return (
        <Card>
            <PostHeader userId={userId} postId={id} />
            <Ruler />
            <h2>{title}</h2>
            {!!image && (
                <img
                    className="w-full h-[60vh] object-fill"
                    src={image}
                    alt={`image_post_${title}`}
                />
            )}
            <p>{body}</p>
            <PostComments postId={id} />
        </Card>
    );
}

export default Post;
