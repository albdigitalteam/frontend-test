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

useEffect(() => {
  async function loadData() {
    const storedPosts = localStorage.getItem('posts');

    const [usersData, commentsData] = await Promise.all([
      getUsers(),
      getComments()
    ]);

    setUsers(usersData);
    setComments(commentsData);

    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
      setLoaded(true);
      return;
    }

    const postsData = await getPosts();
    setPosts(postsData);
    setLoaded(true);

    localStorage.setItem('posts', JSON.stringify(postsData));
  }

  loadData();
}, []);

useEffect(() => {
  if (loaded) {
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}, [posts, loaded]);


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

  function handleCreatePost(title: string, body: string, userId: number) {
    const newPost: Post = {
      id: Date.now(),
      title,
      body,
      userId
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
}

  function handleDeletePost(postId: number) {
    const confirmed = window.confirm(
    'Tem certeza que deseja excluir este post?'
  );

  if (!confirmed) return;
    setPosts(prevPosts =>
    prevPosts.filter(post => post.id !== postId)
  );
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

  setEditingPostId(null);
  setEditTitle('');
  setEditBody('');
}

const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div>
      <h1>Blog</h1>

      <input
        type="text"
        placeholder="Buscar post pelo título..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          marginBottom: '16px',
          padding: '8px',
          width: '100%'
        }}
      />

      {!loaded && <p>Carregando posts...</p>}
      
      {loaded && posts.length === 0 && (
        <p>Nenhum post cadastrado ainda.</p>
      )}

      {loaded && posts.length > 0 && filteredPosts.length === 0 && (
        <p>Nenhum post encontrado para essa busca.</p>
      )}
    
      <CreatePostForm users={users} onCreatePost={handleCreatePost} disabled={!loaded} />
      
      {loaded && filteredPosts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          author={getAuthorName(post.userId)}
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
        />

      ))}
    </div>
  );
}
