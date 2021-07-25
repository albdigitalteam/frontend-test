import styled from "styled-components/native";
import { Colors, Size } from "../../../_utils/constants";

export const Wrapper = styled.View((props) => ({
  backgroundColor: Colors.appBackgroundColor,
  flex: 1,
}));

export const WrapperTitle = styled.View((props) => ({
  height: "30%",
}));

export const WrapperLoading = styled.View((props) => ({
  width: "100%",
  height: "100%",
  backgroundColor: "white",
}));

export const WrapperComments = styled.View((props) => ({
  width: "100%",
}));

export const ViewThinking = styled.View((props) => ({
  height: 120,
  width: "100%",
  backgroundColor: "red",
}));

export const Title = styled.Text((props) => ({
  fontSize: Size.fontSizeTitle,
  color: Colors.title,
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
}));

export const TextEmail = styled.Text((props) => ({
  fontSize: 14,
  color: Colors.title,
  marginTop: 20,
  marginLeft: 20,
  textAlign: "right",
  marginRight: 20,
  fontWeight: "bold",
}));

export const TitleComments = styled.Text((props) => ({
  fontSize: 22,
  color: Colors.title,
  fontWeight: "bold",
  marginTop: 20,
  marginLeft: 20,
}));

export const SubText = styled.Text((props) => ({
  fontSize: Size.fontSizeSubTitle,
  color: Colors.title,
  marginTop: 20,
  marginLeft: 20,
  marginRight: 20,
}));

export const Image = styled.View((props) => ({
  height: 100,
  width: "50%",
  backgroundColor: "red",
  marginBottom: 20,
}));

export const TextInput = styled.TextInput((props) => ({
  marginLeft: 20,
  height: 40,
  borderWidth: 1,
  borderColor: "darkgrey",
  width: "90%",
  marginTop: 20,
  paddingLeft: 10,
  borderRadius: 5,
}));

export const ViewInput = styled.Pressable((props) => ({
  marginLeft: 20,
  height: 40,
  borderWidth: 1,
  borderColor: "darkgrey",
  width: "90%",
  marginTop: 20,
  paddingLeft: 10,
  borderRadius: 5,
  justifyContent: "center",
}));

export const TitleInput = styled.Text((props) => ({
  fontSize: 14,
  color: Colors.title,
}));
