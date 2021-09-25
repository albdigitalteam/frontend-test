import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import Header from '../components/Header';
import NewPost from '../components/NewPost';
import Post from '../components/Post';

import posts from '../mocks/posts';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Header title="POSTGRAM" />
        <NewPost />
        <StyledFlatList
          data={posts}
          renderItem={({ item: { id, userId, title, body } }) => (
            <Post id={id} userId={userId} title={title} body={body} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const StyledFlatList = styled.FlatList`
  padding-top: 10px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFBF3',
    paddingRight: 12,
    paddingLeft: 12,
  },
  wrapper: {
    flex: 1,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default HomeScreen;
