import React from 'react';
import {ReduxState} from '../../../../../interfaces';
import {Comment} from '../../store/interfaces';
import {Container} from './styles';
import {Text, View, FlatList} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {posts} from '../../store/selectors';

interface Props {
  commentsStatus: ReduxState<Comment[]>;
  comments: Comment[] | null | undefined;
  getComments: (postId: number) => Promise<any>;
}

const CommentsContent = (props: Props) => {
  const renderItem = ({item}: {item: Comment}) => (
    <View style={{backgroundColor: '#FFF', marginVertical: 5, padding: 12}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center'}}>
          <Avatar
            rounded
            source={{
              uri: 'https://media.istockphoto.com/photos/back-view-of-traveler-woman-walking-in-forest-picture-id1264486309',
            }}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#414359', fontSize: 18}}>Oiceotse moura</Text>
          <Text style={{color: '#9fa6b5', fontSize: 12}}>12 minutos atras</Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon
            color={'#7f899b'}
            name="ellipsis-h"
            size={18}
            type={'font-awesome-5'}
            tvParallaxProperties={undefined}
          />
        </View>
      </View>
      <View style={{paddingVertical: 10, paddingRight: 5}}>
        <Text>
          Visiti my store. Its is the best int he world
          sadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 30,
            justifyContent: 'center',
          }}>
          <Icon
            onPress={() => {}}
            color={'#ff3d71'}
            tvParallaxProperties={undefined}
            type={'font-awesome'}
            name={'heart'}
            containerStyle={{marginRight: 8}}
          />
          <Text style={{color: '#a5acb9', fontWeight: '500', fontSize: 15}}>
            4
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            onPress={() => {}}
            size={24}
            color={'#cbd3e3'}
            tvParallaxProperties={undefined}
            type={'font-awesome-5'}
            name={'comment-dots'}
            containerStyle={{marginRight: 8}}
          />
          <Text style={{color: '#a5acb9', fontWeight: '500', fontSize: 15}}>
            4
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <Container>
      {props.commentsStatus.isDone && (
        <FlatList renderItem={renderItem} data={props.comments} />
      )}
    </Container>
  );
};

export {CommentsContent};
