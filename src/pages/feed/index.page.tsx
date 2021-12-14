import React, {useEffect, useState} from 'react';

import Header from '../../components/header/index.component';
import Post from '../../components/post/index.component';

// import ModalNewPost from './modal-new-post/index.page';

import {IPost} from '../../models/post.model';

import postsService from '../../services/posts.service';
import usersService from '../../services/users.service';

import {adaptPost} from '../../adapters/post.adapter';

import {
  Container,
  Content,
  NewPostContainer,
  NewPostTextarea,
  NewPostButton,
  FeedContainer,
} from './styles.style';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleGetPosts = async () => {
    const [
      {data: postsDataAPI},
      {data: usersDataAPI},
    ] =
      await Promise.all([
        postsService.all(),
        usersService.all(),
      ]);

    const postsFormatted = postsDataAPI.map((postDataAPI) => {
      return adaptPost(postDataAPI, usersDataAPI);
    });

    setPosts(postsFormatted);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <Container>
      <Header
        title='Feed'
      />

      <Content>
        <FeedContainer>
          <NewPostContainer>
            <NewPostButton>Nova postagem</NewPostButton>
          </NewPostContainer>

          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              user={post.user}
              showComments={false}
              comments={[]}
            />
          ))}
        </FeedContainer>
      </Content>

      {/* <ModalNewPost
        setIsOpen={() => {
          return true;
        }}
        isOpen
      /> */}
    </Container>
  );
};

export default Feed;
