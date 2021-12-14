import React from 'react';

import {IComment} from '../../models/comment.model';

import {Container, Content} from './styles.style';

const Comment: React.FC<IComment> = ({description, user}) => {
  return (
    <Container>
      <img src={user.avatar.url} alt="Foto do usuário" />
      <Content>
        <h1>{user.name}</h1>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Comment;
