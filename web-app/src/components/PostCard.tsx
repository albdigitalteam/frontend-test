import { useState } from 'react';
import type { Comment } from '../types/Comment';

interface PostCardProps {
  postId: number;
  title: string;
  body: string;
  author: string;
  imageUrl?: string;
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

  onAddComment: (postId: number, name: string, body: string) => void;
  onDeleteComment: (commentId: number) => void;
}

export function PostCard({
  postId,
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
  onChangeBody,
  onAddComment,
  onDeleteComment
}: PostCardProps) {
  const [commentName, setCommentName] = useState('');
  const [commentBody, setCommentBody] = useState('');

  function handleAddComment() {
    if (!commentName || !commentBody) return;

    onAddComment(postId, commentName, commentBody);

    setCommentName('');
    setCommentBody('');
  }

  return (
    <div
      style={{
        backgroundColor: '#2a2a2a',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '24px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        color: '#f1f1f1'
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
            style={{ width: '100%', marginBottom: '12px', padding: '8px' }}
          />

          <textarea
            value={editBody}
            onChange={e => onChangeBody(e.target.value)}
            style={{ width: '100%', minHeight: '100px', marginBottom: '12px', padding: '8px' }}
          />

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => onSave(editTitle, editBody)}>Salvar</button>
            <button onClick={onCancel}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ marginBottom: '8px' }}>{title}</h2>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete} style={{ color: '#ff5c5c' }}>
              Excluir
            </button>
          </div>

          <p>{body}</p>
          <small style={{ opacity: 0.7 }}>Autor: {author}</small>
        </>
      )}

      <div style={{ marginTop: '16px' }}>
        <button onClick={onToggle}>
          {isOpen ? 'Ocultar comentários' : 'Mostrar comentários'}
        </button>
      </div>

      {isOpen && (
        <div style={{ marginTop: '16px' }}>
          {/* FORM DE COMENTÁRIO */}
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="Seu nome"
              value={commentName}
              onChange={e => setCommentName(e.target.value)}
              style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
            />

            <textarea
              placeholder="Escreva um comentário..."
              value={commentBody}
              onChange={e => setCommentBody(e.target.value)}
              style={{ width: '100%', minHeight: '80px', marginBottom: '8px', padding: '8px' }}
            />

            <button onClick={handleAddComment}>Comentar</button>
          </div>

          {/* LISTA DE COMENTÁRIOS */}
          {comments.length === 0 && (
            <p style={{ color: '#888' }}>Nenhum comentário ainda.</p>
          )}

          {comments.map(comment => (
            <div
              key={comment.id}
              style={{
                backgroundColor: '#1f1f1f',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '8px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <strong>{comment.name}</strong>
                <p style={{ margin: '4px 0' }}>{comment.body}</p>
              </div>

              <button
                onClick={() => onDeleteComment(comment.id)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ff5c5c',
                  cursor: 'pointer'
                }}
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
