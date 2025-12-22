import type { Comment } from '../types/Comment';

interface PostCardProps {
  title: string;
  body: string;
  author: string;
  comments: Comment[];
  isOpen: boolean;
  isEditing: boolean;
  imageUrl?: string;

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
  imageUrl,
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
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        color: '#f1f1f1',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          style={{
            width: '100%',
            maxHeight: '280px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '12px'
          }}
        />
      )}
      
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={e => onChangeTitle(e.target.value)}
            style={{
              width: '100%',
              marginBottom: '12px',
              padding: '8px',
              borderRadius: '6px'
            }}
          />

          <textarea
            value={editBody}
            onChange={e => onChangeBody(e.target.value)}
            style={{
              width: '100%',
              minHeight: '100px',
              marginBottom: '12px',
              padding: '8px',
              borderRadius: '6px'
            }}
          />

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => onSave(editTitle, editBody)}>Salvar</button>
            <button onClick={onCancel}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>
            {title}
          </h2>

          {/* ✅ DIV DOS BOTÕES FECHADA CORRETAMENTE */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '12px'
            }}
          >
            <button
              onClick={onEdit}
              style={{
                backgroundColor: '#3a3a3a',
                color: '#fff',
                border: '1px solid #444'
              }}
            >
              Editar
            </button>

            <button
              onClick={onDelete}
              style={{
                backgroundColor: '#a33',
                color: '#fff',
                border: 'none'
              }}
            >
              Excluir
            </button>
          </div>

          <p style={{ lineHeight: 1.6, marginBottom: '12px' }}>
            {body}
          </p>

          <small style={{ opacity: 0.7 }}>
            Autor: {author}
          </small>
        </>
      )}

      <div style={{ marginTop: '16px' }}>
        <button onClick={onToggle}>
          {isOpen ? 'Ocultar comentários' : 'Mostrar comentários'}
        </button>
      </div>

      {isOpen && (
        <div style={{ marginTop: '12px' }}>
          {comments.map(comment => (
            <div
              key={comment.id}
              style={{
                backgroundColor: '#1f1f1f',
                padding: '8px',
                borderRadius: '6px',
                marginBottom: '8px'
              }}
            >
              <strong>{comment.name}</strong>
              <p style={{ margin: '4px 0 0 0' }}>
                {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
