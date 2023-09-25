import { useEffect } from 'react';
import Post from '../components/Post/Post';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/hooks/useStore';

function Feed() {
    const store = useStore();

    return (
        <>
            {store && store.posts ? (
                store.posts.map((postData) => {
                    return (
                        <Post
                            body={postData.body}
                            name="{postData.userId}"
                            title={postData.title}
                            key={postData.id}
                        />
                    );
                })
            ) : (
                <>No posts yet</>
            )}
        </>
    );
}

export default observer(Feed);
