import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../Contexts/AuthContext';

import {
  Container, ButtonMenu, ButtonTitle, ButtonLogoutMenu,
} from './styles';

export function DrawerCustomContent() {
  const navigation = useNavigation();
  const { signOut } = React.useContext(AuthContext);

  return (
    <Container>
      <ButtonMenu
        onPress={() => {
          navigation.navigate('AppNavigation');
        }}
      >
        <ButtonTitle>
          Posts
        </ButtonTitle>
      </ButtonMenu>
      <ButtonMenu
        onPress={() => {
          navigation.navigate('NewPost');
        }}
      >
        <ButtonTitle>
          New post
        </ButtonTitle>
      </ButtonMenu>
      <ButtonLogoutMenu
        onPress={signOut}
      >
        <ButtonTitle>
          Logout
        </ButtonTitle>
      </ButtonLogoutMenu>
    </Container>
  );
}
