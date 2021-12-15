import React, {useCallback, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaRegComments} from 'react-icons/fa';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {IPostPage, IPost} from '../../models/post.model';

import Comment from '../../components/comment/index.component';

import {useToast} from '../../hooks/toast.hook';

import noPhotoImage from '../../assets/no-data.svg';

import {
  Container,
  Header,
  Body,
  ImageContainer,
  ContentContainer,
  Footer,
  ButtonsContainer,
  CommentsFeed,
  NewCommentContainer,
  CommentTextarea,
  CommentButton,
} from './styles.style';

const Post: React.FC<IPostPage> = ({
  id,
  title,
  description,
  photoUrl,
  user,
  comments,
  showComments,
  handleSaveComment,
}) => {
  const navigate = useNavigate();
  const {addToast} = useToast();

  const [newComment, setNewComment] = useState<string>('');

  const postPhoto = useMemo(() => {
    return photoUrl ? photoUrl : noPhotoImage;
  }, []);

  const handleSubmitNewComment = useCallback(() => {
    const newCommentFormatted = newComment.trim();

    if (!newCommentFormatted) {
      addToast({
        type: 'error',
        title: 'Digite um comentário',
      });
      return;
    }

    if (handleSaveComment) {
      handleSaveComment(newComment);
      setNewComment('');
    }
  }, [handleSaveComment, addToast, setNewComment, newComment]);

  const handleToComments = useCallback(({id, title, description}: Omit<IPost, 'comments'>) => {
    navigate(`/posts/${id}`, {
      state: {
        id,
        title,
        description,
        user,
      },
    });
  }, [navigate]);

  return (
    <Container>
      <Header>
        <LazyLoadImage
          src={user?.avatar.url}
          alt='Foto icone perfil'
          effect='blur'
        />
        <div>
          <h3>{user?.name}</h3>
        </div>

      </Header>
      <Body>
        <ImageContainer>
          <a href={postPhoto} target='_blank' rel="noreferrer">
            <LazyLoadImage src={postPhoto} alt="Imagem do post" effect='blur' />
          </a>
        </ImageContainer>

        <ContentContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </ContentContainer>
      </Body>

      <Footer>
        {!showComments && (
          <ButtonsContainer>
            <button onClick={() => handleToComments({
              id, title, description,
            })}>
              <FaRegComments size={24} color='#ffffff' />
              <p>Comentários</p>
            </button>
          </ButtonsContainer>
        )}

        {showComments && !!comments && (
          <CommentsFeed>
            {comments.map((comment) => {
              return (
                <Comment
                  id={comment.id}
                  key={comment.id}
                  description={comment.description}
                  user={comment.user}
                />
              );
            })}

            <NewCommentContainer>
              <CommentTextarea
                placeholder='Digite um comentário...'
                onChange={(input) => setNewComment(input.target.value)}
                value={newComment}
              />
              <CommentButton
                type='button'
                onClick={handleSubmitNewComment}
              >Comentar</CommentButton>
            </NewCommentContainer>
          </CommentsFeed>
        )}
      </Footer>
    </Container>
  );
};

export default Post;
