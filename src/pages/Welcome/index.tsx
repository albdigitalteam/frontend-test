import React from 'react';
import { Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import {
  Container, Content, Title, Description, Footer,
} from './styles';

export function Welcome() {
  const navigation = useNavigation();

  const handleMoveOn = () => {
    navigation.navigate('Users');
  };

  return (
    <Container>
      <Content>
        <Title>Welcome</Title>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{ width: Dimensions.get('window').width }}
          resizeMode="contain"
        />
        <Description>Blog app</Description>
      </Content>
      <Footer>
        <Button loading={false} title="Let's go!" onPress={handleMoveOn} />
      </Footer>
    </Container>
  );
}
