import styled from "styled-components/native";
import { Colors } from "../../../_utils/constants";

export const ViewHeader = styled.View((props) => ({
  height: 55,
  width: "100%",
  justifyContent: "center",
  marginBottom: 10,
}));

export const TextHeader = styled.Text((props) => ({
  fontSize: 20,
  color: Colors.title,
  textAlign: "center",
}));

export const ViewIcon = styled.TouchableOpacity((props) => ({
  position: "absolute",
  left: 20,
}));

export const Icon = styled.Image((props) => ({ width: 30, height: 30 }));

export const ViewRightIcon = styled.TouchableOpacity((props) => ({
  position: "absolute",
  right: 20,
  flexDirection: "row",
}));
