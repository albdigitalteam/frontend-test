import React from 'react';

import * as S from './styles';

type SubtitleProps = {
  highlight?: boolean;
}
const Subtitle: React.FC<SubtitleProps> = ({highlight, children}) => {
  return <S.Container>{children}</S.Container>;
}

export default Subtitle;
