import React, { useRef, useCallback } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';

import { useToast } from '../../../contexts/toast';
import { usePosts } from '../../../contexts/posts';
import { useComments } from '../../../contexts/comments';

import Input from '../Input';
import Button from '../../atoms/Button';

import * as S from './styles';
import Title from '../../atoms/Title';
import Select from '../../molecules/Select';
import { IUsers } from '../../../sharedTypes';

type FormAddCommentData = {
  name: string;
  author: string;
  description: string;
};

type FormAddPostProps = {
  authors: IUsers;
  closeModal(): void;
};
const FormAddPost: React.FC<FormAddPostProps> = ({ authors, closeModal }) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { selectedPost } = usePosts();
  const { addComment } = useComments();

  const handleSubmit = useCallback(
    async (data: FormAddCommentData) => {
      console.log({ data });
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Título do comentário obrigatório'),
          description: Yup.string().required('Comentario obrigatório'),
          author: Yup.string().test(
            'len',
            'Autor obrigatório',
            (val) => val !== '0',
          ),
        });
        await schema.validate(data, { abortEarly: false });

        addComment({
          body: data.description,
          email: data.author,
          id: Math.random(),
          name: data.name,
          postId: Number(selectedPost),
        });

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Comentario adicionado com sucesso! :)',
        });

        closeModal();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description:
              'Você precisa preencher todos os campos para poder cadastrar',
          });

          return;
        }
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao cadastrar, confira suas informacoes',
        });
      }
    },
    [addToast],
  );

  return (
    <S.Container>
      <S.Content>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <S.TitleWrapper>
            <Title highlight>Novo comentário</Title>
          </S.TitleWrapper>
          <Input icon={FiArrowRight} name="name" placeholder="Titulo" />

          <Select name="author" icon={FiArrowRight}>
            <option value={0}>Selecione um autor</option>
            {authors.length > 0 &&
              authors.map((author) => (
                <option key={author.id} value={author.email}>
                  {author.name}
                </option>
              ))}
          </Select>

          <Input
            icon={FiArrowRight}
            name="description"
            placeholder="Descricao"
          />

          <S.ButtonWrapper>
            <Button type="submit">Cadastar</Button>
          </S.ButtonWrapper>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default FormAddPost;
