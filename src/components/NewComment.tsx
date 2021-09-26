import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styled, { useTheme } from 'styled-components/native';

const NewComment: React.FC = () => {
  const {
    colors: { secondary },
  } = useTheme();
  return (
    <StyledContainer>
      <StyledTextInput placeholder="Digite aqui o seu comentário" />
      <Button onPress={() => { }}>
        <FAIcon name="send-o" size={25} color={secondary} />
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fefbf3;
  box-shadow: 0px 3px 15px rgba(86, 86, 86, 0.15);
  padding: 12px;
  margin-top: 18px;
  margin-bottom: 18px;
  border-radius: 10px;
`;

const StyledTextInput = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 16px;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export default NewComment;
