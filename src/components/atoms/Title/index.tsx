import React from 'react';

import * as S from './styles';

type TitleProps = {
  highlight?: boolean;
}
const Title: React.FC<TitleProps> = ({highlight, children}) => {
  return <S.Container highlight={highlight}>{children}</S.Container>;
}

export default Title;
