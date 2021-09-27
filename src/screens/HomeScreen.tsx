import React, { useRef, useState, useEffect } from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled, { useTheme } from 'styled-components/native';

import Header from '../components/Header';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

import { SET_USERS, UserState } from '../store/slices/usersSlice';
import {
  GET_COMMENTS,
  GET_POSTS,
  Post as PostProps,
  PostsState,
} from '../store/slices/postsSlice';
import { RootState } from '../store';
import { RootStackParamList } from '../routes';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const POST_WIDTH = Dimensions.get('window').width * 0.85;

const HomeScreen: React.FC = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState<boolean>(false);
  const { colors } = useTheme();
  const { navigate } = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();
  const { posts } = useSelector<RootState, PostsState>(state => state.post);
  const { userLogged } = useSelector<RootState, UserState>(state => state.user);

  const handleScrolling = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { x },
      },
    } = e;
    if (!floatingButtonVisibility && x > 50) {
      setFloatingButtonVisibility(true);
    } else if (floatingButtonVisibility && x < 50) {
      setFloatingButtonVisibility(false);
    }
  };

  useEffect(() => {
    dispatch(SET_USERS());
    dispatch(GET_POSTS());
    dispatch(GET_COMMENTS());
  }, []);

  return (
    <StyledContainer>
      <Header title="POSTGRAM" showUserIcon />
      <NewPost userLogged={userLogged} />
      <StyledFlatList
        data={posts}
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={handleScrolling}
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        snapToAlignment="start"
        keyboardDismissMode={'on-drag'}
        snapToOffsets={[...Array(posts.length)].map(
          (x, i) => i * (POST_WIDTH + 10) + (i - 1) * 10,
        )}
        keyExtractor={item => `${item.title}-${item.id}`}
        renderItem={({ item }: { item: PostProps }) => (
          <Post
            data={item}
            onPress={() => navigate('Details', { postId: item.id })}
          />
        )}
      />

      {floatingButtonVisibility && (
        <StyledFloatingButtonContainer
          onPress={() =>
            flatListRef.current?.scrollToOffset({ animated: true, offset: 0 })
          }>
          <FAIcon name="keyboard-arrow-left" size={25} color={colors.primary} />
        </StyledFloatingButtonContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const StyledFlatList = styled(FlatList as new () => FlatList<PostProps>).attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingHorizontal: 10,
    paddingBottom: 16
  },
})``;

const StyledFloatingButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${({ theme: { colors } }) => colors.quaternary};
  position: absolute;
  bottom: 10px;
  right: 10px;
  align-items: center;
  justify-content: center;
`;

export default HomeScreen;
