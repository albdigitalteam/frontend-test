import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
  return <S.Container {...rest}>
        {children}
  </S.Container>;
}

export default Button;
