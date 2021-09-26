import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const ItemContainer = styled.TouchableOpacity`
  padding: 16px;
  margin: 5px 0;
`;

export const UserEmail = styled.Text`
  font-size: 18px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Description = styled.Text`
  margin: 10px 0;
  font-size: 14px;
  color: ${colors.body};
  font-family: ${fonts.text};
`;
