import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../images/air-liquide.svg';
import IconButton from './common/Buttons/IconButton';
import { useState } from 'react';
import Modal from './common/Modal/Modal';
import MessageForm from './MessageForm';
import { usePostData } from '../api/hooks/usePostData';
import { PostType } from '../types';
import { useStore } from '../stores/hooks/useStore';

function Header() {
    const [open, setOpen] = useState(false);
    const store = useStore();

    const onSubmit = (data: Exclude<PostType, 'id' | 'userId'>) => {
        const { isLoading: isPosting, data: responseData } =
            usePostData<PostType>({
                url: '/posts',
                data,
                keys: ['posts'],
                setToStore: store?.addPost,
            });

        console.log(isPosting, responseData);
    };

    return (
        <div className="fixed top-0 w-full z-10 shadow-lg bg-white px-4 py-2">
            <div className="flex justify-between text-2xl">
                <Logo />
                <IconButton
                    icon={faPenToSquare}
                    buttonAction={() => {
                        setOpen(true);
                    }}
                />
                <Modal
                    open={open}
                    setOpen={setOpen}
                    title="New post"
                    buttonForm="newMessage"
                    content={
                        <MessageForm
                            formId="newMessage"
                            isNewPost
                            onSubmit={onSubmit}
                        />
                    }
                />
            </div>
        </div>
    );
}

export default Header;
