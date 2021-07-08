import React, { memo } from 'react';
import Title from '../../atoms/Title';
import Description from '../../atoms/Description';
import { IComment } from '../../../sharedTypes';

import * as S from './styles';
import Subtitle from '../../atoms/Subtitle';

type CardCommentProps = Pick<IComment, 'body' | 'name' | 'email'>;
const CardComment: React.FC<CardCommentProps> = ({ body, name, email }) => {
  return (
    <S.Container>
      <Title>{name}</Title>
      <Subtitle>{email}</Subtitle>
      <Description>{body}</Description>
    </S.Container>
  );
};

export default memo(CardComment);
