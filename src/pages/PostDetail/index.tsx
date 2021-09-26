import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

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

  const [loaded, setLoaded] = useState(false);

  const LoadTest = () => (
    <View style={{ height: 250 }}>
      <ContentLoader
        viewBox="0 0 100 50"
        backgroundColor="#999"
        foregroundColor="#cfcfcf"
      >
        <Rect x="0" y="0" rx="10" ry="10" width="100" height="100" />
      </ContentLoader>
    </View>
  );

  const handleLoadImage = () => {
    setLoaded(true);
  };

  return (
    <Container>
      <ScrollContent showsVerticalScrollIndicator={false}>
        {!loaded && <LoadTest />}

        <ImageHeader
          onLoadEnd={handleLoadImage}
          source={{ uri: `https://picsum.photos/id/${id}/${Dimensions.get('window').width}/250` }}
        />
        <Content>
          <Title>{capitalizeFirstLetter(title)}</Title>
          <Description>{capitalizeFirstLetter(body)}</Description>
        </Content>
      </ScrollContent>
    </Container>
  );
}
