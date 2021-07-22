import React from 'react';

import { Container, ItemsContent } from './styles';
import UserBarMenu from '../UserBarMenu';

const UserBar: React.FC = () => (
  <Container>
    <ItemsContent>
      <UserBarMenu />
    </ItemsContent>
  </Container>
);

export default UserBar;
