import { useEffect, useState } from 'react';
import { getPosts, getUsers, getComments } from '../services/api';
import type { Post } from '../types/Post';
import type { User } from '../types/User';
import type { Comment } from '../types/Comment';
import { PostCard } from '../components/PostCard';
import { CreatePostForm } from '../components/CreatePostForm';

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [openPostId, setOpenPostId] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [search, setSearch] = useState('');

  // 🔹 LOAD INICIAL
  useEffect(() => {
    async function loadData() {
      const storedPosts = localStorage.getItem('posts');
      const storedComments = localStorage.getItem('comments');

      // USERS → sempre da API
      const usersData = await getUsers();
      setUsers(usersData);

      // COMMENTS → localStorage tem prioridade
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      } else {
        const commentsData = await getComments();
        setComments(commentsData);
        localStorage.setItem('comments', JSON.stringify(commentsData));
      }

      // POSTS → localStorage tem prioridade
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      } else {
        const postsData = await getPosts();
        setPosts(postsData);
        localStorage.setItem('posts', JSON.stringify(postsData));
      }

      setLoaded(true);
    }

    loadData();
  }, []);

  // 🔹 PERSIST POSTS
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts, loaded]);

  // 🔹 PERSIST COMMENTS
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments, loaded]);

  function getAuthorName(userId: number) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Autor desconhecido';
  }

  function toggleComments(postId: number) {
    setOpenPostId(prev => (prev === postId ? null : postId));
  }

  function getPostComments(postId: number) {
    return comments.filter(comment => comment.postId === postId);
  }

  function handleCreatePost(
    title: string,
    body: string,
    userId: number,
    imageUrl?: string
  ) {
    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      userId,
      imageUrl
    };

    setPosts(prev => [newPost, ...prev]);
  }

  function handleDeletePost(postId: number) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este post?'
    );
    if (!confirmed) return;

    setPosts(prev => prev.filter(post => post.id !== postId));
    setComments(prev => prev.filter(comment => comment.postId !== postId));
  }

  function handleEditPost(post: Post) {
    setEditingPostId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  }

  function handleCancelEdit() {
    setEditingPostId(null);
    setEditTitle('');
    setEditBody('');
  }

  function handleSavePost(
    postId: number,
    updatedTitle: string,
    updatedBody: string
  ) {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? { ...post, title: updatedTitle, body: updatedBody }
          : post
      )
    );

    handleCancelEdit();
  }

  function handleAddComment(postId: number, name: string, body: string) {
    const newComment: Comment = {
      id: Date.now(),
      postId,
      name,
      body
    };

    setComments(prev => [newComment, ...prev]);
  }

  function handleDeleteComment(commentId: number) {
    setComments(prev => prev.filter(comment => comment.id !== commentId));
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1e1e1e',
        padding: '32px 16px'
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Blog</h1>

        <input
          type="text"
          placeholder="🔍 Buscar post pelo título..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            marginBottom: '40px',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #333',
            color: '#fff'
          }}
        />

        {!loaded && <p>Carregando posts...</p>}

        {loaded && posts.length === 0 && (
          <p>Nenhum post cadastrado ainda.</p>
        )}

        {loaded && posts.length > 0 && filteredPosts.length === 0 && (
          <p>Nenhum post encontrado para essa busca.</p>
        )}

        <CreatePostForm
          users={users}
          onCreatePost={handleCreatePost}
          disabled={!loaded}
        />

        {loaded &&
          filteredPosts.map(post => (
            <PostCard
              key={post.id}
              postId={post.id}
              title={post.title}
              body={post.body}
              author={getAuthorName(post.userId)}
              imageUrl={post.imageUrl}
              comments={getPostComments(post.id)}
              isOpen={openPostId === post.id}
              isEditing={editingPostId === post.id}
              editTitle={editTitle}
              editBody={editBody}
              onToggle={() => toggleComments(post.id)}
              onDelete={() => handleDeletePost(post.id)}
              onEdit={() => handleEditPost(post)}
              onSave={(title, body) =>
                handleSavePost(post.id, title, body)
              }
              onCancel={handleCancelEdit}
              onChangeTitle={setEditTitle}
              onChangeBody={setEditBody}
              onAddComment={handleAddComment}
              onDeleteComment={handleDeleteComment}
            />
          ))}
      </div>
    </div>
  );
}
