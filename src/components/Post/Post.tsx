import { CommentType } from '../../types';
import Ruler from '../Ruler';
import CircularAvatar from './components/CircularAvatar';

type PostProps = {
    name: string;
    title: string;
    body: string;
    image?: string;
    comments?: CommentType[];
};

function Post({ name, title, body, image, comments }: PostProps) {
    return (
        <div
            className="flex flex-col gap-2 mt-4 w-full rounded-xl overflow-y-auto 
                        text-gray-700 bg-white p-4"
        >
            <div className="flex">
                <CircularAvatar />
                <h1 className="ml-1">{name}</h1>
            </div>
            <Ruler />
            <h2>{title}</h2>
            {!!image && <img src={image} alt={`image_post_${title}`} />}
            <p>{body}</p>
            <Ruler />
        </div>
    );
}

export default Post;
