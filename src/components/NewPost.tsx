import React from 'react';
import { View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';

const Hello: React.FC = () => {
  return (
    <StyledContainer>
      <Icon name="attach-file" size={30} color="#900" />
      <StyledTextInput placeholder='Digite aqui o seu texto'/>
      <FAIcon name="send-o" size={30} color="#900" />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fefbf3;
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.15);
  padding: 0 12px 12px;
  margin: 0 12px 16px;
  border-radius: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const StyledTitle = styled(StyledText)`
  font-weight: bold;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  color: #9d9d9d;
`;

export default Hello;
