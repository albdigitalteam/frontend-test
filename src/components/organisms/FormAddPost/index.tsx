import React, { useRef, useCallback } from 'react';

import { FiArrowRight } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../../utils/getValidationErrors';

import { useToast } from '../../../contexts/toast';
import { usePosts } from '../../../contexts/posts';

import Input from '../Input';
import Button from '../../atoms/Button';
import * as S from './styles';
import Title from '../../atoms/Title';
import Select from '../../molecules/Select';
import { IUsers } from '../../../sharedTypes';

type FormAddPostData = {
  title: string;
  imagePath: string;
  author: string;
  description: string;
};

type FormAddPostProps = {
  authors: IUsers;
  closeModal(): void;
  idToUpdatePost?: number | undefined;
};

const FormAddPost: React.FC<FormAddPostProps> = ({
  authors,
  closeModal,
  idToUpdatePost,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { addPost, selectedPost, updatePost } = usePosts();

  const handleSubmit = useCallback(
    async (data: FormAddPostData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          title: Yup.string().required('Título obrigatório'),
          imagePath: Yup.string().required('Url da imagem obrigatória'),
          author: Yup.string().test(
            'len',
            'Autor obrigatório',
            (val) => val !== '0',
          ),

          description: Yup.string().required('Descrição obrigatória'),
        });
        await schema.validate(data, { abortEarly: false });

        if (!selectedPost) {
          addPost({
            body: data.description,
            id: Math.random(),
            title: data.title,
            userId: Number(data.author),
            image_url: data.imagePath,
          });
          addToast({
            type: 'success',
            title: 'Sucesso!',
            description: 'Post cadastrado com sucesso! :)',
          });
        } else {
          updatePost({
            body: data.description,
            id: selectedPost,
            title: data.title,
            image_url: data.imagePath,
            userId: Number(data.author),
          });
          addToast({
            type: 'success',
            title: 'Sucesso!',
            description: 'Post atualizado com sucesso! :)',
          });
        }

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
    [addToast, selectedPost],
  );

  return (
    <S.Container>
      <S.Content>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%' }}>
          <S.TitleWrapper>
            <Title highlight>Novo Post</Title>
          </S.TitleWrapper>
          <Input icon={FiArrowRight} name="title" placeholder="Titulo" />
          <Input
            icon={FiArrowRight}
            name="imagePath"
            placeholder="Url da imagem"
          />

          <Input
            icon={FiArrowRight}
            name="description"
            placeholder="Descricao"
          />

          <Select name="author" icon={FiArrowRight}>
            <option key={Math.random()} value={0}>
              Selecione um autor
            </option>
            {authors.length > 0 &&
              authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
          </Select>

          <S.ButtonWrapper>
            <Button type="submit">Cadastar</Button>
          </S.ButtonWrapper>
        </Form>
      </S.Content>
    </S.Container>
  );
};

export default FormAddPost;
