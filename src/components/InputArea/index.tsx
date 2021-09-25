import React from 'react';
import { TextInputProps } from 'react-native';
import { Container } from './styles';

interface InputAreaProps extends TextInputProps {}

export function InputArea({ ...rest }: InputAreaProps) {
  return (
    <Container {...rest} />
  );
}
