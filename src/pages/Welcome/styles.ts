import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 48px;
`;

export const Description = styled.Text`
  color: ${colors.body};
  font-family: ${fonts.text};
  font-size: 18px;
`;

export const Footer = styled.View`
  padding: 20px;
`;
