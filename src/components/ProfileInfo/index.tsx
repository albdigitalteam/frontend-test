import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import { Container } from './styles';
import Place from '../../assets/images/place.svg';
import UrlImage from '../../assets/images/url.svg';
import Joined from '../../assets/images/joined.svg';
import Born from '../../assets/images/born.svg';

const ProfileInfo: React.FC = () => (
  <Container>
    <img src={Avatar} alt="avatar" />
    <h1>Edilson Augusto de Andrade</h1>
    <p>
      Full Stack Developer focussed problem solving usign NodeJs, ReactJs and
      React Native, .Net developing apps is what make things *work* better and
      amazing.
    </p>
    <ul className="info">
      <li>
        <img src={Place} alt="place" />
        São Paulo, Brazil
      </li>
      <li>
        <img src={UrlImage} alt="url" />
        exibit.be
      </li>
      <li>
        <img src={Joined} alt="joined" />
        Joined June 1998
      </li>
      <li>
        <img src={Born} alt="born" />
        Born the 11th of April 1977
      </li>
    </ul>
  </Container>
);

export default ProfileInfo;
