import React from 'react';
import { Container } from './styles';
import Comment from '../../assets/images/comments.svg';
import Retweet from '../../assets/images/retweet.svg';
import Like from '../../assets/images/like.svg';

const PostAction: React.FC = () => (
  <Container>
    <img src={Comment} alt="comments" />
    <img src={Retweet} alt="retweet" />
    <img src={Like} alt="likes" />
  </Container>
);

export default PostAction;
