import React from 'react';

import {ITooltip} from './tooltip.interface';

import {Container} from './styles.style';

const Tooltip: React.FC<ITooltip> = ({title, className, children}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
