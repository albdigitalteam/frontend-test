import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, ActionsContent } from './styles';
import Comment from '../../assets/images/comments.svg';
import Retweet from '../../assets/images/retweet.svg';
import Like from '../../assets/images/like.svg';
import Comments from '../Comments';
import { IComment } from '../../store/ducks/comments/types';
import * as CommentAction from '../../store/ducks/comments/actions';
import InputText from '../InputText';
import Button from '../Button';

interface IPostActionProps {
  postOwner?: string;
  comments: IComment[];
  onClick(): void;
  postId: number;
}
const PostAction: React.FC<IPostActionProps> = ({
  comments,
  onClick,
  postOwner,
  postId,
}: IPostActionProps) => {
  const [showComments, setShowComments] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');
  const dispatch = useDispatch();

  const getComments = () => {
    onClick();
    setShowComments(!showComments);
  };

  const handleNewComment = () => {
    const newComment: IComment = {
      body: newCommentText,
      id: Math.floor(Math.random() * 10),
      postId,
      email: postOwner,
    };

    dispatch(CommentAction.saveRequest(newComment));
    setNewCommentText('');
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
          <InputText
            type="text"
            placeholder="No que você está pensando"
            value={newCommentText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewCommentText(e.target.value)
            }
          />
          <Button
            disabled={newCommentText.length <= 0}
            onClick={handleNewComment}
          >
            Publicar
          </Button>
        </>
      )}
    </Container>
  );
};

PostAction.defaultProps = {
  postOwner: undefined,
};

export default PostAction;
