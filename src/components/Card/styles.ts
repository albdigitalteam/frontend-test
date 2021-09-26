import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-radius: 4px;
  border-color: ${colors.blue_light};

  width: 100%;
  padding: 8px;
  margin: 5px 0;
`;
