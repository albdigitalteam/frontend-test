import { useEffect, useState } from 'react';
import { getPosts, getUsers, getComments } from '../services/api';
import type { Post } from '../types/Post';
import type { User } from '../types/User';
import type { Comment } from '../types/Comment';
import { PostCard } from '../components/PostCard';

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [openPostId, setOpenPostId] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      const [postsData, usersData, commentsData] = await Promise.all([
        getPosts(),
        getUsers(),
        getComments()
      ]);

      setPosts(postsData);
      setUsers(usersData);
      setComments(commentsData);
    }

    loadData();
  }, []);

  function getAuthorName(userId: number) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Autor desconhecido';
  }

  function toggleComments(postId: number) {
    setOpenPostId(prev =>
      prev === postId ? null : postId
    );
  }

  function getPostComments(postId: number) {
    return comments.filter(comment => comment.postId === postId);
  }

  return (
    <div>
      <h1>Blog</h1>

      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          author={getAuthorName(post.userId)}
          comments={getPostComments(post.id)}
          isOpen={openPostId === post.id}
          onToggle={() => toggleComments(post.id)}
        />
      ))}
    </div>
  );
}
