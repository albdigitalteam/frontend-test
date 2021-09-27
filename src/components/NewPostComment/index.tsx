import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { InputArea } from '../../components/InputArea';
import Button from '../../components/Button';

import {
  Container, Content, Footer, TitleContainer, DescriptionContainer,
} from './styles';

export function NewPostComment({ route }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const { url, post } = route.params;
  const navigation = useNavigation();

  const handleInputTitle = (value: string) => {
    setTitle(value);
  };

  const handleInputDescription = (value: string) => {
    setDescription(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const params = {
      title,
      body: description,
    };
    await api.post(url, params)
      .then((res) => {
        Alert.alert(
          'Success!',
          `New ${post ? 'post' : 'comment'} register`, [
            { text: 'OK', onPress: () => { navigation.goBack(); } },
          ],
        );
      })
      .catch((error) => {
        console.log('Error', error);
        Alert.alert(
          'Error!',
          `Not possible register new ${post ? 'post' : 'comment'}`,
        );
      });
    setLoading(false);
  };

  const validateFields = () => {
    let msgError = '';
    if (title.trim().length <= 0) {
      msgError = 'Title';
    } else if (description.trim().length <= 0) {
      msgError = 'Description';
    }
    if (msgError.length > 0) {
      Alert.alert(
        'Validate fields',
        `Fill ${msgError}`,
      );
    } else {
      handleSubmit();
    }
  };

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Input
            placeholder="Title"
            value={title}
            onChangeText={handleInputTitle}
          />
        </TitleContainer>
        <DescriptionContainer>
          <InputArea
            placeholder="Description"
            value={description}
            onChangeText={handleInputDescription}
            multiline
          />
        </DescriptionContainer>
      </Content>
      <Footer>
        <Button loading={loading} title="Confirm" onPress={validateFields} />
      </Footer>
    </Container>
  );
}
