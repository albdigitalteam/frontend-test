import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #ffffff;
  padding: 16px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  background: #8011fd;
`;

export const Title = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 24px;
  line-height: 32px;
  color: #3e0f6d;
  text-align: center;
  margin-bottom: 32px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-family: 'Roboto_700Bold';
`;
