import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import {IComment} from '@modules/comments/store/interfaces';
import {ReduxState} from '@interfaces/';
import Input from '../Input';
import {Container, InputContainer} from './styles';

interface Props {
  createComment: (body: string) => any;
  createCommentStatus: ReduxState<IComment>;
}

const NewCommentContent = (props: Props) => {
  const [body, setBody] = useState<string>('');
  return (
    <Container>
      <Avatar
        size={30}
        rounded
        source={{
          uri: 'https://media.istockphoto.com/photos/back-view-of-traveler-woman-walking-in-forest-picture-id1264486309',
        }}
      />
      <InputContainer>
        <Input value={body} onChangeText={text => setBody(text)} />
      </InputContainer>
      {props.createCommentStatus.isDoing ? (
        <ActivityIndicator />
      ) : (
        <Button
          onPress={() =>
            props.createComment(body).then(() => {
              setBody('');
            })
          }
          title={'Postar'}
        />
      )}
    </Container>
  );
};

export {NewCommentContent};
