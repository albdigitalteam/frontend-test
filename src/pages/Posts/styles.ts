import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  padding: 20px;
`;

export const ItemContainer = styled.TouchableOpacity`
  padding: 16px;
  margin: 5px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.heading};
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${colors.body};
`;
