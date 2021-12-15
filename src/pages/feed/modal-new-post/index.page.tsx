import React, {useCallback, useState, useRef, ChangeEvent} from 'react';

import Modal from '../../../components/modal/index.component';

import Input from '../../../components/input/index.component';
import Textarea from '../../../components/textarea/index.component';
import Button from '../../../components/button/index.component';

import {IModalCreateNewPost} from '../../../components/modal/modal.interface';

import uploadPhoto from '../../../assets/upload.svg';

import {Title, Container, PhotoContainer, PhotoPreview, ButtonUploadPreview} from './styles.style';

const ModalNewPost: React.FC<IModalCreateNewPost> = ({
  isOpen,
  setIsOpen,
  style,
  handleSavePost,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [photoPreview, setPhotoPreview] = useState<string>(uploadPhoto);

  const [, setPhoto] = useState<File>({} as File);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSelectPhoto = useCallback(() => {
    inputFileRef.current?.click();
  }, [inputFileRef]);

  const handleChangePhoto = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const previewURL = URL.createObjectURL(event.target.files[0]);

    setPhoto(event.target.files[0]);
    setPhotoPreview(previewURL);
  }, [inputFileRef, setPhotoPreview]);

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
          onChange={(input) => setTitle(input.target.value)}
        />
        <Textarea
          placeholder='Descrição'
          rows={12}
          onChange={(input) => setDescription(input.target.value)}
        />

        <Button onClick={() => handleSavePost({photoUrl: photoPreview, title, description})}>Postar</Button>
      </Container>
    </Modal>
  );
};

export default ModalNewPost;
