import type { Comment } from '../types/Comment';

interface PostCardProps {
  title: string;
  body: string;
  author: string;
  comments: Comment[];
  isOpen: boolean;
  isEditing: boolean;

  editTitle: string;
  editBody: string;

  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onSave: (title: string, body: string) => void;
  onCancel: () => void;
  onChangeTitle: (value: string) => void;
  onChangeBody: (value: string) => void;
}

export function PostCard({
  title,
  body,
  author,
  comments,
  isOpen,
  isEditing,
  editTitle,
  editBody,
  onToggle,
  onDelete,
  onEdit,
  onSave,
  onCancel,
  onChangeTitle,
  onChangeBody
}: PostCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#2a2a2a',
        color: '#f1f1f1',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}
    >

      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={e => onChangeTitle(e.target.value)}
          />

          <textarea
            value={editBody}
            onChange={e => onChangeBody(e.target.value)}
          />

          <button onClick={() => onSave(editTitle, editBody)}>Salvar</button>
          <button onClick={onCancel}>Cancelar</button>
        </>
      ) : (
        <>
          <h2>{title}</h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <button onClick={onEdit}>Editar</button>
              <button onClick={onDelete} style={{ color: 'red' }}>
                Excluir
              </button>
            </div>

          <p>{body}</p>
          <small style={{ color: '#666' }}>  Autor: {author} </small>

        </>
      )}

      <br />

      <button onClick={onToggle}>
        {isOpen ? 'Ocultar comentários' : 'Mostrar comentários'}
      </button>

      {isOpen &&
        comments.map(comment => (
          <div key={comment.id}>
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  );
}
