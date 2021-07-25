import React, { useState } from "react";
import { Modal, FlatList } from "react-native";
import {
  Title,
  SubText,
  WrapperComments,
  ViewInput,
  TitleInput,
  TitleComments,
} from "../styles";
import ModalContent from "./Modal";
import { useSelector } from "react-redux";

const CommentsContent = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const comments = useSelector((state) => state.appComments.comments);
  const postComment = comments.filter((i) => {
    return i.postId === item.id && comments;
  });

  return (
    <>
      <FlatList
        data={postComment}
        renderItem={({ item, index }) => (
          <WrapperComments>
            {index === 0 && <TitleComments>Comentarios</TitleComments>}
            <TitleComments>{item.name}</TitleComments>
            <SubText>{item.body}</SubText>
          </WrapperComments>
        )}
        keyExtractor={(item, index) => index.toString()}
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
          postId={item.id}
          setModalVisible={(bool) => setModalVisible(bool)}
        />
      </Modal>
      <ViewInput
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <TitleInput>escreva seu comentario</TitleInput>
      </ViewInput>
    </>
  );
};
export default CommentsContent;
