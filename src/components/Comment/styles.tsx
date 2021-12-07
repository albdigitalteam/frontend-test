import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  background-color: #f4f4f4;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 12px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const AvatarContainer = styled.View`
  justify-content: center;
`;

export const IconContainer = styled.View`
  justify-content: center;
`;

export const HeaderContentContainer = styled.View`
  display: flex;
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const TextTitle = styled.Text`
  color: #414359;
  font-size: 18px;
`;

export const TextSubtitle = styled.Text`
  color: #9fa6b5;
  font-size: 12px;
`;
