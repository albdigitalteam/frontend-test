import React, { useRef, useState } from 'react';
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/MaterialIcons';
import styled, { useTheme } from 'styled-components/native';

import { PostProps } from '../components/Post';

import Header from '../components/Header';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

import posts from '../mocks/posts';

const POST_WIDTH = Dimensions.get('window').width * 0.85;

const HomeScreen: React.FC = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const [floatingButtonVisibility, setFloatingButtonVisibility] =
    useState<boolean>(false);
  const { colors } = useTheme();

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

  return (
    <StyledContainer>
      <Header title="POSTGRAM" showUserIcon />
      <NewPost />
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
        renderItem={({ item }: { item: PostProps }) => <Post data={item} />}
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

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
})`
  padding-top: 14px;
  padding-bottom: 16px;
`;

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
