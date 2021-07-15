import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #ffffff;
`;

export const ContainerPost = styled.View`
  background: #ffffff;
  border-top-width: 1px;
  border-color: #d9dbe9;
  padding: 8px;

  margin-bottom: 16px;
`;

export const ContainerComment = styled.View`
  background: #ffffff;
  border-top-width: 1px;
  border-color: #d9dbe9;
  padding: 16px 18px;
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
  font-size: 12px;
  font-family: 'Roboto_400Regular';
  margin-bottom: 4px;
`;

export const TextNameUserComment = styled.Text`
  color: #14142b;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  line-height: 20px;
`;

export const TextEmailUser = styled.Text`
  color: #8d8da6;
  font-size: 14px;
  font-family: 'Roboto_400Regular';
  margin-bottom: 8px;
`;
