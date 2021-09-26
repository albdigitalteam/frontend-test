import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
`;

export const Content = styled.View`
  margin: 0 0 0 12px;
  justify-content: center;
`;

export const UserImage = styled.Image`
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${colors.heading};
`;

export const UserEmail = styled.Text`
  color: ${colors.body};
`;
