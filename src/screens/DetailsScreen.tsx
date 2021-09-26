import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';

import Header from '../components/Header';
import Comment from '../components/Comment';
import NewComment from '../components/NewComment';

import { RootStackParamList } from '../routes';

import posts from '../mocks/posts';
import comments from '../mocks/comments';
import users from '../mocks/users';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

const { width } = Dimensions.get('screen');

const HomeScreen: React.FC = () => {
  const {
    params: { postId },
  } = useRoute<DetailsScreenRouteProp>();
  const { goBack } = useNavigation<DetailsScreenNavigationProp>();

  const post = useMemo(() => {
    return posts.find(p => p.id === postId);
  }, [postId]);

  const postComments = useMemo(() => {
    return comments.filter(comment => comment.postId === postId);
  }, [postId]);

  return (
    <>
      <Header title="Detalhes" showBackButton onPressBack={goBack} />
      <StyledContainer>
        <StyledCover
          source={{
            uri: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
          }}
        />
        <StyledContent>
          <StyledTitle>{post?.title}</StyledTitle>
          <StyledBody>{post?.body}</StyledBody>
          <StyledDivisorContainer>
            <StyledText>Comentários</StyledText>
          </StyledDivisorContainer>

          {postComments.map((comment, index) => (
            <>
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
                isLoggedUser={false}
              />
              {index !== postComments.length - 1 && (
                <StyledDivisor key={`divisor${index}`} />
              )}
            </>
          ))}
          <NewComment />
        </StyledContent>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.ScrollView.attrs({
  flexGrow: 1,
  paddingBottom: 12,
})`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding-bottom: 16px;
`;

const StyledContent = styled.View`
  padding: 12px;
`;

const StyledCover = styled.Image`
  width: 100%;
  height: ${width}px;
`;

const StyledDivisorContainer = styled.View`
  margin: 16px 0px;
  padding: 10px 0px;
  border-radius: 8px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
`;

const StyledDivisor = styled.View`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  height: 1px;
`;

const StyledBody = styled.Text`
  font-size: 16px;
`;

const StyledTitle = styled(StyledBody)`
  font-weight: bold;
`;

const StyledText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.primary};
`;

export default HomeScreen;
