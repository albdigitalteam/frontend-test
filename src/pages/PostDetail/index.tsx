import React from 'react';
import { Dimensions } from 'react-native';

import { capitalizeFirstLetter } from '../../Util/utils';

import {
  Container,
  ScrollContent,
  Content,
  Title,
  Description,
  ImageHeader,
} from './styles';

export function PostDetail({ route }: any) {
  const { title, body, id } = route.params;

  return (
    <Container>
      <ScrollContent showsVerticalScrollIndicator={false}>
        <ImageHeader source={{ uri: `https://picsum.photos/id/${id}/${Dimensions.get('window').width}/250` }} />
        <Content>
          <Title>{capitalizeFirstLetter(title)}</Title>
          <Description>{capitalizeFirstLetter(body)}</Description>
        </Content>
      </ScrollContent>
    </Container>
  );
}
