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
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    className="inline-flex w-full justify-center rounded-md bg-secondary px-3 
                                    py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                                    form="newComment"
                                >
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 inline-flex w-full justify-center rounded-md 
                                    bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm 
                                    ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={() => setShowWriteComment(false)}
                                >
                                    Cancel
                                </button>
                            </div>
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
