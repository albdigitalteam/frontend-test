import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const Container = styled.View`
  background: #ffffff;
  padding: 24px 8px 16px;
  flex: 1;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #dcdaeb;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 4px 8px 32px;
`;

export const ButtonSavePost = styled.TouchableOpacity`
  background: #9e4bfb;
  padding: 6px 16px;
  border-radius: 16px;
`;

export const TextSavePost = styled.Text`
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 16px;
`;

export const ContainerModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContentModal = styled.View`
  background: #f2f3f7;
  width: ${SCREEN_WIDTH - 32}px;
  padding: 16px 16px 24px;
  border-radius: 16px;
  height: 50%;
`;

export const Card = styled.TouchableOpacity`
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #d9dbe9;

  padding: 8px;
  margin-bottom: 8px;
`;

export const TextTitleModal = styled.Text`
  color: #111;
  font-family: 'Roboto_400Regular';
  font-size: 16px;
`;
