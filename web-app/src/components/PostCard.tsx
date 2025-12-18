import type { Comment } from '../types/Comment';

interface PostCardProps {
  title: string;
  body: string;
  author: string;
  comments: Comment[];
  isOpen: boolean;
  onToggle: () => void;
  onDelete: () => void;

}

export function PostCard({
  title,
  body,
  author,
  comments,
  isOpen,
  onToggle,
  onDelete
}: PostCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      <button onClick={onDelete}>
        Excluir
      </button>

      <p>{body}</p>
      <small>Autor: {author}</small>

      <br />
      <button onClick={onToggle}>
        {isOpen ? 'Ocultar comentários' : 'Mostrar comentários'}
      </button>

      {isOpen && (
        <div style={{ marginTop: '12px' }}>
          {comments.map(comment => (
            <div key={comment.id} style={{ marginBottom: '8px' }}>
              <strong>{comment.name}</strong>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
