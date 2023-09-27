import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../images/air-liquide.svg';
import IconButton from './common/Buttons/IconButton';
import { useState } from 'react';
import Modal from './common/Modal/Modal';
import MessageForm from './MessageForm';
import { usePostData } from '../api/hooks/usePostData';
import { PostType } from '../types';
import { useStore } from '../stores/hooks/useStore';

interface PostTypeSubmit extends PostType {
    name: string;
    username: string;
    email: string;
}

function Header() {
    const [open, setOpen] = useState(false);
    const store = useStore();

    const { mutateAsync: sendPostData } = usePostData<PostTypeSubmit, PostType>(
        {
            url: '/posts',
            setToStore: store?.addPost,
        },
    );

    const onSubmit = async (data: PostTypeSubmit) => {
        if (store?.user) {
            const postData = { ...data, ...store.user };

            await sendPostData(postData);
            setOpen(false);
        }
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
