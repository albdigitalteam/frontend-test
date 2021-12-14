import React from 'react';

import {IButton} from './button.interface';

import {Container} from './styles.style';

const Button: React.FC<IButton> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
};

export default Button;
