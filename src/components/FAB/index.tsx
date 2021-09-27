import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import { Container } from './styles';
import colors from '../../styles/colors';

interface FabProps {
  navigationURL: string;
}

export function FAB({ navigationURL }: FabProps) {
  const navigation = useNavigation();

  const handleNavigateNewPost = () => {
    navigation.navigate(navigationURL);
  };

  return (
    <Container onPress={handleNavigateNewPost}>
      <FontAwesome5 name="plus" size={28} color={colors.white} />
    </Container>
  );
}
