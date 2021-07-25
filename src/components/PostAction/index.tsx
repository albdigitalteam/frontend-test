import React from 'react';
import { Container } from './styles';
import Comment from '../../assets/images/comments.svg';
import Retweet from '../../assets/images/retweet.svg';
import Like from '../../assets/images/like.svg';

interface IPostActionProps {
  totalComments: number;
}
const PostAction: React.FC<IPostActionProps> = ({
  totalComments = 0,
}: IPostActionProps) => (
  <Container>
    <div>
      <img src={Comment} alt="comments" />
      {totalComments > 0 && <span>{totalComments}</span>}
    </div>
    <img src={Retweet} alt="retweet" />
    <img src={Like} alt="likes" />
  </Container>
);

export default PostAction;
