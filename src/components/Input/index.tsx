import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

const Input = (props: TextInputProps) => {
  return (
    <TextInput
      underlineColorAndroid={'transparent'}
      numberOfLines={2}
      multiline
      placeholder={'O que gostaria de compartilhar?'}
      {...props}
    />
  );
};

export default Input;
