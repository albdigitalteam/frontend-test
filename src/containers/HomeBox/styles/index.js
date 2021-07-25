import styled from "styled-components/native";
import { Colors, Size } from "../../../_utils/constants";

export const Wrapper = styled.View((props) => ({
  backgroundColor: Colors.appBackgroundColor,
  flex: 1,
}));

export const Image = styled.Image((props) => ({
  height: 120,
  width: "100%",
}));

export const ViewRow = styled.TouchableOpacity((props) => ({
  flex: 1,
  flexDirection: "column",
  margin: 1,
}));

export const Title = styled.Text((props) => ({
  fontSize: Size.fontSizeSubTitle,
  color: Colors.title,
  textAlign: "center",
}));
