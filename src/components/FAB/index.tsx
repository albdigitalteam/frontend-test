import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import { Container } from './styles';
import colors from '../../styles/colors';

export function FAB() {
  const navigation = useNavigation();

  const handleNavigateNewPost = () => {
    navigation.navigate('NewPost');
  };

  return (
    <Container onPress={handleNavigateNewPost}>
      <FontAwesome5 name="plus" size={28} color={colors.white} />
    </Container>
  );
}
