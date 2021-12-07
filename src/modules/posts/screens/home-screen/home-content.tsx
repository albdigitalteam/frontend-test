import React from 'react';
import {FlatList} from 'react-native';
import {ReduxState} from '@interfaces/';
import {Post, HeaderPost} from '@components/';
import {Container} from './styles';
import {IPost} from '../../store/interfaces';

interface Props {
  postsStatus: ReduxState<IPost[]>;
  posts: IPost[] | null | undefined;
}

const HomeContent = (props: Props) => {
  const renderItem = ({item}: {item: IPost}) => <Post post={item} />;

  return (
    <Container>
      <HeaderPost />
      {props.postsStatus.isDone && (
        <FlatList
          keyExtractor={post => `${post.id}`}
          renderItem={renderItem}
          data={props.posts}
        />
      )}
    </Container>
  );
};

export {HomeContent};
