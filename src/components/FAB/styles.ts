import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 15;

  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  border-radius: 35px;

  background-color: ${colors.blue};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
`;
