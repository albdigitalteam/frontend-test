import React, {useState, memo} from 'react';
import {
  Container,
  AvatarContainer,
  ContentContainer,
  ButtonPostContainer,
} from './styles';
import {View, ActivityIndicator} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {ICreatePostDto, IPost} from '@modules/main/home/store/interfaces';
import {ReduxState} from '@interfaces/';
import {IUser} from '@modules/user/store/interfaces';
import Input from '../Input';

interface Props {
  createPost: (postDto: ICreatePostDto) => Promise<any>;
  createPostStatus: ReduxState<IPost>;
  user: IUser;
}

const HeaderPostContent = memo((props: Props) => {
  const [body, setBody] = useState<string>('');
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          size={50}
          rounded
          source={{
            uri: 'https://media.istockphoto.com/photos/back-view-of-traveler-woman-walking-in-forest-picture-id1264486309',
          }}
        />
        <ContentContainer>
          <Input value={body} onChangeText={text => setBody(text)} />
        </ContentContainer>
      </AvatarContainer>
      <ButtonPostContainer>
        {props.createPostStatus.isDoing ? (
          <ActivityIndicator />
        ) : (
          <Button
            onPress={() =>
              props
                .createPost({
                  body: body,
                  title: 'Novo post',
                  userId: props.user.id,
                })
                .then(() => {
                  setBody('');
                })
            }
            containerStyle={{elevation: 10}}
            title={'Postar'}
          />
        )}
      </ButtonPostContainer>
    </Container>
  );
});

export default HeaderPostContent;
