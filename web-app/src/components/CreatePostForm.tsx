import { useState } from 'react';
import type { User } from '../types/User';

interface CreatePostFormProps {
  users: User[];
  onCreatePost: (title: string, body: string, userId: number) => void;
  disabled?: boolean;
}

export function CreatePostForm({
  users,
  onCreatePost,
  disabled
}: CreatePostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState<number | ''>('');

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title || !body || !userId) return;

    onCreatePost(title, body, userId);

    setTitle('');
    setBody('');
    setUserId('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#2a2a2a',
        padding: '24px',
        borderRadius: '12px',
        marginBottom: '40px'
      }}
    >
      <h2 style={{ marginBottom: '16px' }}>Criar novo post</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '12px',
          borderRadius: '6px'
        }}
      />

      <textarea
        placeholder="Conteúdo do post"
        value={body}
        onChange={e => setBody(e.target.value)}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '12px',
          borderRadius: '6px'
        }}
      />

      <select
        value={userId}
        onChange={e => setUserId(Number(e.target.value))}
        disabled={disabled || users.length === 0}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '16px',
          borderRadius: '6px'
        }}
      >
        <option value="">Selecione um autor</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={disabled}
        style={{
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        Criar Post
      </button>
    </form>
  );
}
