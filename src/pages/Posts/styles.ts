import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  padding: 20px;
`;
export const TitleScreen = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemContent = styled.TouchableOpacity`
  flex: 1;
  padding: 16px;
  margin: 5px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${colors.body};
  font-family: ${fonts.text};
`;
