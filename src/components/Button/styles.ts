import styled from "styled-components/native";
import fonts from "../../styles/fonts";

export const Container = styled.TouchableOpacity`
  background-color: #375f9b;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: ${fonts.heading};
`;
