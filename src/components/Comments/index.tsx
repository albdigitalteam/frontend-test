import React from 'react';
import { IComment } from '../../store/ducks/comments/types';
import { Container, EmailContent, NameContent, BodyContent } from './styles';

const Comments: React.FC<Omit<IComment, 'postId' | 'id'>> = ({
  body,
  name,
  email,
}: Omit<IComment, 'postId' | 'id'>) => (
  <Container>
    <EmailContent>{email}</EmailContent>
    <NameContent>{name}</NameContent>
    <BodyContent>{body}</BodyContent>
  </Container>
);

export default Comments;
