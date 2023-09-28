import Layout from './components/Layout';
import Feed from './pages/Feed';
import { useGetData } from './api/hooks/useGetData';
import { useStore } from './stores/hooks/useStore';
import { CommentType, PostType, UserType } from './types';
import Spinner from './components/common/Spinner';

function App() {
    // Fetch all the data and send it to the store
    const store = useStore();
    const { isLoading: isPostsLoading } = useGetData<PostType[]>({
        url: '/posts',
        keys: ['posts'],
        setToStore: store?.setPosts,
    });
    const { isLoading: isUsersLoading } = useGetData<UserType[]>({
        url: '/users',
        keys: ['users'],
        setToStore: store?.setUsers,
    });
    const { isLoading: isCommentsLoading } = useGetData<CommentType[]>({
        url: '/comments',
        keys: ['comments'],
        setToStore: store?.setComments,
    });

    const isLoading = isPostsLoading || isUsersLoading || isCommentsLoading;

    return (
        <Layout>
            {isLoading ? <Spinner className="mt-6" size="2xl" /> : <Feed />}
        </Layout>
    );
}

export default App;
