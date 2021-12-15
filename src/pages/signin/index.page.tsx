import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Input from '../../components/input/index.component';
import Button from '../../components/button/index.component';

import logoImg from '../../assets/logo.svg';

import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';

import {getByEmail} from '../../services/users.service';
import {adaptUser} from '../../adapters/user.adapter';

import {
  Container,
  Content,
  AnimationContainer,
  Logo,
} from './styles.style';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const {addToast} = useToast();
  const {signIn} = useAuth();
  // const { addToast } = useToast();

  const handleSignIn = useCallback(async () => {
    const emailFormatted = email.trim();

    if (!emailFormatted) {
      addToast({
        type: 'error',
        title: 'Email não preenchido',
      });
      return;
    }

    const {data: dataUserAPI} = await getByEmail(email);

    const emailExists = !!dataUserAPI.length;
    if (!emailExists) {
      addToast({
        type: 'error',
        title: 'Email não existente',
      });
      return;
    }

    const userFound = dataUserAPI[0];

    await signIn(
        adaptUser(userFound),
    );

    addToast({
      type: 'success',
      title: 'Login efetuado com sucesso',
    });

    navigate('/feed');
  }, [getByEmail, email]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Logo src={logoImg} alt="Logo do teste FCamara" />
          <form>
            <h1>Faça seu login</h1>

            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(input) => setEmail(input.target.value)}
            />

            <Button
              type="button"
              onClick={handleSignIn}
            >Entrar</Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
