import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.TextInput`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 4px;
  border-color: ${colors.blue_light};

  width: 100%;
  height: 200px;

  padding: 8px;
  color: ${colors.body};
  font-family: ${fonts.text};
  font-size: 14px;
`;
