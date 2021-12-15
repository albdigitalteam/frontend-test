import React, {useCallback, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaRegComments} from 'react-icons/fa';

import {IPostPage, IPost} from '../../models/post.model';
import Comment from '../../components/comment/index.component';

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

  const [newComment, setNewComment] = useState<string>('');

  const postPhoto = useMemo(() => {
    return photoUrl ? photoUrl : noPhotoImage;
  }, []);

  const handleToComments = useCallback(({id, title, description}: Omit<IPost, 'comments'>) => {
    navigate(`/posts/${id}`, {
      state: {
        id,
        title,
        description,
      },
    });
  }, [navigate]);

  return (
    <Container>
      <Header>
        <img
          src='https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258854853_4697875306922352_8420990843923849622_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sPgW1bQXhfUAX__znKq&_nc_ht=scontent.fcgh10-1.fna&oh=00_AT-P50UHEnjcLGF3NUFtsNYRGFNJ7fPAT1XuZJR8ypWMMQ&oe=61B91BAD'
          alt='Foto icone'
        />
        <div>
          <h3>{user?.name}</h3>
        </div>

      </Header>
      <Body>
        <ImageContainer>
          <a href={postPhoto} target='_blank' rel="noreferrer">
            <img src={postPhoto} alt="Imagem do post" />
          </a>
        </ImageContainer>

        <ContentContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </ContentContainer>
      </Body>

      <Footer>
        <ButtonsContainer>
          <button onClick={() => handleToComments({
            id, title, description,
          })}>
            <FaRegComments size={24} color='#ffffff' />
            <p>Comentários</p>
          </button>
        </ButtonsContainer>

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
              />
              <CommentButton
                type='button'
                onClick={() => handleSaveComment && handleSaveComment(newComment)}
              >Comentar</CommentButton>
            </NewCommentContainer>
          </CommentsFeed>
        )}
      </Footer>
    </Container>
  );
};

export default Post;
