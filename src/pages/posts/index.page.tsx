import React, {useEffect, useState, useCallback} from 'react';
import {useLocation} from 'react-router-dom';

import commentsService from '../../services/comments.service';

import Header from '../../components/header/index.component';
import Post from '../../components/post/index.component';

import {IPost} from '../../models/post.model';

import {adaptComment} from '../../adapters/comment.adapter';

import {Container, Content, PostContainer} from './styles.style';

const Posts: React.FC = () => {
  const location = useLocation();

  const [post, setPost] = useState<IPost>({} as IPost);

  const handleSaveComment = useCallback((newComment: string) => {
    const newCommentFormatted = newComment.trim();
    const userLogged = {
      name: 'Lucas Arena',
      avatar: {
        url: 'https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/258854853_4697875306922352_8420990843923849622_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sPgW1bQXhfUAX__znKq&_nc_ht=scontent.fcgh10-1.fna&oh=00_AT-P50UHEnjcLGF3NUFtsNYRGFNJ7fPAT1XuZJR8ypWMMQ&oe=61B91BAD',
      },
    };

    if (!newCommentFormatted) {
      alert('Digite um comentário');
    }

    setPost((oldPost) => {
      return {
        ...oldPost,
        comments: [
          ...oldPost.comments,
          {
            user: {...userLogged},
            id: 123,
            description: newCommentFormatted,
          },
        ],
      };
    });
  }, []);

  /**
   * @param {number} id
   * @return {Promise<void>}
   */
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
