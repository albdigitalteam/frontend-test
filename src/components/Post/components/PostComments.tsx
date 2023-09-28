import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/hooks/useStore';
import {
    faMessage,
    faPenToSquare,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import IconButton from '../../common/Buttons/IconButton';
import CircularAvatar from './CircularAvatar';
import Ruler from '../../Ruler';
import MessageForm from '../../MessageForm';
import { CommentType } from '../../../types';
import { usePostData } from '../../../api/hooks/usePostData';
import Spinner from '../../common/Spinner';
import ActionButtons from '../../common/Buttons/ActionButtons';

function PostComments({ postId }: { postId: number }) {
    const [displayComments, setDisplayComments] = useState(false);
    const [showWriteComment, setShowWriteComment] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const store = useStore();
    const postComments = store?.comments.filter(
        (comnt) => comnt.postId === postId,
    );

    const { mutateAsync: sendComment } = usePostData<CommentType, CommentType>({
        url: '/comments',
        setToStore: store?.addComment,
    });

    // Send comment data to server with the default user data with id given by the API
    const onSubmit = async (data: CommentType) => {
        if (store?.user) {
            const commentData = {
                ...data,
                isFromUser: true,
                postId,
                ...store.user,
            };

            setShowLoading(true);
            await sendComment(commentData);
            setShowLoading(false);
            setShowWriteComment(false);
        }
    };

    return (
        <div className="flex w-full flex-col">
            {displayComments &&
                postComments?.length &&
                postComments.map(({ body, name, id }) => {
                    return (
                        <div
                            className="flex flex-col ml-4 mt-1"
                            key={`post_comment_${id}`}
                        >
                            <div className="flex">
                                <CircularAvatar />
                                <h1 className="ml-1">{name}</h1>
                            </div>
                            <p>{body}</p>
                            <Ruler />
                        </div>
                    );
                })}
            <>
                {showLoading ? (
                    <Spinner size="2xl" />
                ) : (
                    showWriteComment && (
                        <div className="flex flex-col ml-4 mt-1">
                            <MessageForm
                                formId="newComment"
                                onSubmit={onSubmit}
                            />
                            <ActionButtons
                                buttonConfirmProps={{
                                    form: 'newComment',
                                }}
                                buttonCancelProps={{
                                    type: 'button',
                                    onClick: () => setShowWriteComment(false),
                                }}
                            />
                        </div>
                    )
                )}
            </>
            <div className="flex gap-2 mt-4">
                {!!postComments?.length && (
                    <IconButton
                        icon={!displayComments ? faMessage : faChevronUp}
                        buttonAction={() =>
                            setDisplayComments(!displayComments)
                        }
                        text={!displayComments ? postComments?.length : ''}
                        disabled={!postComments?.length}
                    />
                )}
                {!showWriteComment && (
                    <IconButton
                        icon={faPenToSquare}
                        buttonAction={() => {
                            setShowWriteComment(true);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default observer(PostComments);
