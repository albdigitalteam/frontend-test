import React from 'react';

import { Container } from './styles';

const UserBarMenu: React.FC = () => (
  <Container>
    <li className="active">
      <span>Tweets</span>
      <strong>3931</strong>
    </li>
    <li>
      <span>Followings</span>
      <strong>654</strong>
    </li>
    <li>
      <span>Followers</span>
      <strong>357</strong>
    </li>
    <li>
      <span>Favorites</span>
      <strong>265</strong>
    </li>
    <li>
      <span>Likes</span>
      <strong>6</strong>
    </li>
    <li>
      <span>Moments</span>
      <strong>0</strong>
    </li>
  </Container>
);

export default UserBarMenu;
