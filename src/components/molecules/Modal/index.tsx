import React, { useCallback, useRef } from 'react';
import * as S from './styles';
import useOutsideClick from '@rooks/use-outside-click';
import { IUsers } from '../../../sharedTypes';
import FormAddPost from '../../organisms/FormAddPost';
import FormAddComment from '../../organisms/FormAddComment';

export enum FormTypeEnum {
  ADD_POST = 'ADD_POST',
  ADD_COMMENT = 'ADD_COMMENT',
}

type ModalProps = {
  closeModal: () => void;
  formType: FormTypeEnum;
  authors: IUsers;
};

const Modal: React.FC<ModalProps> = ({ closeModal, authors, formType }) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useOutsideClick(modalRef, () => {
    closeModal();
  });

  type RenderFormData = {
    typeForm: FormTypeEnum;
    authors: IUsers;
  };

  const renderForm = useCallback(({ typeForm, authors }: RenderFormData) => {
    switch (typeForm) {
      case 'ADD_POST':
        return <FormAddPost closeModal={closeModal} authors={authors} />;

      case 'ADD_COMMENT':
        return <FormAddComment closeModal={closeModal} authors={authors} />;
      default:
        return <FormAddPost closeModal={closeModal} authors={authors} />;
    }
  }, []);

  return (
    <S.ModalContainer data-testid="Modal">
      <S.ModalWrapper ref={modalRef}>
        <S.CloseBtn type="button" onClick={closeModal}>
          ✕
        </S.CloseBtn>
        {renderForm({ typeForm: formType, authors })}
      </S.ModalWrapper>
    </S.ModalContainer>
  );
};

export default Modal;
