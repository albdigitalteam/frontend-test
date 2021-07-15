import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { loggedRequest } from '~/store/modules/auth/actions';

import { Button, TextButton, Container, Title } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleToEnter = useCallback(() => {
    dispatch(loggedRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Bem vindo ao blog AirLiquide</Title>
      <Button onPress={handleToEnter}>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  );
};

export { Home };
