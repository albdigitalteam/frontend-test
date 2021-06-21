import React, { useCallback, useState } from 'react';
import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';
import { Container } from '../../../styles/gridSystem';
import Modal, { FormTypeEnum } from '../../molecules/Modal';
import { IUsers } from '../../../sharedTypes';
import * as S from './styles';

type HeaderProps = {
  authors: IUsers;
};

const Header: React.FC<HeaderProps> = ({ authors }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  return (
    <>
      {modalIsOpen && (
        <Modal
          closeModal={() => setModalIsOpen(!modalIsOpen)}
          authors={authors}
          data-testid="videoModal"
          formType={FormTypeEnum.ADD_POST}
        />
      )}
      <S.Container>
        <Container>
          <S.Content>
            <S.LogoWrapper>
              <Logo />
            </S.LogoWrapper>
            <Button onClick={openModal} style={{ backgroundColor: '#375f9b' }}>
              Novo Post
            </Button>
          </S.Content>
        </Container>
      </S.Container>
    </>
  );
};

export default Header;
