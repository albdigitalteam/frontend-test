import React, { useState } from "react";
import { FlatList, Modal } from "react-native";
import { Wrapper } from "./styles";
import ModalContent from "./fragments/Modal";
import { useSelector } from "react-redux";
import FeedList from "./fragments/FeedList";
import HeaderBar from "../../components/HeaderBar";

const HomeBox = ({ params }) => {
  const posts = useSelector((state) => state.appPosts.posts);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Wrapper>
      <HeaderBar
        title="faça um post novo!"
        iconAction={() => setModalVisible(true)}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContent
          modalVisible={modalVisible}
          setModalVisible={(bool) => setModalVisible(bool)}
        />
      </Modal>
      <FlatList
        data={posts}
        renderItem={({ item }) => <FeedList item={item} />}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
};

export default HomeBox;
