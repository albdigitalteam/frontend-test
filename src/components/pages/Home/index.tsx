import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './styles';
import Header from '../../organisms/Header';

import { IComment, IUser } from '../../../sharedTypes';
import { Container } from '../../../styles/gridSystem';
import CardPost from '../../organisms/CardPost';
import { usePosts } from '../../../contexts/posts';
import { useComments } from '../../../contexts/comments';
import { useUsers } from '../../../contexts/users';

const Home: React.FC = () => {
  const {
    posts,
    removePost,
    selectPost,
    selectedPost,
    updatePost,
  } = usePosts();
  const { users } = useUsers();
  const { comments } = useComments();

  const getAuthorFromPost = useCallback(
    (userId: number): string => {
      const user = users.find((user: IUser) => user.id === userId);
      return user?.name || '';
    },
    [users],
  );

  const getCommentsFromPost = useCallback(
    (postId: number) => {
      const commentsFiltered = comments.filter(
        (comment: IComment) => comment.postId === postId,
      );
      return commentsFiltered;
    },
    [comments],
  );

  return (
    <>
      <Header authors={users} />
      <Container>
        <S.Content>
          <S.PostsWrapper>
            {posts &&
              posts.map((post) => (
                <CardPost
                  removePost={() => removePost(post.id)}
                  updatePost={() => updatePost(post)}
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  author={getAuthorFromPost(post.userId)}
                  image={
                    post.image_url ||
                    `https://source.unsplash.com/random/755x225?sig=${post.id}`
                  }
                  description={post.body}
                  comments={getCommentsFromPost(post.id)}
                  authors={users}
                  selectPost={selectPost}
                  selectedPost={selectedPost}
                />
              ))}
          </S.PostsWrapper>
        </S.Content>
      </Container>
    </>
  );
};

export default memo(Home);
