import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/hooks/useStore';
import {
    faMessage,
    faTimes,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import IconButton from '../../common/Buttons/IconButton';
import CircularAvatar from './CircularAvatar';
import Ruler from '../../Ruler';

function PostComments({ postId }: { postId: number }) {
    const [displayComments, setDisplayComments] = useState(false);
    const store = useStore();
    const postComments = store?.comments.filter(
        (comnt) => comnt.postId === postId,
    );

    return (
        <div className="flex w-full flex-col">
            {displayComments &&
                postComments?.length &&
                postComments?.map(({ body, name, id }) => {
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
            <div className="flex gap-2 mt-4">
                <IconButton
                    icon={
                        postComments?.length && !displayComments
                            ? faMessage
                            : faTimes
                    }
                    buttonAction={() => setDisplayComments(!displayComments)}
                    text={
                        postComments?.length && !displayComments
                            ? postComments?.length
                            : ''
                    }
                    disabled={!postComments?.length}
                />
                <IconButton
                    icon={faPenToSquare}
                    buttonAction={() => console.log('openModal')}
                />
            </div>
        </div>
    );
}

export default observer(PostComments);
