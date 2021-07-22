import React from 'react';

import { Container } from './styles';
import ProfileInfo from '../../components/ProfileInfo';
import Post from '../../components/Post';
import AsideWidgets from '../../components/AsideWidgets';

const Blog: React.FC = () => (
  <Container>
    <ProfileInfo />
    <Post />
    <AsideWidgets />
  </Container>
);

export default Blog;
