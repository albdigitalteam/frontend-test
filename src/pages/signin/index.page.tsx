import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import logo from '../../assets/logo.jpeg';

import {
  Container,
  Content,
  EmailInput,
  SigninButton,
} from './styles.style';

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = useCallback(() => {
    navigate('/feed');
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
        <EmailInput type='text' />
        <SigninButton onClick={handleSignIn}>Entrar</SigninButton>
      </Content>
    </Container>
  );
};

export default SignIn;
