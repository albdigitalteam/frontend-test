import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { IPost, IPosts } from '../sharedTypes';

type PostsContextData = {
  posts: IPosts;
  getPosts(): Promise<void>;
  addPost(posts: IPost): void;
  selectPost(postId: number): void;
  removePost(postId: number): void;
  updatePost(post: IPost): void;
  selectedPost: number | undefined;
};

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPosts>([]);
  const [selectedPost, setSelectedPost] = useState<number>();

  const getPosts = useCallback(async () => {
    const res = await api.get('/posts');
    if (res.data) {
      setPosts(res.data);
    }
  }, []);

  const addPost = useCallback(
    (post: IPost) => {
      setPosts([post, ...posts]);
    },
    [posts],
  );

  const removePost = useCallback(
    (postId: number) => {
      const newsPosts = posts.filter((post) => post.id !== postId);

      setPosts(newsPosts);
    },
    [posts, setPosts],
  );

  const updatePost = useCallback(
    (post: IPost) => {
      const newPosts = [...posts];
      newPosts[post.id - 1] = post;

      setPosts(newPosts);
    },
    [posts, setPosts],
  );

  const selectPost = useCallback((postId: number) => {
    setSelectedPost(postId);
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider
      value={{
        getPosts,
        posts,
        addPost,
        selectPost,
        selectedPost,
        removePost,
        updatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

function usePosts(): PostsContextData {
  const context = useContext(PostsContext);

  return context;
}

export { PostsProvider, usePosts };
