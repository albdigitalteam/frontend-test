import { useState } from 'react';
import type { User } from '../types/User';


interface CreatePostFormProps {
  users: User[];
  onCreatePost: (title: string, body: string, userId: number) => void;
  disabled?: boolean;
}


export function CreatePostForm({ users, onCreatePost, disabled }: CreatePostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState<number>(users[0]?.id ?? 1);

function handleSubmit(event: React.FormEvent) {
  event.preventDefault();

  if (!title || !body) return;

  onCreatePost(title, body, userId);

  setTitle('');
  setBody('');
}

  return (
     <form onSubmit={handleSubmit}>
      <h2>Criar novo post</h2>

      <div>
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          disabled={disabled}
        />
        </div>

        <div>
        <label>Descrição</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          disabled={disabled}
        />

      </div>
      <div>
      <label>Autor</label>
      <select
        value={userId}
        onChange={e => setUserId(Number(e.target.value))}
        disabled={disabled}
      >
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      </div>


      <button type="submit" disabled={disabled}> Publicar </button>
    </form>
  );
}

