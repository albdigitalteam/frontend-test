import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.heading};
  font-family: ${fonts.heading};
  font-size: 28px;
`;

export const ListContainer = styled.View`
  padding: 20px;
`;

export const CardContent = styled.TouchableOpacity``;
