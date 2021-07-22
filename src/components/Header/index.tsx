import React from 'react';
import { Container, DivContent, DivAvatar, ButtonTweet } from './styles';
import Menu from '../Menu';
import Logo from '../../assets/images/logo.svg';
import Avatar from '../../assets/images/avatar.png';

const Header: React.FC = () => (
  <Container>
    <DivContent>
      <nav>
        <Menu />
      </nav>
      <img src={Logo} alt="logo" />
      <DivAvatar id="rightSide">
        <input type="text" placeholder="Pesquise no Twiter" />
        <img src={Avatar} alt="avatar" />
        <ButtonTweet>Tweet</ButtonTweet>
      </DivAvatar>
    </DivContent>
  </Container>
);

export default Header;
