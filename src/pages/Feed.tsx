import Post from '../components/Post/Post';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/hooks/useStore';

function Feed() {
    const store = useStore();

    return (
        <>
            {store && store.posts ? (
                store.posts.map(({ body, userId, id, title }) => {
                    return (
                        <Post
                            body={body}
                            userId={userId}
                            id={id}
                            title={title}
                            key={id}
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
