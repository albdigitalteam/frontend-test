import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import svg from '../images/air-liquide.svg';
import IconButton from './common/Buttons/IconButton';
import { useState } from 'react';
import Modal from './common/Modal/Modal';
import MessageForm from './MessageForm';
import { usePostData } from '../api/hooks/usePostData';
import { PostType } from '../types';
import { useStore } from '../stores/hooks/useStore';
import { fileToBase64 } from '../utils/convertToBase64';

interface PostTypeSubmit extends PostType {
    name: string;
    username: string;
    email: string;
}

type DataOnSubmit = {
    title: string;
    body: string;
    image?: FileList;
};

function Header() {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const store = useStore();

    const { mutateAsync: sendPost } = usePostData<PostTypeSubmit, PostType>({
        url: '/posts',
        setToStore: store?.addPost,
    });

    // Send post data to server with the default user data with id given by the API
    const onSubmit = async (data: DataOnSubmit) => {
        if (store?.user) {
            setIsLoading(true);

            let convertedImage = undefined;
            if (data.image && data.image?.length)
                convertedImage = await fileToBase64(data.image[0]);

            const postData = {
                ...data,
                userId: store.user.id,
                image:
                    typeof convertedImage === 'string'
                        ? convertedImage
                        : undefined,
                ...store.user,
            };

            await sendPost(postData);

            setIsLoading(false);
            setOpen(false);
        }
    };

    return (
        <div className="fixed top-0 w-full z-10 shadow-md bg-white px-4 py-2">
            <div className="flex justify-between text-2xl">
                <img src={svg} />
                <IconButton
                    icon={faPenToSquare}
                    buttonAction={() => {
                        setOpen(true);
                    }}
                    data-testid="modal_new_message"
                />
                <Modal
                    open={open}
                    setOpen={setOpen}
                    isLoading={isLoading}
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
