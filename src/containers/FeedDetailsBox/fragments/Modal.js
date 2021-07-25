import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { newCommentsRequest } from "../../../redux/comments/actions";
import { getCommentsRequest } from "../../../redux/comments/actions";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 220,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textinout: {
    height: 40,
    borderWidth: 1,
    borderColor: "darkgrey",
    width: "90%",
    color: "black",
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  pressable: {
    height: 40,
    marginTop: 40,
    width: "90%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
});

const Modal = ({ setModalVisible, modalVisible, postId }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const createNewPost = () => {
    if (name.length && body.length) {
      dispatch(
        newCommentsRequest({
          postId,
          name,
          body,
        })
      );
      setName("");
      setBody("");
      setModalVisible(!modalVisible);
    } else {
      Alert.alert("Ops", "Preencha o nome e pense em algo para escrever!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.textinout}
            onChangeText={setName}
            value={name}
            placeholderTextColor="black"
            placeholder="titulo do comentario"
          />
          <TextInput
            style={styles.textinout}
            onChangeText={setBody}
            value={body}
            placeholderTextColor="black"
            placeholder="O que você está pensando?"
          />
          <Pressable
            onPress={() => {
              createNewPost();
            }}
            style={styles.pressable}
          >
            <Text style={styles.text}>CRIAR</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
