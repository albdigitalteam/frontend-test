import React from 'react';
import { Container } from './styles';

interface IButtonProps {
  disabled: boolean;
  onClick(): void;
}
const Button: React.FC<IButtonProps> = ({ disabled, onClick, children }) => (
  <Container disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
