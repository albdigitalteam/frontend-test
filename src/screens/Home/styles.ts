import styled from 'styled-components/native';

export const ButtonAddPost = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  margin: 8px 0 24px;
`;

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  padding: 8px;
`;

export const CardPost = styled.TouchableOpacity`
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #d9dbe9;
  height: 150px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const TextAddPost = styled.Text`
  color: #6d3ca5;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  margin-right: 6px;
`;

export const TextNameUser = styled.Text`
  color: #14142b;
  font-family: 'Roboto_700Bold';
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const TextTitle = styled.Text`
  color: #4e4b66;
  font-size: 14px;
  font-family: 'Roboto_700Bold';
  line-height: 18px;
  margin-bottom: 8px;
`;

export const TextBody = styled.Text`
  color: #14142b;
  flex: 1;
  flex-direction: row;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  line-height: 18px;
`;
