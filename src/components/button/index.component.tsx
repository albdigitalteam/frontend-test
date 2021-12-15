import React from 'react';

import {Container} from './styles.style';

import {IButton} from './button.interface';

const Button: React.FC<IButton> = ({children, ...props}) => (
  <Container {...props}>
    {children}
  </Container>
);

export default Button;
