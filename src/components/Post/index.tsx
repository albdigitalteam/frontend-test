import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ActionsPost from '../../store/ducks/posts/actions';
import * as ActionUser from '../../store/ducks/users/actions';
import * as ActionComment from '../../store/ducks/comments/actions';
import { IPost } from '../../store/ducks/posts/types';
import { IUser } from '../../store/ducks/users/types';
import { IComment } from '../../store/ducks/comments/types';
import { IApplicationState } from '../../store';
import {
  Container,
  PostContent,
  TitleExcludeButtonContent,
  NewPostContent,
} from './styles';
import PostAction from '../PostAction';
import InputText from '../InputText';
import Button from '../Button';

const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state: IApplicationState) => state.posts);
  const userState = useSelector((state: IApplicationState) => state.users);
  const commentState = useSelector((state: IApplicationState) => {
    const { data } = state.comments;
    return data;
  });
  const [newPostText, setNewPostText] = useState('');

  useEffect(() => {
    dispatch(ActionsPost.loadRequest());
    dispatch(ActionUser.loadRequest());
  }, [dispatch]);

  const getComments = (postId: number) => {
    if (!commentState.find((comment: IComment) => comment.postId === postId)) {
      dispatch(ActionComment.loadRequest(postId));
    }
  };

  const handleDeletePost = (postId: number) => {
    dispatch(ActionsPost.deleteRequest(postId));
  };

  const handleNewPost = () => {
    const userId = Math.floor(Math.random() * 10);
    const newPost: IPost = {
      body: newPostText,
      title: '"New Post Title"',
      user: {
        id: userId,
        name: '"New Post Title"',
      },
      userId,
      id: Math.floor(Math.random() * 1000),
    };
    dispatch(ActionsPost.saveRequest(newPost));
    setNewPostText('');
  };

  const renderPost = () => (
    <>
      <NewPostContent>
        <InputText
          placeholder="Compartilhe algo novo hoje!"
          type="text"
          value={newPostText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPostText(e.target.value)
          }
        />
        <Button disabled={newPostText.length <= 0} onClick={handleNewPost}>
          Publicar Novo Post
        </Button>
      </NewPostContent>
      {postState.data.map((p: IPost) => {
        const user = userState.data.find((u: IUser) => u.id === p.userId);
        return (
          <PostContent>
            <TitleExcludeButtonContent>
              <strong>{user?.name}</strong>
              <span
                tabIndex={0}
                onKeyPress={() => {
                  handleDeletePost(p.id);
                }}
                onClick={() => {
                  handleDeletePost(p.id);
                }}
                role="button"
              >
                Excluir
              </span>
            </TitleExcludeButtonContent>

            <strong>{p.title}</strong>
            <p>{p.body}</p>
            <PostAction
              postId={p.id}
              postOwner={user?.name}
              onClick={() => getComments(p.id)}
              comments={commentState.filter(
                (comment: IComment) => comment.postId === p.id,
              )}
            />
          </PostContent>
        );
      })}
    </>
  );

  return <Container>{renderPost()}</Container>;
};

export default Posts;
