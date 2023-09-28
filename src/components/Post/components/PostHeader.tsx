import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteData } from '../../../api/hooks/useDeleteData';
import { useStore } from '../../../stores/hooks/useStore';
import IconButton from '../../common/Buttons/IconButton';
import CircularAvatar from './CircularAvatar';

type PostHeaderProps = {
    userId: number;
    postId: number;
};

function PostHeader({ userId, postId }: PostHeaderProps) {
    const store = useStore();
    const user = store?.users.find(({ id }) => id === userId);
    const isSameUser = store?.user?.id === userId;

    const { mutateAsync: deletePost } = useDeleteData({
        url: '/posts',
        id: postId,
        setToStore: store?.deletePost,
    });

    return (
        <div className="flex justify-between">
            <div className="flex">
                <CircularAvatar />
                {!!user && (
                    <div className="flex flex-col ml-1">
                        <h1>{user.name}</h1>
                        <span>{`@${user.username}, ${user.email}`}</span>
                    </div>
                )}
            </div>
            {!!isSameUser && (
                <IconButton buttonAction={() => deletePost()} icon={faTrash} />
            )}
        </div>
    );
}

export default PostHeader;
