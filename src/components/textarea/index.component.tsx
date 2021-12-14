import React from 'react';

import {ITextarea} from './textarea.interface';

import {Container} from './styles.style';

const Textarea: React.FC<ITextarea> = ({...rest}) => {
  return (
    <Container {...rest}></Container>
  );
};

export default Textarea;
