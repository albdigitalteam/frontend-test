import React, {useCallback, useState, useRef, ChangeEvent} from 'react';
import * as Yup from 'yup';

import Modal from '../../../components/modal/index.component';
import Input from '../../../components/input/index.component';
import Textarea from '../../../components/textarea/index.component';
import Button from '../../../components/button/index.component';

import {IModalCreateNewPost} from '../../../components/modal/modal.interface';
import {INewPostFormData} from './modal-new-post.interface';

import getValidationErrors from '../../../utils/getValidationErrors';

import uploadPhoto from '../../../assets/upload.svg';

import {
  Title,
  Container,
  PhotoContainer,
  PhotoPreview,
  ButtonUploadPreview,
} from './styles.style';

const ModalNewPost: React.FC<IModalCreateNewPost> = ({
  isOpen,
  setIsOpen,
  style,
  handleSavePost,
}) => {
  const formInitialState = {
    photoUrl: {
      value: '',
    },
    title: {
      value: '',
      error: '',
    },
    description: {
      value: '',
      error: '',
    },
  };

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [photoPreview, setPhotoPreview] = useState<string>(uploadPhoto);
  const [formData, setFormData] = useState<INewPostFormData>(formInitialState);

  const handleSelectPhoto = useCallback(() => {
    inputFileRef.current?.click();
  }, [inputFileRef]);

  const handleChangePhoto = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const previewURL = URL.createObjectURL(event.target.files[0]);

    setFormData({...formData, photoUrl: {value: previewURL}});
    setPhotoPreview(previewURL);
  }, [inputFileRef, setFormData, formData, setPhotoPreview]);

  const handlePreSaveNewPost = useCallback(async (dataToValidade: INewPostFormData): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título obrigatório'),
        description: Yup.string().required('Descrição obrigatório'),
      });

      const dataToValidateFormatted = {
        photoUrl: dataToValidade.photoUrl?.value,
        title: dataToValidade.title.value,
        description: dataToValidade.description.value,
      };

      await schema.validate(dataToValidateFormatted, {
        abortEarly: false,
      });

      handleSavePost({...dataToValidateFormatted});

      setFormData(formInitialState);
      setPhotoPreview(uploadPhoto);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        setFormData({
          ...formData,
          title: {
            value: dataToValidade.title.value,
            error: errors['title'],
          },
          description: {
            value: dataToValidade.description.value,
            error: errors['description'],
          },
        });
      }
    }
  }, [handleSavePost, setPhotoPreview, formData]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} style={style}>
      <Title>Criar novo post</Title>

      <Container>
        <PhotoContainer>
          <input
            type='file'
            id='photo'
            accept="image/png, image/jpeg, image/jpg"
            ref={inputFileRef}
            onChange={handleChangePhoto}
          />

          <PhotoPreview
            src={photoPreview}
            alt="Imagem de preview do post"
            onClick={handleSelectPhoto}
          />
          <ButtonUploadPreview
            type='button'
            onClick={handleSelectPhoto}
          >Upload de imagem</ButtonUploadPreview>
        </PhotoContainer>

        <Input
          placeholder='Título'
          onChange={(input) => setFormData({...formData, title: {value: input.target.value}})}
          error={formData.title.error}
        />
        <Textarea
          placeholder='Descrição'
          rows={12}
          onChange={(input) => setFormData({...formData, description: {value: input.target.value}})}
          error={formData.description.error}
        />

        <Button onClick={() => handlePreSaveNewPost(formData)}>Postar</Button>
      </Container>
    </Modal>
  );
};

export default ModalNewPost;
