import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RiArrowLeftSLine} from 'react-icons/ri';
import {FiPower} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {IHeader} from './header.interface';

import {useAuth} from '../../hooks/auth';

import {Container, Content, TitleContainer} from './styles.style';

const Header: React.FC<IHeader> = ({title}) => {
  const navigate = useNavigate();
  const {signOut} = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt='Logo' />

        <TitleContainer>
          <button onClick={handleGoBack}>
            <RiArrowLeftSLine
              size={30}
              color='#ffffff'
            />
          </button>
          <h1>{title}</h1>
        </TitleContainer>

        <button type='button' onClick={handleSignOut}>
          <FiPower size={24} color='#F4EDE8' />
        </button>
      </Content>
    </Container>
  );
};

export default Header;
