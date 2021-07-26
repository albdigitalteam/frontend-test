import React, { useState } from 'react';
import { Container, ActionsContent } from './styles';
import Comment from '../../assets/images/comments.svg';
import Retweet from '../../assets/images/retweet.svg';
import Like from '../../assets/images/like.svg';
import Comments from '../Comments';
import { IComment } from '../../store/ducks/comments/types';

interface IPostActionProps {
  comments: IComment[];
  onClick(): void;
}
const PostAction: React.FC<IPostActionProps> = ({
  comments,
  onClick,
}: IPostActionProps) => {
  const [showComments, setShowComments] = useState(false);
  const getComments = () => {
    onClick();
    setShowComments(!showComments);
  };

  return (
    <Container>
      <ActionsContent>
        <div
          onClick={getComments}
          onKeyPress={getComments}
          role="button"
          tabIndex={0}
        >
          <img src={Comment} alt="comments" />
          {comments.length > 0 && <span>{comments.length}</span>}
        </div>
        <img src={Retweet} alt="retweet" />
        <img src={Like} alt="likes" />
      </ActionsContent>
      {showComments && (
        <>
          {comments.map((comment: IComment) => (
            <Comments
              key={comment.id.toString().concat(' ', comment.postId.toString())}
              email={comment.email}
              body={comment.body}
              name={comment.name}
            />
          ))}
          <div>aqui virá o campo de inserção</div>
        </>
      )}
    </Container>
  );
};

export default PostAction;
