import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Container } from './styles';

export const Card:FunctionComponent = ({ children }) => (
  <Container>
    {children}
  </Container>
);
