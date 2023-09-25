import Ruler from '../Ruler';
import PostComments from './components/PostComments';
import PostHeader from './components/PostHeader';

type PostProps = {
    id: number;
    userId: number;
    title: string;
    body: string;
    image?: string;
};

function Post({ userId, id, title, body, image }: PostProps) {
    return (
        <div
            className="flex flex-col gap-2 mt-4 w-full rounded-xl overflow-y-auto 
                        text-gray-700 bg-white p-4"
        >
            <PostHeader userId={userId} />
            <Ruler />
            <h2>{title}</h2>
            {!!image && <img src={image} alt={`image_post_${title}`} />}
            <p>{body}</p>
            <Ruler />
            <PostComments postId={id} />
        </div>
    );
}

export default Post;
