import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  margin: 50px 0 0 0;
`;

export const ButtonMenu = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: ${colors.blue_light};

  margin: 0 15px;
  height: 50px;
  justify-content: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 18px;
  color: ${colors.heading};
`;

export const ButtonLogoutMenu = styled.TouchableOpacity`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colors.blue_light};

  margin: auto 15px 50px 15px;
  height: 50px;
  justify-content: center;
`;
