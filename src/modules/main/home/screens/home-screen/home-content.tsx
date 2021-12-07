import React from 'react';
import {ReduxState} from '../../../../../interfaces';
import {IPost} from '../../store/interfaces';
import {Container} from './styles';

import {Text, View, FlatList, TextInput} from 'react-native';
import {Post, HeaderPost} from '../../../../../components';
import {Avatar, Button} from 'react-native-elements';

interface Props {
  postsStatus: ReduxState<IPost[]>;
  posts: IPost[] | null | undefined;
  navigate: (routeName: string) => void;
}

const HomeContent = (props: Props) => {
  return (
    <Container>
      <HeaderPost />
      {props.postsStatus.isDone && (
        <FlatList
          renderItem={({item}) => <Post key={`${item.id}`} post={item} />}
          data={props.posts}
        />
      )}
    </Container>
  );
};

export {HomeContent};
