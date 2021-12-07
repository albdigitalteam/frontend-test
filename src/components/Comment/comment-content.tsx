import React, {memo, useState} from 'react';
import {IComment} from '@modules/comments/store/interfaces';
import {Text, View} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {
  Container,
  Header,
  AvatarContainer,
  HeaderContentContainer,
  TextTitle,
  TextSubtitle,
  IconContainer,
} from './styles';

interface Props {
  comment: IComment;
}

const CommentContent = memo((props: Props) => {
  return (
    <Container
      style={{backgroundColor: '#FFF', marginVertical: 5, padding: 12}}>
      <Header style={{flexDirection: 'row'}}>
        <AvatarContainer>
          <Avatar
            rounded
            source={{
              uri: 'https://media.istockphoto.com/photos/back-view-of-traveler-woman-walking-in-forest-picture-id1264486309',
            }}
          />
        </AvatarContainer>
        <HeaderContentContainer>
          <TextTitle>{props.comment.name}</TextTitle>
          <TextSubtitle>{props.comment.email}</TextSubtitle>
        </HeaderContentContainer>
        <IconContainer>
          <Icon
            color={'#7f899b'}
            name="ellipsis-h"
            size={18}
            type={'font-awesome-5'}
            tvParallaxProperties={undefined}
          />
        </IconContainer>
      </Header>
      <View style={{paddingVertical: 10, paddingRight: 5}}>
        <Text style={{fontSize: 18}}>{props.comment.body}</Text>
      </View>
    </Container>
  );
});

export {CommentContent};
