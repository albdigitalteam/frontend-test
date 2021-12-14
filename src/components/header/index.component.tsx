import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RiArrowLeftSLine} from 'react-icons/ri';

import logo from '../../assets/logo.jpeg';

import {IHeader} from './header.interface';

import {Container, Content} from './styles.style';

const Header: React.FC<IHeader> = ({title}) => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt='Logo' />
        <h1>{title}</h1>
        <button onClick={handleGoBack}>
          <RiArrowLeftSLine
            size={30}
            color='#ffffff'
          />
        </button>
      </Content>
    </Container>
  );
};

export default Header;
