import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  margin: 0 0 0 12px;
  justify-content: center;
  min-height: 60px;
`;

export const UserImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const UserEmail = styled.Text`
  color: ${colors.body};
  font-family: ${fonts.text};
`;
