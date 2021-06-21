import React, { memo, useCallback, useState } from 'react';
import Title from '../../atoms/Title';
import Subtitle from '../../atoms/Subtitle';
import Image from '../../atoms/Image';

import * as S from './styles';
import Description from '../../atoms/Description';
import { IComments, IUsers } from '../../../sharedTypes';
import CardComment from '../CardComment';
import Modal, { FormTypeEnum } from '../../molecules/Modal';

type CardPostProps = {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  comments: IComments;
  authors?: IUsers;
  removePost(postId: number): void;
  selectPost(postId: number): void;
};

const CardPost: React.FC<CardPostProps> = ({
  id: postId,
  title,
  author,
  image,
  description,
  comments,
  authors,
  removePost,
  selectPost,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddComment = useCallback(
    (idPost: number) => {
      setModalIsOpen(!modalIsOpen);
      selectPost(idPost);
    },
    [modalIsOpen],
  );

  const handleRemovePost = useCallback(
    (postId) => {
      removePost(postId);
    },
    [removePost],
  );

  return (
    <>
      {modalIsOpen && (
        <Modal
          closeModal={() => setModalIsOpen(!modalIsOpen)}
          authors={authors || []}
          data-testid="videoModal"
          formType={FormTypeEnum.ADD_COMMENT}
        />
      )}

      <S.Container>
        <S.CardHeader>
          <div>
            <Title highlight>{title}</Title>
            <Subtitle>{author}</Subtitle>
          </div>
          <S.RemovePostWrapper>
            <S.RemovePostBtn onClick={() => handleRemovePost(postId)}>
              Remover post
            </S.RemovePostBtn>
          </S.RemovePostWrapper>
        </S.CardHeader>
        <Image
          errorImg="https://ganheonline.dotz.com.br/wp-content/uploads/2020/11/empty.jpg"
          placeholderImg="https://via.placeholder.com/750x225.png?text=Aguarde+enquanto+a+imagem+esta+sendo+carregada"
          src={image}
        />
        <S.CardFooter>
          <Description>{description}</Description>
          <S.CommentsBTN
            onClick={() => setShowComments(!showComments)}
          >{`${comments.length} comentários`}</S.CommentsBTN>
        </S.CardFooter>

        {showComments && (
          <S.CommentsWrapper>
            <S.NewCommentBTN onClick={() => handleAddComment(postId)}>
              Adicionar comentário
            </S.NewCommentBTN>

            {comments.length > 0 ? (
              comments.map((comment) => (
                <CardComment
                  key={comment.id}
                  name={comment.name}
                  email={comment.email}
                  body={comment.body}
                />
              ))
            ) : (
              <S.EmptyComments>Não há comentários</S.EmptyComments>
            )}
          </S.CommentsWrapper>
        )}
      </S.Container>
    </>
  );
};

export default memo(CardPost);
