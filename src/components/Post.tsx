import React, { useMemo } from 'react';
import { View, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';

import comments from '../mocks/comments';
import { RootStackParamList } from '../routes';
export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const { width } = Dimensions.get('screen');

const Post: React.FC<PostProps> = ({ userId, id, title, body }) => {
  const { navigate } = useNavigation<HomeScreenNavigationProp>();

  const numOfComments = useMemo(() => {
    return comments.filter(comment => comment.postId === id).length;
  }, [id]);

  return (
    <StyledContainer>
      <StyledCover
        source={{
          uri: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
        }}
      />
      <View>
        <StyledTitle>{title}</StyledTitle>
        <StyledText>{body}</StyledText>
        <Button onPress={() => navigate('Details', { postId: id })}>
          <StyledButtonText>
            `ver comentários ({numOfComments})`
          </StyledButtonText>
        </Button>
      </View>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  align-items: center;
  background-color: #fefbf3;
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.15);
  padding: 0 12px 12px;
  margin: 0 12px 16px;
  border-radius: 10px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const StyledTitle = styled(StyledText)`
  font-weight: bold;
  text-align: center;
`;

const StyledCover = styled.Image`
  width: ${width - 48}px;
  height: ${width - 48}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  color: #9d9d9d;
`;

export default Post;
