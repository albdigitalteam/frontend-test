import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { IComment, IComments } from '../sharedTypes';

type PostsContextData = {
  comments: IComments;
  getComments(): Promise<void>;
  addComment(comment: IComment): void;
};

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

const CommentsProvider: React.FC = ({ children }) => {
  const [comments, setComments] = useState<IComments>([]);

  const getComments = useCallback(async () => {
    const res = await api.get('/comments');
    if (res.data) {
      setComments(res.data);
    }
  }, []);

  const addComment = useCallback(
    (comment: IComment) => {
      setComments([comment, ...comments]);
    },
    [comments],
  );

  useEffect(() => {
    getComments();
  }, []);

  return (
    <PostsContext.Provider value={{ getComments, comments, addComment }}>
      {children}
    </PostsContext.Provider>
  );
};

function useComments(): PostsContextData {
  const context = useContext(PostsContext);

  return context;
}

export { CommentsProvider, useComments };
