import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListContainer = styled.View`
  padding: 20px;
`;

export const CardContent = styled.TouchableOpacity`
  flex-direction: row;
`;

export const CardDescriptionContent = styled.View`
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
`;

export const UserEmail = styled.Text``;
