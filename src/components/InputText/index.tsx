import React from 'react';
import { Container } from './styles';

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
const InputText: React.FC<IInputProps> = ({
  type,
  placeholder,
  onChange,
  value,
}) => (
  <Container
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputText;
