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
    <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
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

          <button onClick={onEdit}>Editar</button>
          <button onClick={onDelete}>Excluir</button>

          <p>{body}</p>
          <small>Autor: {author}</small>
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
