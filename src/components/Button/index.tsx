import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    loading: boolean;
}

export default function Button({ title, loading = false, ...rest } : ButtonProps) {
  return (
    <Container {...rest}>
      {loading && <ActivityIndicator size="small" color="#FFF" style={{ marginRight: 10 }} />}
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}
