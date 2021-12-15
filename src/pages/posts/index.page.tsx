import React, {useEffect, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';

import commentsService from '../../services/comments.service';

import Header from '../../components/header/index.component';
import Post from '../../components/post/index.component';

import {IPost} from '../../models/post.model';

import {useAuth} from '../../hooks/auth';

import {adaptComment} from '../../adapters/comment.adapter';

import {Container, Content, PostContainer} from './styles.style';

const Posts: React.FC = () => {
  const location = useLocation();
  const {user} = useAuth();

  const [post, setPost] = useState<IPost>({} as IPost);

  const handleSaveComment = useCallback((newComment: string) => {
    const newCommentFormatted = newComment.trim();

    if (!newCommentFormatted) {
      alert('Digite um comentário');
    }

    setPost((oldPost) => {
      return {
        ...oldPost,
        comments: [
          ...oldPost.comments,
          {
            user,
            id: 123,
            description: newCommentFormatted,
          },
        ],
      };
    });
  }, [user]);

  async function handleComments(): Promise<void> {
    const {id, title, description} = location.state as IPost;

    const {data: commentDataAPI} = await commentsService.get(id);

    const comments = adaptComment(commentDataAPI);

    setPost({
      id,
      title,
      description,
      comments,
    });
  }

  useEffect(() => {
    handleComments();
  }, []);

  return (
    <Container>
      <Header
        title='Post'
      />

      <Content>
        <PostContainer>
          <Post
            id={post.id}
            title={post.title}
            description={post.description}
            comments={post.comments}
            handleSaveComment={handleSaveComment}
            showComments
          />
        </PostContainer>
      </Content>
    </Container>
  );
};

export default Posts;
