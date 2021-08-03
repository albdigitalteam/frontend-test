import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AplicationState } from '~/store';

import { loggedRequest } from '~/store/modules/auth/actions';

import { Button, TextButton, Container, Title } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const stateAuth = useSelector((state: AplicationState) => state.auth);

  const handleToEnter = useCallback(() => {
    dispatch(loggedRequest());
  }, [dispatch]);

  if (stateAuth.error) {
    <Title>Erro ao carregar os dados</Title>;
  }

  return (
    <Container>
      <Title>
        {stateAuth.error
          ? 'Erro ao carregar os dados'
          : 'Bem vindo ao blog AirLiquide'}
      </Title>
      <Button onPress={handleToEnter}>
        <TextButton>
          {stateAuth.error ? 'Tente novamente' : 'Entrar'}
        </TextButton>
      </Button>
    </Container>
  );
};

export { Home };
