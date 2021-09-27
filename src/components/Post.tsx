import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Post as PostProps } from '../store/slices/postsSlice';

import { RootState } from '../store';
import { PostsState } from '../store/slices/postsSlice';
import { useSelector } from 'react-redux';

type Props = {
  data: PostProps;
  onPress: () => void;
};

const { width } = Dimensions.get('window');

const Post: React.FC<Props> = ({ data: { id, title, body }, onPress }) => {
  const { comments } = useSelector<RootState, PostsState>(state => state.post);

  const numOfComments = useMemo(() => {
    return comments.filter(comment => comment.postId === id).length;
  }, [id, comments]);

  return (
    <StyledContainer>
      <StyledCover
        source={{
          uri: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
        }}
      />
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledTextView>
          <StyledText numberOfLines={5} ellipsizeMode="tail">
            {body}
          </StyledText>
        </StyledTextView>
        <StyledDots>...</StyledDots>
        <Button onPress={onPress}>
          <StyledButtonText>ver comentários ({numOfComments})</StyledButtonText>
        </Button>
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  width: ${width * 0.85}px;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.15);
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
`;

const StyledWrapper = styled.View`
  padding: 0 12px 16px;
  flex: 1;
  width: 100%;
`;

const StyledTextView = styled.View`
  flex: 1;
`;

const StyledTitle = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
  font-weight: bold;
  text-align: center;
`;

const StyledText = styled(StyledTitle)`
  font-weight: normal;
  text-align: left;
`;

const StyledDots = styled.Text`
  text-align: center;
  margin-bottom: 15px;
`;

const StyledCover = styled.Image`
  width: 100%;
  height: ${width - 48}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  color: ${({ theme: { colors } }) => colors.quaternary};
`;

export default Post;
