import Post from '../components/Post/Post';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/hooks/useStore';
import { toJS } from 'mobx';

function Feed() {
    const store = useStore();
    const posts = toJS(store?.posts);
    return (
        <>
            {store && posts ? (
                posts.map(({ body, userId, id, title }) => {
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
