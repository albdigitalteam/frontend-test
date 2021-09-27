import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import Header from '../components/Header';
import Comment from '../components/Comment';
import NewComment from '../components/NewComment';

import { RootStackParamList } from '../routes';
import { RootState } from '../store';
import { UserState } from '../store/slices/usersSlice';
import { PostsState, DELETE_POST } from '../store/slices/postsSlice';

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
  const { userLogged } = useSelector<RootState, UserState>(state => state.user);
  const { comments, posts } = useSelector<RootState, PostsState>(
    state => state.post,
  );
  const dispatch = useDispatch();

  const post = useMemo(() => {
    return posts.find(p => p.id === postId);
  }, [postId]);

  const postComments = useMemo(() => {
    return comments.filter(comment => comment.postId === postId);
  }, [postId, comments]);

  return (
    <>
      <Header
        title="Detalhes"
        showBackButton
        onPressBack={goBack}
        isOwner={userLogged ? post?.userId === userLogged.id : false}
        onDeletePost={() => {
          goBack();
          dispatch(DELETE_POST({ id: postId }));
        }}
      />
      <StyledContainer>
        <StyledCover
          source={{
            uri: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
          }}
        />
        <StyledContent>
          <StyledTitle>{post?.title}</StyledTitle>
          <StyledBody>{post?.body}</StyledBody>
          {postComments.length > 0 && (
            <StyledDivisorContainer>
              <StyledText>Comentários</StyledText>
            </StyledDivisorContainer>
          )}

          {postComments.map((comment, index) => (
            <>
              <Comment
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
                postId={comment.postId}
                id={comment.id}
              />
              {index !== postComments.length - 1 && (
                <StyledDivisor key={`divisor${index}`} />
              )}
            </>
          ))}
          <NewComment postId={postId} userLogged={userLogged} />
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
