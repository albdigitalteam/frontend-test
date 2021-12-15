import React, {useCallback, useEffect, useState} from 'react';

import Header from '../../components/header/index.component';
import Post from '../../components/post/index.component';

import {ISaveNewPost} from '../../components/modal/modal.interface';
import ModalNewPost from './modal-new-post/index.page';

import {useToast} from '../../hooks/toast.hook';
import {useAuth} from '../../hooks/auth.hook';

import {IPost} from '../../models/post.model';

import postsService from '../../services/posts.service';
import usersService from '../../services/users.service';
import {adaptPost} from '../../adapters/post.adapter';
import {adaptUser} from '../../adapters/user.adapter';

import {
  Container,
  Content,
  NewPostContainer,
  NewPostButton,
  FeedContainer,
} from './styles.style';

const Feed: React.FC = () => {
  const {addToast} = useToast();
  const {user} = useAuth();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setModalIsOpen(!modalIsOpen);
  }, [modalIsOpen, setModalIsOpen]);

  const handleSavePost = useCallback(({photoUrl, title, description}: ISaveNewPost): void => {
    posts.unshift({
      id: posts.length + 1,
      photoUrl: String(photoUrl),
      title,
      description,
      user: adaptUser(user),
      comments: [],
    });

    setPosts(posts);
    setModalIsOpen(false);

    addToast({
      type: 'success',
      title: 'Post inserido com sucesso',
    });
  }, [setPosts, posts, setModalIsOpen]);

  const handleGetPosts = async (): Promise<void> => {
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
            <NewPostButton onClick={toggleModal}>Nova postagem</NewPostButton>
          </NewPostContainer>

          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
              photoUrl={post.photoUrl}
              user={post.user}
              showComments={false}
              comments={[]}
            />
          ))}
        </FeedContainer>
      </Content>

      <ModalNewPost
        setIsOpen={toggleModal}
        isOpen={modalIsOpen}
        handleSavePost={handleSavePost}
      />
    </Container>
  );
};

export default Feed;
